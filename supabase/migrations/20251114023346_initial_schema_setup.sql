/*
  # Etailed Digital India - Initial Database Schema

  ## Overview
  Complete database schema for multi-service SaaS platform supporting BBPS, AEPS, DMT, 
  E-commerce, Education, Travel, and Government services with multi-level commission system.

  ## New Tables

  ### 1. User Management
  - `profiles` - Extended user profiles with KYC and role information
    - id (uuid, references auth.users)
    - full_name, email, phone
    - role (enum: admin, sub_admin, white_label, super_distributor, distributor, retailer, reseller, support)
    - parent_id (uuid, self-reference for hierarchy)
    - kyc_status, kyc_documents
    - photo_url, address, state, district
    - certificate_id, id_card_url
    - is_active, created_at, updated_at

  ### 2. Wallet System
  - `wallets` - User wallet balances
    - id, user_id, balance, locked_balance
    - currency (default INR)
    - created_at, updated_at

  - `wallet_transactions` - All wallet debits/credits
    - id, wallet_id, user_id
    - type (credit, debit), amount, balance_after
    - reference_type, reference_id
    - description, metadata
    - created_at

  ### 3. Service Management
  - `service_categories` - Main service categories
    - id, name, slug, icon, color, sort_order
    - description, is_active

  - `services` - Individual services
    - id, category_id, name, slug
    - description, icon, redirect_url
    - is_active, requires_kyc, min_amount, max_amount
    - provider, api_endpoint
    - created_at, updated_at

  ### 4. Commission Structure
  - `commission_rules` - Commission configuration per service and role
    - id, service_id, role
    - commission_type (flat, percentage)
    - commission_value
    - min_amount, max_amount
    - is_active

  - `commission_history` - Commission earnings record
    - id, transaction_id, user_id
    - service_id, amount, commission_earned
    - level (1, 2, 3 for multi-level)
    - status (pending, paid)
    - created_at, paid_at

  ### 5. Transaction Management
  - `transactions` - All service transactions
    - id, user_id, service_id
    - transaction_type, amount, status
    - reference_number, provider_reference
    - customer_details, metadata
    - created_at, completed_at

  ### 6. Government Quicklinks
  - `government_schemes` - Central and state government services
    - id, name, description, category
    - scheme_type (central, state)
    - state_code, ministry
    - redirect_url, logo_url
    - eligibility, documents_required
    - is_active, sort_order

  ### 7. White Label Management
  - `white_labels` - White label portal configurations
    - id, user_id, domain, subdomain
    - brand_name, logo_url
    - primary_color, secondary_color
    - is_active, expiry_date

  ### 8. Support System
  - `support_tickets` - Customer support tickets
    - id, user_id, subject, description
    - status (open, in_progress, resolved, closed)
    - priority (low, medium, high)
    - assigned_to, created_at, updated_at

  ## Security
  - Enable RLS on all tables
  - Policies for role-based access control
  - Users can only access their own data unless they are authorized by role hierarchy
*/

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create enum types
DO $$ BEGIN
  CREATE TYPE user_role AS ENUM (
    'admin',
    'sub_admin',
    'white_label',
    'super_distributor',
    'distributor',
    'retailer',
    'reseller',
    'support'
  );
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE kyc_status AS ENUM ('pending', 'submitted', 'verified', 'rejected');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE transaction_status AS ENUM ('pending', 'processing', 'success', 'failed', 'refunded');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE wallet_transaction_type AS ENUM ('credit', 'debit');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE commission_type AS ENUM ('flat', 'percentage');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE ticket_status AS ENUM ('open', 'in_progress', 'resolved', 'closed');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE ticket_priority AS ENUM ('low', 'medium', 'high');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE scheme_type AS ENUM ('central', 'state');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

-- 1. Profiles Table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text NOT NULL,
  email text UNIQUE NOT NULL,
  phone text UNIQUE NOT NULL,
  role user_role NOT NULL DEFAULT 'retailer',
  parent_id uuid REFERENCES profiles(id) ON DELETE SET NULL,
  kyc_status kyc_status DEFAULT 'pending',
  kyc_documents jsonb DEFAULT '{}',
  photo_url text,
  address text,
  state text,
  district text,
  certificate_id text UNIQUE,
  id_card_url text,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- 2. Wallets Table
CREATE TABLE IF NOT EXISTS wallets (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid UNIQUE NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  balance decimal(15,2) DEFAULT 0 CHECK (balance >= 0),
  locked_balance decimal(15,2) DEFAULT 0 CHECK (locked_balance >= 0),
  currency text DEFAULT 'INR',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE wallets ENABLE ROW LEVEL SECURITY;

-- 3. Wallet Transactions Table
CREATE TABLE IF NOT EXISTS wallet_transactions (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  wallet_id uuid NOT NULL REFERENCES wallets(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  type wallet_transaction_type NOT NULL,
  amount decimal(15,2) NOT NULL CHECK (amount > 0),
  balance_after decimal(15,2) NOT NULL,
  reference_type text,
  reference_id uuid,
  description text NOT NULL,
  metadata jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE wallet_transactions ENABLE ROW LEVEL SECURITY;

-- 4. Service Categories Table
CREATE TABLE IF NOT EXISTS service_categories (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  icon text NOT NULL,
  color text DEFAULT '#0052cc',
  sort_order integer DEFAULT 0,
  description text,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE service_categories ENABLE ROW LEVEL SECURITY;

-- 5. Services Table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  category_id uuid NOT NULL REFERENCES service_categories(id) ON DELETE CASCADE,
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  icon text NOT NULL,
  redirect_url text,
  is_active boolean DEFAULT true,
  requires_kyc boolean DEFAULT false,
  min_amount decimal(15,2) DEFAULT 0,
  max_amount decimal(15,2),
  provider text,
  api_endpoint text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- 6. Commission Rules Table
CREATE TABLE IF NOT EXISTS commission_rules (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  service_id uuid NOT NULL REFERENCES services(id) ON DELETE CASCADE,
  role user_role NOT NULL,
  commission_type commission_type NOT NULL,
  commission_value decimal(10,2) NOT NULL CHECK (commission_value >= 0),
  min_amount decimal(15,2) DEFAULT 0,
  max_amount decimal(15,2),
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  UNIQUE(service_id, role)
);

ALTER TABLE commission_rules ENABLE ROW LEVEL SECURITY;

-- 7. Transactions Table
CREATE TABLE IF NOT EXISTS transactions (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  service_id uuid NOT NULL REFERENCES services(id) ON DELETE CASCADE,
  transaction_type text NOT NULL,
  amount decimal(15,2) NOT NULL CHECK (amount > 0),
  status transaction_status DEFAULT 'pending',
  reference_number text UNIQUE,
  provider_reference text,
  customer_details jsonb DEFAULT '{}',
  metadata jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  completed_at timestamptz
);

ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;

-- 8. Commission History Table
CREATE TABLE IF NOT EXISTS commission_history (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  transaction_id uuid NOT NULL REFERENCES transactions(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  service_id uuid NOT NULL REFERENCES services(id) ON DELETE CASCADE,
  amount decimal(15,2) NOT NULL CHECK (amount >= 0),
  commission_earned decimal(15,2) NOT NULL CHECK (commission_earned >= 0),
  level integer DEFAULT 1 CHECK (level >= 1 AND level <= 3),
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  paid_at timestamptz
);

ALTER TABLE commission_history ENABLE ROW LEVEL SECURITY;

-- 9. Government Schemes Table
CREATE TABLE IF NOT EXISTS government_schemes (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name text NOT NULL,
  description text,
  category text NOT NULL,
  scheme_type scheme_type NOT NULL,
  state_code text,
  ministry text,
  redirect_url text NOT NULL,
  logo_url text,
  eligibility text,
  documents_required text[],
  is_active boolean DEFAULT true,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE government_schemes ENABLE ROW LEVEL SECURITY;

-- 10. White Labels Table
CREATE TABLE IF NOT EXISTS white_labels (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid UNIQUE NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  domain text UNIQUE,
  subdomain text UNIQUE NOT NULL,
  brand_name text NOT NULL,
  logo_url text,
  primary_color text DEFAULT '#0052cc',
  secondary_color text DEFAULT '#009933',
  is_active boolean DEFAULT true,
  expiry_date date,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE white_labels ENABLE ROW LEVEL SECURITY;

-- 11. Support Tickets Table
CREATE TABLE IF NOT EXISTS support_tickets (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  subject text NOT NULL,
  description text NOT NULL,
  status ticket_status DEFAULT 'open',
  priority ticket_priority DEFAULT 'medium',
  assigned_to uuid REFERENCES profiles(id) ON DELETE SET NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE support_tickets ENABLE ROW LEVEL SECURITY;

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_profiles_role ON profiles(role);
CREATE INDEX IF NOT EXISTS idx_profiles_parent ON profiles(parent_id);
CREATE INDEX IF NOT EXISTS idx_profiles_state ON profiles(state);
CREATE INDEX IF NOT EXISTS idx_wallets_user ON wallets(user_id);
CREATE INDEX IF NOT EXISTS idx_wallet_transactions_user ON wallet_transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_wallet_transactions_wallet ON wallet_transactions(wallet_id);
CREATE INDEX IF NOT EXISTS idx_services_category ON services(category_id);
CREATE INDEX IF NOT EXISTS idx_transactions_user ON transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_transactions_status ON transactions(status);
CREATE INDEX IF NOT EXISTS idx_commission_history_user ON commission_history(user_id);
CREATE INDEX IF NOT EXISTS idx_commission_history_transaction ON commission_history(transaction_id);
CREATE INDEX IF NOT EXISTS idx_government_schemes_type ON government_schemes(scheme_type);
CREATE INDEX IF NOT EXISTS idx_support_tickets_user ON support_tickets(user_id);
CREATE INDEX IF NOT EXISTS idx_support_tickets_status ON support_tickets(status);

-- RLS Policies

-- Profiles: Users can read own profile, admins can read all
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id OR EXISTS (
    SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role IN ('admin', 'sub_admin')
  ));

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Admins can insert profiles"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (EXISTS (
    SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  ));

-- Wallets: Users can view own wallet
CREATE POLICY "Users can view own wallet"
  ON wallets FOR SELECT
  TO authenticated
  USING (user_id = auth.uid() OR EXISTS (
    SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role IN ('admin', 'sub_admin')
  ));

-- Wallet Transactions: Users can view own transactions
CREATE POLICY "Users can view own wallet transactions"
  ON wallet_transactions FOR SELECT
  TO authenticated
  USING (user_id = auth.uid() OR EXISTS (
    SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role IN ('admin', 'sub_admin')
  ));

-- Service Categories: Public read access
CREATE POLICY "Anyone can view active service categories"
  ON service_categories FOR SELECT
  TO authenticated
  USING (is_active = true OR EXISTS (
    SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  ));

-- Services: Public read access for active services
CREATE POLICY "Anyone can view active services"
  ON services FOR SELECT
  TO authenticated
  USING (is_active = true OR EXISTS (
    SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  ));

-- Transactions: Users can view own transactions
CREATE POLICY "Users can view own transactions"
  ON transactions FOR SELECT
  TO authenticated
  USING (user_id = auth.uid() OR EXISTS (
    SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role IN ('admin', 'sub_admin')
  ));

CREATE POLICY "Users can create own transactions"
  ON transactions FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

-- Commission History: Users can view own commissions
CREATE POLICY "Users can view own commission history"
  ON commission_history FOR SELECT
  TO authenticated
  USING (user_id = auth.uid() OR EXISTS (
    SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role IN ('admin', 'sub_admin')
  ));

-- Government Schemes: Public read access
CREATE POLICY "Anyone can view active government schemes"
  ON government_schemes FOR SELECT
  TO authenticated
  USING (is_active = true OR EXISTS (
    SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  ));

-- White Labels: Users can view own white label
CREATE POLICY "Users can view own white label"
  ON white_labels FOR SELECT
  TO authenticated
  USING (user_id = auth.uid() OR EXISTS (
    SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role IN ('admin', 'sub_admin')
  ));

-- Support Tickets: Users can view own tickets
CREATE POLICY "Users can view own support tickets"
  ON support_tickets FOR SELECT
  TO authenticated
  USING (user_id = auth.uid() OR assigned_to = auth.uid() OR EXISTS (
    SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role IN ('admin', 'sub_admin', 'support')
  ));

CREATE POLICY "Users can create support tickets"
  ON support_tickets FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

-- Commission Rules: Admin only
CREATE POLICY "Admins can manage commission rules"
  ON commission_rules FOR ALL
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  ));
