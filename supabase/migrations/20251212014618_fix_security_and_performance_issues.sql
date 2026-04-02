/*
  # Fix Security and Performance Issues

  ## Overview
  This migration addresses performance and security optimization issues identified in the database audit.

  ## Changes Made

  ### 1. Missing Foreign Key Indexes
  Added covering indexes for foreign keys to improve query performance:
  - `idx_commission_history_service` on `commission_history(service_id)`
  - `idx_support_tickets_assigned` on `support_tickets(assigned_to)`
  - `idx_transactions_service` on `transactions(service_id)`

  ### 2. RLS Policy Optimization
  Optimized all RLS policies to prevent re-evaluation of `auth.uid()` and other `auth.<function>()` calls for each row.
  Changed from `auth.uid()` to `(select auth.uid())` throughout all policies.
  This significantly improves query performance at scale by caching the auth function result.

  ### Tables Updated
  - profiles (3 policies optimized)
  - wallets (1 policy optimized)
  - wallet_transactions (1 policy optimized)
  - service_categories (1 policy optimized)
  - services (1 policy optimized)
  - transactions (2 policies optimized)
  - commission_history (1 policy optimized)
  - government_schemes (1 policy optimized)
  - white_labels (1 policy optimized)
  - support_tickets (2 policies optimized)
  - commission_rules (1 policy optimized)

  ## Security Notes
  - All RLS policies remain functionally identical but with improved performance
  - Foreign key indexes improve query performance without affecting security
*/

-- =====================================================
-- STEP 1: Add Missing Foreign Key Indexes
-- =====================================================

-- Index for commission_history.service_id foreign key
CREATE INDEX IF NOT EXISTS idx_commission_history_service 
  ON commission_history(service_id);

-- Index for support_tickets.assigned_to foreign key
CREATE INDEX IF NOT EXISTS idx_support_tickets_assigned 
  ON support_tickets(assigned_to);

-- Index for transactions.service_id foreign key
CREATE INDEX IF NOT EXISTS idx_transactions_service 
  ON transactions(service_id);

-- =====================================================
-- STEP 2: Optimize RLS Policies
-- =====================================================

-- Drop all existing policies before recreating optimized versions
DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
DROP POLICY IF EXISTS "Admins can insert profiles" ON profiles;
DROP POLICY IF EXISTS "Users can view own wallet" ON wallets;
DROP POLICY IF EXISTS "Users can view own wallet transactions" ON wallet_transactions;
DROP POLICY IF EXISTS "Anyone can view active service categories" ON service_categories;
DROP POLICY IF EXISTS "Anyone can view active services" ON services;
DROP POLICY IF EXISTS "Users can view own transactions" ON transactions;
DROP POLICY IF EXISTS "Users can create own transactions" ON transactions;
DROP POLICY IF EXISTS "Users can view own commission history" ON commission_history;
DROP POLICY IF EXISTS "Anyone can view active government schemes" ON government_schemes;
DROP POLICY IF EXISTS "Users can view own white label" ON white_labels;
DROP POLICY IF EXISTS "Users can view own support tickets" ON support_tickets;
DROP POLICY IF EXISTS "Users can create support tickets" ON support_tickets;
DROP POLICY IF EXISTS "Admins can manage commission rules" ON commission_rules;

-- =====================================================
-- OPTIMIZED PROFILES POLICIES
-- =====================================================

CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING ((select auth.uid()) = id OR EXISTS (
    SELECT 1 FROM profiles WHERE profiles.id = (select auth.uid()) AND profiles.role IN ('admin', 'sub_admin')
  ));

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) = id)
  WITH CHECK ((select auth.uid()) = id);

CREATE POLICY "Admins can insert profiles"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (EXISTS (
    SELECT 1 FROM profiles WHERE profiles.id = (select auth.uid()) AND profiles.role = 'admin'
  ));

-- =====================================================
-- OPTIMIZED WALLETS POLICIES
-- =====================================================

CREATE POLICY "Users can view own wallet"
  ON wallets FOR SELECT
  TO authenticated
  USING (user_id = (select auth.uid()) OR EXISTS (
    SELECT 1 FROM profiles WHERE profiles.id = (select auth.uid()) AND profiles.role IN ('admin', 'sub_admin')
  ));

-- =====================================================
-- OPTIMIZED WALLET TRANSACTIONS POLICIES
-- =====================================================

CREATE POLICY "Users can view own wallet transactions"
  ON wallet_transactions FOR SELECT
  TO authenticated
  USING (user_id = (select auth.uid()) OR EXISTS (
    SELECT 1 FROM profiles WHERE profiles.id = (select auth.uid()) AND profiles.role IN ('admin', 'sub_admin')
  ));

-- =====================================================
-- OPTIMIZED SERVICE CATEGORIES POLICIES
-- =====================================================

CREATE POLICY "Anyone can view active service categories"
  ON service_categories FOR SELECT
  TO authenticated
  USING (is_active = true OR EXISTS (
    SELECT 1 FROM profiles WHERE profiles.id = (select auth.uid()) AND profiles.role = 'admin'
  ));

-- =====================================================
-- OPTIMIZED SERVICES POLICIES
-- =====================================================

CREATE POLICY "Anyone can view active services"
  ON services FOR SELECT
  TO authenticated
  USING (is_active = true OR EXISTS (
    SELECT 1 FROM profiles WHERE profiles.id = (select auth.uid()) AND profiles.role = 'admin'
  ));

-- =====================================================
-- OPTIMIZED TRANSACTIONS POLICIES
-- =====================================================

CREATE POLICY "Users can view own transactions"
  ON transactions FOR SELECT
  TO authenticated
  USING (user_id = (select auth.uid()) OR EXISTS (
    SELECT 1 FROM profiles WHERE profiles.id = (select auth.uid()) AND profiles.role IN ('admin', 'sub_admin')
  ));

CREATE POLICY "Users can create own transactions"
  ON transactions FOR INSERT
  TO authenticated
  WITH CHECK (user_id = (select auth.uid()));

-- =====================================================
-- OPTIMIZED COMMISSION HISTORY POLICIES
-- =====================================================

CREATE POLICY "Users can view own commission history"
  ON commission_history FOR SELECT
  TO authenticated
  USING (user_id = (select auth.uid()) OR EXISTS (
    SELECT 1 FROM profiles WHERE profiles.id = (select auth.uid()) AND profiles.role IN ('admin', 'sub_admin')
  ));

-- =====================================================
-- OPTIMIZED GOVERNMENT SCHEMES POLICIES
-- =====================================================

CREATE POLICY "Anyone can view active government schemes"
  ON government_schemes FOR SELECT
  TO authenticated
  USING (is_active = true OR EXISTS (
    SELECT 1 FROM profiles WHERE profiles.id = (select auth.uid()) AND profiles.role = 'admin'
  ));

-- =====================================================
-- OPTIMIZED WHITE LABELS POLICIES
-- =====================================================

CREATE POLICY "Users can view own white label"
  ON white_labels FOR SELECT
  TO authenticated
  USING (user_id = (select auth.uid()) OR EXISTS (
    SELECT 1 FROM profiles WHERE profiles.id = (select auth.uid()) AND profiles.role IN ('admin', 'sub_admin')
  ));

-- =====================================================
-- OPTIMIZED SUPPORT TICKETS POLICIES
-- =====================================================

CREATE POLICY "Users can view own support tickets"
  ON support_tickets FOR SELECT
  TO authenticated
  USING (user_id = (select auth.uid()) OR assigned_to = (select auth.uid()) OR EXISTS (
    SELECT 1 FROM profiles WHERE profiles.id = (select auth.uid()) AND profiles.role IN ('admin', 'sub_admin', 'support')
  ));

CREATE POLICY "Users can create support tickets"
  ON support_tickets FOR INSERT
  TO authenticated
  WITH CHECK (user_id = (select auth.uid()));

-- =====================================================
-- OPTIMIZED COMMISSION RULES POLICIES
-- =====================================================

CREATE POLICY "Admins can manage commission rules"
  ON commission_rules FOR ALL
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM profiles WHERE profiles.id = (select auth.uid()) AND profiles.role = 'admin'
  ))
  WITH CHECK (EXISTS (
    SELECT 1 FROM profiles WHERE profiles.id = (select auth.uid()) AND profiles.role = 'admin'
  ));
