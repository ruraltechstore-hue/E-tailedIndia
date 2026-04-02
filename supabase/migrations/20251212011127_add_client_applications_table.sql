/*
  # Add Client Applications Table

  1. New Tables
    - `client_applications`
      - `id` (uuid, primary key)
      - `full_name` (text, required)
      - `email` (text, required)
      - `phone` (text, required)
      - `business_name` (text)
      - `business_type` (text)
      - `address` (text)
      - `city` (text)
      - `state` (text)
      - `pincode` (text)
      - `aadhar_number` (text)
      - `pan_number` (text)
      - `gst_number` (text)
      - `documents` (jsonb) - stores document file paths/URLs
      - `payment_amount` (numeric)
      - `payment_screenshot_url` (text)
      - `payment_reference` (text)
      - `status` (text, default: 'pending') - pending, approved, rejected
      - `remarks` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `client_applications` table
    - Add policy for authenticated users (admin) to read all applications
    - Allow anyone to insert applications (public form submission)
    - Authenticated users can update applications (for admin approval)
*/

CREATE TABLE IF NOT EXISTS client_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  business_name text,
  business_type text,
  address text,
  city text,
  state text,
  pincode text,
  aadhar_number text,
  pan_number text,
  gst_number text,
  documents jsonb DEFAULT '[]'::jsonb,
  payment_amount numeric,
  payment_screenshot_url text,
  payment_reference text,
  status text DEFAULT 'pending',
  remarks text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE client_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit applications"
  ON client_applications
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view applications"
  ON client_applications
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update applications"
  ON client_applications
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
