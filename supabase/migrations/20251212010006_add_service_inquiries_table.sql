/*
  # Add Service Inquiries Table

  1. New Tables
    - `service_inquiries`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `phone` (text, required)
      - `service_category` (text, required) - e.g., "Digital Business Services"
      - `service_type` (text) - specific service selected
      - `message` (text)
      - `status` (text, default: 'pending')
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `service_inquiries` table
    - Add policy for authenticated users (admin) to read all inquiries
    - Allow anyone to insert inquiries (public form submission)
*/

CREATE TABLE IF NOT EXISTS service_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service_category text NOT NULL,
  service_type text,
  message text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE service_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit inquiries"
  ON service_inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view inquiries"
  ON service_inquiries
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update inquiries"
  ON service_inquiries
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
