import SEO from '../seo/SEO';
import { RotateCcw, AlertCircle, XCircle, Mail, Phone } from 'lucide-react';
import Card, { CardBody } from '../ui/Card';

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="bg-brand text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RotateCcw className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Refund & Cancellation Policy</h1>
          <p className="text-xl text-brand-foreground/85">
            Complete transparency regarding refunds and cancellations
          </p>
          <p className="text-sm text-brand-foreground/70 mt-4">Last Updated: 12 December 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="mb-8">
          <CardBody className="p-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              At <strong>E-Tailed Digital India / Skillecom / International Institute of E-Commerce & Management Foundation</strong>,
              we aim to provide complete transparency regarding refunds and cancellations. By enrolling in our programs or using our
              services, you agree to the following terms:
            </p>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">A. Course Fees – No Refund Policy</h2>
            <div className="bg-danger-muted border border-danger-border rounded-lg p-4 mb-4">
              <div className="flex items-start">
                <XCircle className="w-5 h-5 text-danger-foreground mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-danger-foreground mb-2">Strictly Non-Refundable</p>
                  <p className="text-danger-foreground/90">
                    All course, mentorship, internship, training, or subscription fees once paid are <strong>strictly non-refundable</strong> under any circumstances.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-700 mb-3"><strong>This includes:</strong></p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Change of mind</li>
              <li>Personal issues or emergencies</li>
              <li>Non-attendance</li>
              <li>Delay from student's side</li>
              <li>Technical issues from the user's end</li>
            </ul>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">B. Course Access</h2>
            <p className="text-gray-700 mb-3">Once payment is completed:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Course access is immediately granted or scheduled within 24–72 hours</li>
              <li>Students must ensure correct email and mobile details while enrollment</li>
            </ul>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">C. Internship & Certification Programs</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Internship fees are <strong>non-refundable</strong>, as students receive offer letters, joining letters, and training access within 7 days</li>
              <li>Certificates are issued only upon proper completion of assigned tasks</li>
            </ul>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">D. Service Refunds</h2>
            <p className="text-gray-700 mb-3">
              For any service purchased (store setup, website creation, e-commerce services, marketplace support):
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>No refund is provided once work has started</li>
              <li>If the customer fails to provide required documents/content, the delay is not the responsibility of the company</li>
            </ul>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">E. Cancellations</h2>
            <p className="text-gray-700">
              Cancellations are <strong>not allowed</strong> once payment is processed because all programs are digital and instantly accessible.
            </p>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">F. Duplicate Payments</h2>
            <p className="text-gray-700">
              In case of duplicate/extra payments, refund will be processed within <strong>7–14 working days</strong> after verification.
            </p>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="p-8 bg-brand-muted">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">G. Contact for Refund Queries</h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand" />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <a href="mailto:etaileddigitalservicespvtltd@gmail.com" className="text-brand hover:text-brand-hover font-semibold">
                    etaileddigitalservicespvtltd@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <a href="tel:+919392898733" className="text-accent hover:text-success-foreground font-semibold">
                    +91 93928 98733
                  </a>
                  {' / '}
                  <a href="tel:+919390168733" className="text-accent hover:text-success-foreground font-semibold">
                    +91 9390168733
                  </a>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
