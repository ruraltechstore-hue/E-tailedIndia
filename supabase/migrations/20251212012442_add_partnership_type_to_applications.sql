/*
  # Add Partnership Type to Client Applications

  1. Changes
    - Add `partnership_type` column to `client_applications` table
    - Partnership types: Retailer, Distributor, Super Distributor
    - Default to 'Retailer' for existing records
  
  2. Security
    - No changes to existing RLS policies
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'client_applications' AND column_name = 'partnership_type'
  ) THEN
    ALTER TABLE client_applications 
    ADD COLUMN partnership_type text DEFAULT 'Retailer';
  END IF;
END $$;
