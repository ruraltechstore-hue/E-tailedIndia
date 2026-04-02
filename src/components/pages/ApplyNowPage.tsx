import { useState, useEffect } from 'react';
import { Upload, CheckCircle2, FileText, CreditCard, Send, Crown, Building2, Rocket, Package, Building, Code, Truck, MapPin } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { supabase } from '../../lib/supabase';
import { sendTemplateEmail } from '../../lib/emailjs';

export default function ApplyNowPage() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    business_name: '',
    business_type: '',
    partnership_type: 'Retailer',
    address: '',
    city: '',
    state: '',
    pincode: '',
    aadhar_number: '',
    pan_number: '',
    gst_number: '',
    payment_amount: '10000',
    payment_reference: '',
    payment_screenshot_url: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const partnershipTiers = [
    {
      type: 'Retailer',
      price: '10000',
      icon: Building2,
      benefits: ['Access to 150+ Services', 'White-Label Dashboard', 'Basic Training', 'Email Support'],
    },
    {
      type: 'Distributor',
      price: '15000',
      icon: Crown,
      benefits: ['Everything in Retailer', 'Priority Support', 'Advanced Training', 'Sub-Partner Management'],
    },
    {
      type: 'Super Distributor',
      price: '25000',
      icon: Rocket,
      benefits: ['Everything in Distributor', 'Dedicated Account Manager', 'Custom Branding', 'API Access', 'Territory Rights'],
    },
    {
      type: 'White Label',
      price: '80000',
      icon: Package,
      benefits: ['Complete White-Label Solution', 'Your Own Brand Identity', 'Custom Domain', 'Unlimited Sub-Partners', 'Maximum Commissions'],
    },
    {
      type: 'Pincode Franchise',
      price: '82000',
      icon: MapPin,
      benefits: ['Single Pincode Territory', 'Up to 5 Delivery Boys', 'Complete Training', 'Delivery Management System'],
    },
    {
      type: '5 Pincode Franchise',
      price: '118000',
      icon: MapPin,
      benefits: ['Five Pincode Territories', 'Up to 15 Delivery Boys', 'Multi-Location Management', 'Higher Commission Rates'],
    },
    {
      type: 'Enterprise Software',
      price: '200000',
      icon: Building,
      benefits: ['Complete Enterprise Solution', 'Multi-Location Support', 'Advanced Analytics', 'Custom Integrations', 'Priority Support 24/7'],
    },
    {
      type: 'Full Admin (No Source)',
      price: '450000',
      icon: Code,
      benefits: ['Complete Admin Software', 'Full Control Panel', 'All Features Unlocked', 'Lifetime License', 'Free Updates for 1 Year'],
    },
    {
      type: 'Full Admin (With Source)',
      price: '600000',
      icon: Code,
      benefits: ['Everything in No Source', 'Complete Source Code', 'Full Ownership Rights', 'Modify & Customize', 'Unlimited Deployments'],
    },
    {
      type: 'Logistics Delivery',
      price: '236000',
      icon: Truck,
      benefits: ['Complete Delivery System', 'Real-Time Tracking', 'Rider Management', 'Route Optimization', 'Customer & Rider Apps'],
    },
  ];

  useEffect(() => {
    const selectedTier = partnershipTiers.find(tier => tier.type === formData.partnership_type);
    if (selectedTier) {
      setFormData(prev => ({ ...prev, payment_amount: selectedTier.price }));
    }
  }, [formData.partnership_type]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (!formData.payment_screenshot_url) {
        setError('Please provide payment screenshot URL');
        setLoading(false);
        return;
      }

      const applicationMessage = [
        `Partnership type: ${formData.partnership_type}`,
        `Business name: ${formData.business_name}`,
        `Business type: ${formData.business_type}`,
        `Phone: ${formData.phone}`,
        `Address: ${formData.address}, ${formData.city}, ${formData.state} ${formData.pincode}`,
        `Aadhar: ${formData.aadhar_number}`,
        `PAN: ${formData.pan_number}`,
        `GST: ${formData.gst_number || 'N/A'}`,
        `Payment amount: ${formData.payment_amount}`,
        `Payment reference: ${formData.payment_reference}`,
        `Payment screenshot URL: ${formData.payment_screenshot_url}`,
      ].join('\n');

      await sendTemplateEmail({
        name: formData.full_name,
        email: formData.email,
        title: 'Partner application',
        message: applicationMessage,
      });

      const { error: insertError } = await supabase
        .from('client_applications')
        .insert([
          {
            full_name: formData.full_name,
            email: formData.email,
            phone: formData.phone,
            business_name: formData.business_name,
            business_type: formData.business_type,
            partnership_type: formData.partnership_type,
            address: formData.address,
            city: formData.city,
            state: formData.state,
            pincode: formData.pincode,
            aadhar_number: formData.aadhar_number,
            pan_number: formData.pan_number,
            gst_number: formData.gst_number,
            payment_amount: parseFloat(formData.payment_amount),
            payment_reference: formData.payment_reference,
            payment_screenshot_url: formData.payment_screenshot_url,
          },
        ]);

      if (insertError) throw insertError;

      setSuccess(true);
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        business_name: '',
        business_type: '',
        partnership_type: 'Retailer',
        address: '',
        city: '',
        state: '',
        pincode: '',
        aadhar_number: '',
        pan_number: '',
        gst_number: '',
        payment_amount: '10000',
        payment_reference: '',
        payment_screenshot_url: '',
      });

      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError('Failed to submit application. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const businessTypes = [
    'Individual/Freelancer',
    'Sole Proprietorship',
    'Partnership',
    'Private Limited',
    'LLP',
    'Other',
  ];

  const selectedTier = partnershipTiers.find(tier => tier.type === formData.partnership_type);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-brand text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Apply Now</h1>
          <p className="text-xl lg:text-2xl text-brand-foreground/85 max-w-4xl mx-auto leading-relaxed">
            Join E-Tailed Digital India as a partner and start your digital business journey
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-brand-muted rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Step 1</h3>
              <p className="text-gray-700">Fill Application Form</p>
            </div>
            <div className="bg-accent-muted rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Step 2</h3>
              <p className="text-gray-700">Make Payment</p>
            </div>
            <div className="bg-warning-muted rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-vertical-social rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Step 3</h3>
              <p className="text-gray-700">Get Approved</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Choose Your Partnership Plan</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {partnershipTiers.map((tier) => {
                const Icon = tier.icon;
                const isSelected = formData.partnership_type === tier.type;
                return (
                  <button
                    key={tier.type}
                    type="button"
                    onClick={() => setFormData({ ...formData, partnership_type: tier.type })}
                    className={`relative rounded-xl p-4 text-left transition-all ${
                      isSelected
                        ? 'bg-brand text-white shadow-xl scale-105'
                        : 'bg-white border-2 border-gray-200 hover:border-brand-subtle'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div className={`w-10 h-10 ${isSelected ? 'bg-white/20' : 'bg-brand-subtle'} rounded-lg flex items-center justify-center mb-3`}>
                      <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-brand'}`} />
                    </div>
                    <h3 className={`text-lg font-bold mb-2 ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                      {tier.type}
                    </h3>
                    <div className={`text-2xl font-bold mb-3 ${isSelected ? 'text-white' : 'text-brand'}`}>
                      ₹{parseInt(tier.price).toLocaleString('en-IN')}
                    </div>
                    <ul className="space-y-1">
                      {tier.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-xs">
                          <CheckCircle2 className={`w-3 h-3 mr-1 flex-shrink-0 mt-0.5 ${isSelected ? 'text-accent-subtle' : 'text-accent'}`} />
                          <span className={isSelected ? 'text-brand-foreground/85' : 'text-gray-600'}>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Partner Application Form</h2>

            {success && (
              <div className="mb-6 p-4 bg-accent-muted border border-success-border rounded-lg text-success-foreground">
                Application submitted successfully! We'll review and get back to you within 24-48 hours.
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-danger-muted border border-danger-border rounded-lg text-danger-foreground">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      required
                      value={formData.full_name}
                      onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Business Type *
                    </label>
                    <select
                      required
                      value={formData.business_type}
                      onChange={(e) => setFormData({ ...formData, business_type: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                    >
                      <option value="">Select business type</option>
                      {businessTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Business Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Business Name
                    </label>
                    <Input
                      type="text"
                      value={formData.business_name}
                      onChange={(e) => setFormData({ ...formData, business_name: e.target.value })}
                      placeholder="Enter business name"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <textarea
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      rows={2}
                      placeholder="Enter complete address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <Input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      State
                    </label>
                    <Input
                      type="text"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      placeholder="State"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Pincode
                    </label>
                    <Input
                      type="text"
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      placeholder="Pincode"
                    />
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Documents</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Aadhar Number
                    </label>
                    <Input
                      type="text"
                      value={formData.aadhar_number}
                      onChange={(e) => setFormData({ ...formData, aadhar_number: e.target.value })}
                      placeholder="XXXX XXXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      PAN Number
                    </label>
                    <Input
                      type="text"
                      value={formData.pan_number}
                      onChange={(e) => setFormData({ ...formData, pan_number: e.target.value })}
                      placeholder="AAAAA0000A"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      GST Number (if applicable)
                    </label>
                    <Input
                      type="text"
                      value={formData.gst_number}
                      onChange={(e) => setFormData({ ...formData, gst_number: e.target.value })}
                      placeholder="GST Number"
                    />
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Information</h3>
                <div className="bg-brand-muted rounded-xl p-6 mb-4">
                  <h4 className="font-bold text-lg text-gray-900 mb-3">
                    {selectedTier?.type} Partnership Fee: ₹{parseInt(formData.payment_amount).toLocaleString('en-IN')}
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Make payment using the link below and upload the payment screenshot
                  </p>
                  <a
                    href="https://pmny.in/MrBsZKrzHgsw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-brand text-white font-semibold rounded-lg hover:bg-brand-hover transition-colors"
                  >
                    <CreditCard className="w-5 h-5 mr-2" />
                    Make Payment
                  </a>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Payment Reference/Transaction ID
                    </label>
                    <Input
                      type="text"
                      value={formData.payment_reference}
                      onChange={(e) => setFormData({ ...formData, payment_reference: e.target.value })}
                      placeholder="Enter transaction ID"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Payment Screenshot URL *
                    </label>
                    <Input
                      type="url"
                      required
                      value={formData.payment_screenshot_url}
                      onChange={(e) => setFormData({ ...formData, payment_screenshot_url: e.target.value })}
                      placeholder="https://example.com/screenshot.jpg"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Upload screenshot to a cloud service and paste the link here
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-warning-muted border border-warning-border rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Upload className="w-5 h-5 mr-2 text-warning-foreground" />
                  Document Upload Instructions
                </h4>
                <ul className="text-sm text-gray-700 space-y-1 ml-7">
                  <li>Upload your documents (Aadhar, PAN, GST) to Google Drive or Dropbox</li>
                  <li>Make sure the files are accessible (set to view-only)</li>
                  <li>Upload your payment screenshot to any image hosting service</li>
                  <li>Paste the URLs in the respective fields</li>
                </ul>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full group"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit Application'}
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-brand-muted rounded-xl p-6">
              <CheckCircle2 className="w-10 h-10 text-brand mb-3" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">White-Label Services</h3>
              <p className="text-gray-600">Resell all services under your own brand name</p>
            </div>
            <div className="bg-accent-muted rounded-xl p-6">
              <CheckCircle2 className="w-10 h-10 text-accent mb-3" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">150+ Services</h3>
              <p className="text-gray-600">Access to all digital services and products</p>
            </div>
            <div className="bg-warning-muted rounded-xl p-6">
              <CheckCircle2 className="w-10 h-10 text-warning-foreground mb-3" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Dedicated support team to help you succeed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
