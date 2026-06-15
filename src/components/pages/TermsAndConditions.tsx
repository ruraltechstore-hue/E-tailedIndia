import { FileText, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import Card, { CardBody } from '../ui/Card';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="bg-brand text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-xl text-brand-foreground/85">
            Please read these terms carefully before using our Services
          </p>
          <p className="text-sm text-brand-foreground/70 mt-4">Last Updated: January 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing and using the Etailed Digital India platform and services provided by Etailed
              Digital Services Pvt. Ltd., you accept and agree to be bound by these Terms and Conditions.
              If you do not agree to these terms, you must not use our Services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These terms constitute a legal agreement between you ("User", "Partner", "Retailer") and
              Etailed Digital Services Pvt. Ltd. ("Company", "we", "us", "our").
            </p>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Definitions</h2>
            <ul className="space-y-3 text-gray-700">
              <li><strong>"Platform"</strong> means the Etailed Digital India website, mobile application, and related services</li>
              <li><strong>"Services"</strong> means all financial, digital, and e-commerce services offered through the Platform</li>
              <li><strong>"Partner"</strong> means any individual or entity registered as Retailer, Distributor, Super Distributor, or White Label Partner</li>
              <li><strong>"Transaction"</strong> means any service operation performed through the Platform</li>
              <li><strong>"Commission"</strong> means the fee payable to Partners for successful transactions</li>
              <li><strong>"Wallet"</strong> means the digital account for storing and managing funds</li>
            </ul>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Eligibility</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>To use our Services, you must:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Be at least 18 years of age</li>
                <li>Be a resident of India</li>
                <li>Have a valid Aadhaar card and PAN card</li>
                <li>Have a valid bank account in India</li>
                <li>Not be listed in any financial fraud database</li>
                <li>Not have been previously suspended or banned from our Platform</li>
                <li>Provide accurate and truthful information during registration</li>
              </ul>
              <p className="mt-4">
                We reserve the right to verify your eligibility and reject applications that do not meet
                our criteria.
              </p>
            </div>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Registration and Account</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="font-bold text-lg">4.1 Registration Process</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pay the applicable one-time registration fee</li>
                <li>Complete KYC verification with Aadhaar and PAN</li>
                <li>Provide bank account details for payouts</li>
                <li>Accept these Terms and Conditions</li>
              </ul>

              <h3 className="font-bold text-lg mt-6">4.2 Account Security</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>You are responsible for maintaining the confidentiality of your login credentials</li>
                <li>You must not share your account with others</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>We are not liable for losses due to unauthorized use of your account</li>
              </ul>

              <h3 className="font-bold text-lg mt-6">4.3 Account Verification</h3>
              <p>
                We may request additional documentation at any time to verify your identity and compliance.
                Failure to provide requested documents may result in account suspension.
              </p>
            </div>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Services and Usage</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="font-bold text-lg">5.1 Service Availability</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Services are provided on an "as is" and "as available" basis</li>
                <li>We do not guarantee uninterrupted or error-free service</li>
                <li>Maintenance and updates may cause temporary service disruptions</li>
                <li>Some services may have transaction limits set by regulatory authorities</li>
              </ul>

              <h3 className="font-bold text-lg mt-6">5.2 Permitted Use</h3>
              <p>You agree to use the Platform only for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Legitimate business purposes</li>
                <li>Providing services to genuine customers</li>
                <li>Compliance with all applicable laws and regulations</li>
              </ul>

              <h3 className="font-bold text-lg mt-6">5.3 Prohibited Activities</h3>
              <div className="bg-danger-muted border border-danger-border rounded-lg p-4 mt-4">
                <div className="flex items-start">
                  <XCircle className="w-5 h-5 text-danger-foreground mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-danger-foreground mb-2">You must NOT:</p>
                    <ul className="list-disc pl-6 space-y-1 text-danger-foreground/90">
                      <li>Engage in fraudulent transactions or money laundering</li>
                      <li>Use fake or forged documents for KYC</li>
                      <li>Create multiple accounts for the same person</li>
                      <li>Manipulate commission structures or transaction records</li>
                      <li>Reverse engineer or attempt to access source code</li>
                      <li>Use automated tools or bots for transactions</li>
                      <li>Violate any laws, rules, or regulations</li>
                      <li>Harass, threaten, or impersonate others</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Fees and Commissions</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="font-bold text-lg">6.1 Registration Fees</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>One-time, non-refundable registration fee as per selected package</li>
                <li>No monthly or renewal fees</li>
                <li>Upgrade fees may apply when moving to higher tiers</li>
              </ul>

              <h3 className="font-bold text-lg mt-6">6.2 Service Charges</h3>
              <p>
                Each service has its own pricing structure. Service charges are deducted from wallet
                balance before transaction processing. Commission is calculated after deducting all
                applicable charges.
              </p>

              <h3 className="font-bold text-lg mt-6">6.3 Commission Payment</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Commissions are credited to your wallet in real-time upon successful transactions</li>
                <li>Commission rates may vary by service, volume, and partner tier</li>
                <li>We reserve the right to modify commission rates with 30 days notice</li>
                <li>Wrong or fraudulent transactions do not earn commission</li>
              </ul>

              <h3 className="font-bold text-lg mt-6">6.4 Wallet and Payouts</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Minimum withdrawal amount: ₹100</li>
                <li>Payout processing time: 24-48 hours</li>
                <li>Bank charges, if any, are borne by the partner</li>
                <li>We reserve the right to withhold payouts for suspicious accounts</li>
              </ul>
            </div>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Transaction Limits</h2>
            <div className="space-y-4 text-gray-700">
              <p>Transaction limits are set as per regulatory guidelines:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>AEPS:</strong> ₹10,000 per transaction, no daily limit</li>
                <li><strong>DMT:</strong> ₹25,000 per transaction, ₹2,00,000 per month per sender</li>
                <li><strong>Recharge/Bills:</strong> As per operator limits</li>
                <li><strong>Wallet Top-up:</strong> ₹50,000 per transaction</li>
              </ul>
              <p className="mt-4">
                Limits may be increased based on transaction history and enhanced KYC completion.
              </p>
            </div>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                All content, features, and functionality of the Platform, including but not limited to
                text, graphics, logos, icons, images, software, and source code, are owned by Etailed
                Digital Services Pvt. Ltd. and protected by intellectual property laws.
              </p>
              <p>You are granted a limited, non-exclusive, non-transferable license to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access and use the Platform for business purposes</li>
                <li>Use provided marketing materials (for White Label partners)</li>
              </ul>
              <p className="mt-4"><strong>You may NOT:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Copy, modify, or create derivative works</li>
                <li>Reverse engineer the Platform</li>
                <li>Use our brand, logos, or trademarks without written permission</li>
              </ul>
            </div>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Liability and Disclaimers</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="font-bold text-lg">9.1 Platform Availability</h3>
              <p>
                We strive for maximum uptime but do not guarantee uninterrupted service. We are not liable
                for losses due to service disruptions, maintenance, or technical issues.
              </p>

              <h3 className="font-bold text-lg mt-6">9.2 Third-Party Services</h3>
              <p>
                Our Platform integrates with third-party service providers (banks, NPCI, BBPS, etc.). We
                are not responsible for their service failures, delays, or errors.
              </p>

              <h3 className="font-bold text-lg mt-6">9.3 Limitation of Liability</h3>
              <p>
                Our liability is limited to the registration fee paid by you. We are not liable for
                indirect, incidental, special, consequential, or punitive damages, including lost profits.
              </p>

              <h3 className="font-bold text-lg mt-6">9.4 Indemnification</h3>
              <p>
                You agree to indemnify and hold us harmless from any claims, damages, or expenses arising
                from your violation of these Terms or misuse of the Platform.
              </p>
            </div>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Account Termination</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="font-bold text-lg">10.1 Termination by User</h3>
              <p>
                You may request account closure by contacting support. Pending transactions must be
                completed, and wallet balance (above minimum) will be paid out.
              </p>

              <h3 className="font-bold text-lg mt-6">10.2 Termination by Company</h3>
              <p>We may suspend or terminate your account if:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You violate these Terms</li>
                <li>Fraudulent activity is detected</li>
                <li>You provide false information</li>
                <li>Account is inactive for 12 consecutive months</li>
                <li>Required by law or regulatory authority</li>
              </ul>

              <h3 className="font-bold text-lg mt-6">10.3 Effect of Termination</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access to Platform will be revoked</li>
                <li>Pending commissions will be paid (if not fraudulent)</li>
                <li>No refund of registration fees</li>
                <li>You must return any Company property</li>
              </ul>
            </div>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Dispute Resolution</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                In case of disputes:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Contact our support team: support@e-tailedindia.com or +91 93928 98733 or +91 9390168733</li>
                <li>We will attempt to resolve within 15 working days</li>
                <li>If unresolved, disputes will be subject to arbitration in Hyderabad, Telangana</li>
                <li>Courts in Hyderabad have exclusive jurisdiction</li>
              </ol>
            </div>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
            <p className="text-gray-700">
              These Terms are governed by the laws of India. Any disputes shall be subject to the
              exclusive jurisdiction of courts in Hyderabad, Telangana.
            </p>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Modifications</h2>
            <p className="text-gray-700">
              We reserve the right to modify these Terms at any time. Material changes will be notified
              via email or platform notification. Continued use after modifications constitutes acceptance
              of the revised Terms.
            </p>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="p-8 bg-brand-muted">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 mr-2 text-accent" />
              Contact Information
            </h2>
            <p className="text-gray-700 mb-4">
              For questions or concerns regarding these Terms:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Company:</strong> Etailed Digital Services Pvt. Ltd.</p>
              <p><strong>Address:</strong> Sai Silicon Heights, 3-118, Megha Hills Rd, Ayyappa Society, Mega Hills, Madhapur, Hyderabad, Telangana 500081, India</p>
              <p><strong>Email:</strong> support@e-tailedindia.com</p>
              <p><strong>Phone:</strong> +91 93928 98733 or +91 9390168733</p>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
