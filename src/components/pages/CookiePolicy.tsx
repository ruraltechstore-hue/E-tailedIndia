import { Cookie, Settings, Eye, Shield } from 'lucide-react';
import Card, { CardBody } from '../ui/Card';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="bg-brand text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Cookie className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-xl text-brand-foreground/85">
            Understanding how we use cookies on our website
          </p>
          <p className="text-sm text-brand-foreground/70 mt-4">Last Updated: 12 December 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">A. What Are Cookies?</h2>
            <p className="text-gray-700 leading-relaxed">
              Cookies are small text files stored on your device to improve your browsing experience. They help
              us understand how you use our website and remember your preferences.
            </p>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Eye className="w-6 h-6 mr-2 text-brand" />
              B. How We Use Cookies
            </h2>
            <p className="text-gray-700 mb-4">We use cookies to:</p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-subtle rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-brand text-xs font-bold">1</span>
                </div>
                <span className="text-gray-700">Analyse website traffic</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-subtle rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-brand text-xs font-bold">2</span>
                </div>
                <span className="text-gray-700">Improve website performance</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-subtle rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-brand text-xs font-bold">3</span>
                </div>
                <span className="text-gray-700">Personalize user experience</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-subtle rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-brand text-xs font-bold">4</span>
                </div>
                <span className="text-gray-700">Track marketing performance</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-subtle rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-brand text-xs font-bold">5</span>
                </div>
                <span className="text-gray-700">Secure your login sessions</span>
              </li>
            </ul>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-2 text-brand" />
              C. Third-Party Cookies
            </h2>
            <p className="text-gray-700 mb-4">We use cookies from:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="font-semibold text-gray-900">Google Analytics</p>
                <p className="text-sm text-gray-600 mt-1">For traffic analysis and insights</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="font-semibold text-gray-900">Facebook Pixel</p>
                <p className="text-sm text-gray-600 mt-1">For marketing and ad targeting</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="font-semibold text-gray-900">WhatsApp API</p>
                <p className="text-sm text-gray-600 mt-1">For customer communication</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="font-semibold text-gray-900">Razorpay</p>
                <p className="text-sm text-gray-600 mt-1">For secure payment processing</p>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Settings className="w-6 h-6 mr-2 text-brand" />
              D. Managing Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can disable cookies in your browser settings, but some website features may not work properly.
            </p>
            <div className="bg-brand-muted border border-brand-subtle rounded-lg p-4">
              <p className="text-sm text-brand-active">
                <strong>Note:</strong> Most web browsers automatically accept cookies, but you can usually modify
                your browser setting to decline cookies if you prefer. However, this may prevent you from taking
                full advantage of the website.
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
