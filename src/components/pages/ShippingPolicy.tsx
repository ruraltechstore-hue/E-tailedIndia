import SEO from '../seo/SEO';
import { Truck, Clock, Package, CheckCircle2 } from 'lucide-react';
import Card, { CardBody } from '../ui/Card';

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="bg-brand text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Truck className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Shipping & Delivery Policy</h1>
          <p className="text-xl text-brand-foreground/85">
            Digital Services Delivery Information
          </p>
          <p className="text-sm text-brand-foreground/70 mt-4">Last Updated: 12 December 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="mb-8">
          <CardBody className="p-8">
            <div className="flex items-start space-x-4 bg-brand-muted border border-brand-subtle rounded-lg p-4">
              <Package className="w-6 h-6 text-brand flex-shrink-0 mt-1" />
              <p className="text-gray-700 leading-relaxed">
                We provide only <strong>digital & online services</strong>, so "delivery" refers to granting access
                or completion of digital tasks. No physical shipping is involved.
              </p>
            </div>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Clock className="w-6 h-6 mr-2 text-brand" />
              A. Course Access Delivery Timeline
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  <strong>Instant access</strong> or within <strong>24–72 hours</strong> after payment
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  <strong>Internship offer letters</strong> are sent within <strong>7 days</strong>
                </span>
              </li>
            </ul>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">B. Digital Product Delivery</h2>
            <p className="text-gray-700 mb-4">Includes:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Gift cards</li>
              <li>Login credentials</li>
              <li>Software access</li>
              <li>E-commerce store setup</li>
              <li>API access (if applicable)</li>
            </ul>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Delivery Timelines:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="font-semibold text-gray-900 mb-2">Gift Cards</p>
                  <p className="text-sm text-gray-600">0–24 hours (depending on brand availability)</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="font-semibold text-gray-900 mb-2">Store Setup</p>
                  <p className="text-sm text-gray-600">1–7 working days</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="font-semibold text-gray-900 mb-2">Login Credentials</p>
                  <p className="text-sm text-gray-600">1–24 hours</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="font-semibold text-gray-900 mb-2">Software Access</p>
                  <p className="text-sm text-gray-600">Instant or max 24 hours</p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">C. Physical Shipping</h2>
            <div className="bg-warning-muted border border-warning-border rounded-lg p-4">
              <p className="text-gray-700">
                Currently <strong>no physical shipments</strong> are done by the company. All services and products
                are delivered digitally.
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
