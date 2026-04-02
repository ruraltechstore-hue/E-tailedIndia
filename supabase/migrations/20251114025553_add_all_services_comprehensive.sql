/*
  # Add All Services - Comprehensive Service Catalog

  ## Overview
  Adding complete service catalog with 100+ services across all categories:
  - Banking & Cash Services (AEPS, DMT, Cash Deposit, Mini ATM)
  - Loan & Credit Services (Personal, Business, MSME, Mudra)
  - Insurance Services (Health, Life, Motor, Travel, Crop)
  - Utility & BBPS (Recharge, Bill Payments)
  - Tax & Business Registration Services
  - E-commerce & Logistics
  - Travel & Ticketing
  - Education & Skill Development
  - IT & Digital Services
  - Government Services
  - Rider Onboarding Services

  ## Changes
  - Insert all services with proper categorization
  - Each service has name, description, icon, category mapping
  - Services marked as active and properly sorted
*/

-- Get category IDs for reference
DO $$
DECLARE
  cat_financial uuid;
  cat_digital uuid;
  cat_tax uuid;
  cat_ecommerce uuid;
  cat_travel uuid;
  cat_education uuid;
  cat_website uuid;
  cat_marketing uuid;
  cat_government uuid;
BEGIN
  SELECT id INTO cat_financial FROM service_categories WHERE slug = 'financial-services';
  SELECT id INTO cat_digital FROM service_categories WHERE slug = 'digital-utility';
  SELECT id INTO cat_tax FROM service_categories WHERE slug = 'tax-business';
  SELECT id INTO cat_ecommerce FROM service_categories WHERE slug = 'ecommerce-marketplace';
  SELECT id INTO cat_travel FROM service_categories WHERE slug = 'travel-logistics';
  SELECT id INTO cat_education FROM service_categories WHERE slug = 'education-courses';
  SELECT id INTO cat_website FROM service_categories WHERE slug = 'website-tech';
  SELECT id INTO cat_marketing FROM service_categories WHERE slug = 'digital-marketing';
  SELECT id INTO cat_government FROM service_categories WHERE slug = 'government-services';

  -- Financial Services
  INSERT INTO services (category_id, name, slug, description, icon, requires_kyc, is_active) VALUES
  (cat_financial, 'AEPS', 'aeps', 'Aadhaar Enabled Payment System for cash withdrawal and deposits', 'Fingerprint', true, true),
  (cat_financial, 'Aadhaar Pay', 'aadhaar-pay', 'Make payments using Aadhaar authentication', 'Shield', true, true),
  (cat_financial, 'Mini ATM', 'mini-atm', 'Cash withdrawal service at your doorstep', 'Banknote', true, true),
  (cat_financial, 'Cash Deposit', 'cash-deposit', 'Deposit cash to any bank account', 'CircleDollarSign', true, true),
  (cat_financial, 'DMT', 'dmt', 'Domestic Money Transfer - Send money instantly', 'Send', true, true),
  (cat_financial, 'Micro ATM Services', 'micro-atm', 'Complete banking services through Micro ATM', 'CreditCard', true, true),
  (cat_financial, 'QR Code Payments', 'qr-payments', 'Accept payments via QR code', 'QrCode', false, true),
  (cat_financial, 'UPI Merchant Onboarding', 'upi-merchant', 'Register as UPI merchant', 'Store', true, true),
  (cat_financial, 'Balance Inquiry', 'balance-inquiry', 'Check bank account balance', 'Eye', false, true),
  (cat_financial, 'Mini Statement', 'mini-statement', 'Get recent transaction history', 'FileText', false, true),
  (cat_financial, 'Personal Loan', 'personal-loan', 'Quick personal loan assistance', 'Wallet', true, true),
  (cat_financial, 'Business Loan', 'business-loan', 'Business loan for entrepreneurs', 'Briefcase', true, true),
  (cat_financial, 'MSME Loan', 'msme-loan', 'Loans for Micro, Small & Medium Enterprises', 'Factory', true, true),
  (cat_financial, 'Mudra Loan', 'mudra-loan', 'PMMY Mudra loan application support', 'TrendingUp', true, true),
  (cat_financial, 'Gold Loan', 'gold-loan', 'Loan against gold ornaments', 'Award', true, true),
  (cat_financial, 'Home Loan', 'home-loan', 'Home loan application assistance', 'Home', true, true),
  (cat_financial, 'Vehicle Loan', 'vehicle-loan', 'Two-wheeler and four-wheeler loans', 'Car', true, true),
  (cat_financial, 'Credit Card Loan', 'credit-card-loan', 'Loan on credit card', 'CreditCard', true, true),
  (cat_financial, 'CIBIL Score Check', 'cibil-score', 'Check your credit score', 'BarChart', false, true),
  (cat_financial, 'Credit Card to Bank Transfer', 'cc-to-bank', 'Transfer credit card balance to bank', 'ArrowRightLeft', true, true),
  (cat_financial, 'Health Insurance', 'health-insurance', 'Medical and health insurance plans', 'Heart', true, true),
  (cat_financial, 'Life Insurance', 'life-insurance', 'Term and life insurance policies', 'Shield', true, true),
  (cat_financial, 'Motor Insurance', 'motor-insurance', 'Car and bike insurance', 'Car', true, true),
  (cat_financial, 'Travel Insurance', 'travel-insurance', 'Insurance for domestic and international travel', 'Plane', false, true),
  (cat_financial, 'Crop Insurance', 'crop-insurance', 'Agricultural crop insurance', 'Sprout', true, true),
  (cat_financial, 'Mutual Funds', 'mutual-funds', 'Invest in mutual funds', 'TrendingUp', true, true),
  (cat_financial, 'SIP Setup', 'sip-setup', 'Systematic Investment Plan setup', 'Calendar', true, true),
  (cat_financial, 'Digital Gold', 'digital-gold', 'Buy and sell digital gold', 'Award', false, true),
  (cat_financial, 'NPS Registration', 'nps-registration', 'National Pension System enrollment', 'UserCheck', true, true),
  (cat_financial, 'New Bank Account', 'new-bank-account', 'Open new bank account online', 'Building2', true, true)
  ON CONFLICT (slug) DO NOTHING;

  -- Digital & Utility Services
  INSERT INTO services (category_id, name, slug, description, icon, requires_kyc, is_active) VALUES
  (cat_digital, 'Mobile Recharge', 'mobile-recharge', 'All operators prepaid recharge', 'Smartphone', false, true),
  (cat_digital, 'DTH Recharge', 'dth-recharge', 'All DTH operators recharge', 'Tv', false, true),
  (cat_digital, 'Electricity Bill', 'electricity-bill', 'Pay electricity bills online', 'Zap', false, true),
  (cat_digital, 'Gas Bill', 'gas-bill', 'LPG cylinder booking and bill payment', 'Flame', false, true),
  (cat_digital, 'Water Bill', 'water-bill', 'Municipal water bill payment', 'Droplet', false, true),
  (cat_digital, 'Broadband Bill', 'broadband-bill', 'Internet and broadband bill payment', 'Wifi', false, true),
  (cat_digital, 'Postpaid Bill', 'postpaid-bill', 'Mobile postpaid bill payment', 'Smartphone', false, true),
  (cat_digital, 'Landline Bill', 'landline-bill', 'Telephone landline bill payment', 'Phone', false, true),
  (cat_digital, 'FASTag Recharge', 'fastag-recharge', 'FASTag recharge for all banks', 'Truck', false, true),
  (cat_digital, 'Cable TV Bill', 'cable-tv-bill', 'Cable television bill payment', 'Monitor', false, true),
  (cat_digital, 'Housing Society', 'housing-society', 'Society maintenance payment', 'Building', false, true),
  (cat_digital, 'Municipal Tax', 'municipal-tax', 'Property and municipal tax payment', 'Landmark', false, true),
  (cat_digital, 'Education Fee', 'education-fee', 'School and college fee payment', 'GraduationCap', false, true)
  ON CONFLICT (slug) DO NOTHING;

  -- Tax & Business Services
  INSERT INTO services (category_id, name, slug, description, icon, requires_kyc, is_active) VALUES
  (cat_tax, 'PAN Card', 'pan-card', 'New PAN card application', 'CreditCard', true, true),
  (cat_tax, 'PAN Correction', 'pan-correction', 'PAN card correction and update', 'Edit', true, true),
  (cat_tax, 'GST Registration', 'gst-registration', 'New GST registration', 'FileCheck', true, true),
  (cat_tax, 'GST Return Filing', 'gst-return', 'Monthly and quarterly GST filing', 'FileText', true, true),
  (cat_tax, 'Income Tax Return', 'itr-filing', 'ITR filing for individuals and businesses', 'Receipt', true, true),
  (cat_tax, 'TAN Registration', 'tan-registration', 'Tax Deduction Account Number', 'Hash', true, true),
  (cat_tax, 'Digital Signature', 'digital-signature', 'DSC for e-filing and tenders', 'PenTool', true, true),
  (cat_tax, 'MSME Registration', 'msme-registration', 'Udyam registration certificate', 'Award', true, true),
  (cat_tax, 'FSSAI License', 'fssai-license', 'Food license registration', 'Utensils', true, true),
  (cat_tax, 'Trade License', 'trade-license', 'Shop and establishment license', 'Store', true, true),
  (cat_tax, 'Company Registration', 'company-registration', 'OPC, Pvt Ltd, LLP registration', 'Building2', true, true),
  (cat_tax, 'Partnership Firm', 'partnership-firm', 'Partnership deed registration', 'Handshake', true, true),
  (cat_tax, 'Import Export Code', 'iec-code', 'IEC for import/export business', 'Globe', true, true),
  (cat_tax, 'Professional Tax', 'professional-tax', 'PT registration and payment', 'Briefcase', true, true)
  ON CONFLICT (slug) DO NOTHING;

  -- E-commerce & Logistics
  INSERT INTO services (category_id, name, slug, description, icon, requires_kyc, is_active) VALUES
  (cat_ecommerce, 'Amazon Affiliate', 'amazon-affiliate', 'Earn from Amazon product sales', 'ShoppingBag', false, true),
  (cat_ecommerce, 'Flipkart Affiliate', 'flipkart-affiliate', 'Flipkart affiliate partnership', 'ShoppingCart', false, true),
  (cat_ecommerce, 'Meesho Affiliate', 'meesho-affiliate', 'Resell Meesho products', 'ShoppingBag', false, true),
  (cat_ecommerce, 'Myntra Affiliate', 'myntra-affiliate', 'Fashion affiliate program', 'Shirt', false, true),
  (cat_ecommerce, 'Courier Booking', 'courier-booking', 'Book courier and parcels', 'Package', false, true),
  (cat_ecommerce, 'Courier Pickup', 'courier-pickup', 'Schedule pickup service', 'PackageCheck', false, true),
  (cat_ecommerce, 'Amazon Easy Store', 'amazon-easy-store', 'Amazon delivery partner store', 'Store', true, true),
  (cat_ecommerce, 'Flipkart Delivery', 'flipkart-delivery', 'Ekart delivery franchise', 'Truck', true, true)
  ON CONFLICT (slug) DO NOTHING;

  -- Travel & Ticketing
  INSERT INTO services (category_id, name, slug, description, icon, requires_kyc, is_active) VALUES
  (cat_travel, 'Train Booking', 'train-booking', 'IRCTC train ticket booking', 'TrainFront', false, true),
  (cat_travel, 'Bus Booking', 'bus-booking', 'Inter-city bus ticket booking', 'Bus', false, true),
  (cat_travel, 'Flight Booking', 'flight-booking', 'Domestic and international flights', 'Plane', false, true),
  (cat_travel, 'Hotel Booking', 'hotel-booking', 'Hotel reservation services', 'Hotel', false, true),
  (cat_travel, 'Tour Packages', 'tour-packages', 'Holiday and tour packages', 'Map', false, true),
  (cat_travel, 'Passport Assistance', 'passport-assistance', 'Passport application support', 'Bookmark', true, true),
  (cat_travel, 'VISA Assistance', 'visa-assistance', 'International VISA support', 'Globe', true, true)
  ON CONFLICT (slug) DO NOTHING;

  -- Education Services
  INSERT INTO services (category_id, name, slug, description, icon, requires_kyc, is_active) VALUES
  (cat_education, 'Online Degree', 'online-degree', 'UG and PG degree programs', 'GraduationCap', true, true),
  (cat_education, 'Diploma Courses', 'diploma-courses', 'Professional diploma programs', 'BookOpen', false, true),
  (cat_education, 'Certification Courses', 'certification-courses', 'Industry certifications', 'Award', false, true),
  (cat_education, 'Digital Marketing Course', 'digital-marketing-course', 'Complete digital marketing training', 'Megaphone', false, true),
  (cat_education, 'Web Development', 'web-development-course', 'Learn web development', 'Code', false, true),
  (cat_education, 'AI & ML Courses', 'ai-ml-courses', 'Artificial Intelligence and Machine Learning', 'Brain', false, true),
  (cat_education, 'Data Analytics', 'data-analytics', 'Data science and analytics courses', 'BarChart', false, true),
  (cat_education, 'Spoken English', 'spoken-english', 'English speaking courses', 'MessageCircle', false, true),
  (cat_education, 'Internship Programs', 'internship-programs', 'IIEC certified internships', 'Briefcase', false, true),
  (cat_education, 'Scholarship Assistance', 'scholarship-assistance', 'Government scholarship support', 'DollarSign', false, true)
  ON CONFLICT (slug) DO NOTHING;

  -- Website & Tech Services
  INSERT INTO services (category_id, name, slug, description, icon, requires_kyc, is_active) VALUES
  (cat_website, 'Website Development', 'website-development', 'Custom website development', 'Globe', false, true),
  (cat_website, 'E-commerce Website', 'ecommerce-website', 'Online store development', 'ShoppingCart', false, true),
  (cat_website, 'Mobile App Development', 'mobile-app', 'Android and iOS app development', 'Smartphone', false, true),
  (cat_website, 'White Label Portal', 'white-label-portal', 'Custom branded portal development', 'Layers', true, true),
  (cat_website, 'API Integration', 'api-integration', 'Third-party API integration services', 'Plug', false, true),
  (cat_website, 'Hosting & Domain', 'hosting-domain', 'Web hosting and domain services', 'Server', false, true),
  (cat_website, 'CRM Development', 'crm-development', 'Custom CRM solutions', 'Users', false, true)
  ON CONFLICT (slug) DO NOTHING;

  -- Digital Marketing
  INSERT INTO services (category_id, name, slug, description, icon, requires_kyc, is_active) VALUES
  (cat_marketing, 'SEO Services', 'seo-services', 'Search engine optimization', 'Search', false, true),
  (cat_marketing, 'Google Ads', 'google-ads', 'PPC and Google advertising', 'Target', false, true),
  (cat_marketing, 'Social Media Marketing', 'social-media-marketing', 'Facebook, Instagram, Twitter marketing', 'Share2', false, true),
  (cat_marketing, 'WhatsApp Marketing', 'whatsapp-marketing', 'Bulk WhatsApp campaigns', 'MessageSquare', false, true),
  (cat_marketing, 'Content Writing', 'content-writing', 'SEO content and copywriting', 'FileEdit', false, true),
  (cat_marketing, 'Graphic Design', 'graphic-design', 'Logo, poster, and branding design', 'Palette', false, true),
  (cat_marketing, 'Influencer Marketing', 'influencer-marketing', 'Connect with influencers', 'Users', false, true)
  ON CONFLICT (slug) DO NOTHING;

  -- Government Services
  INSERT INTO services (category_id, name, slug, description, icon, requires_kyc, is_active) VALUES
  (cat_government, 'Aadhaar Services', 'aadhaar-services', 'Aadhaar enrollment and update', 'Fingerprint', true, true),
  (cat_government, 'Voter ID Card', 'voter-id', 'Electoral services and voter ID', 'Vote', true, true),
  (cat_government, 'Ration Card', 'ration-card', 'New ration card application', 'Package', true, true),
  (cat_government, 'Driving License', 'driving-license', 'DL application and renewal', 'CarFront', true, true),
  (cat_government, 'Vehicle RC', 'vehicle-rc', 'RC transfer and renewal', 'FileText', true, true),
  (cat_government, 'Birth Certificate', 'birth-certificate', 'Birth certificate application', 'Baby', true, true),
  (cat_government, 'Death Certificate', 'death-certificate', 'Death certificate application', 'FileText', true, true),
  (cat_government, 'Income Certificate', 'income-certificate', 'Income certificate application', 'Receipt', true, true),
  (cat_government, 'Caste Certificate', 'caste-certificate', 'Caste certificate application', 'FileCheck', true, true),
  (cat_government, 'Labour Card', 'labour-card', 'E-Shram and labour card registration', 'Hammer', true, true),
  (cat_government, 'Pension Services', 'pension-services', 'Old age, widow, disability pension', 'Users', true, true),
  (cat_government, 'Land Records', 'land-records', 'Property and land records', 'Map', false, true),
  (cat_government, 'Swiggy Delivery Partner', 'swiggy-partner', 'Register as Swiggy delivery partner', 'Bike', true, true),
  (cat_government, 'Zomato Delivery Partner', 'zomato-partner', 'Register as Zomato delivery partner', 'Bike', true, true),
  (cat_government, 'Ola Driver', 'ola-driver', 'Ola cab driver registration', 'Car', true, true),
  (cat_government, 'Uber Driver', 'uber-driver', 'Uber driver registration', 'Car', true, true),
  (cat_government, 'Porter Partner', 'porter-partner', 'Porter delivery partner registration', 'Truck', true, true),
  (cat_government, 'BlinkIt Rider', 'blinkit-rider', 'BlinkIt delivery partner', 'Bike', true, true)
  ON CONFLICT (slug) DO NOTHING;

END $$;
