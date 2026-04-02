import { AlertTriangle, ExternalLink, Shield, Info } from 'lucide-react';
import Card, { CardBody } from '../ui/Card';

export default function DisclaimerPolicy() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="bg-brand text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AlertTriangle className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Disclaimer Policy</h1>
          <p className="text-xl text-brand-foreground/85">
            Important information about our services and limitations
          </p>
          <p className="text-sm text-brand-foreground/70 mt-4">Last Updated: 12 December 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Info className="w-6 h-6 mr-2 text-brand" />
              A. General Disclaimer
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All information, tools, training content, and resources provided by{' '}
              <strong>E-Tailed Digital India / Skillecom / IIECMF</strong> are for educational and business purposes only.
            </p>
            <div className="bg-warning-muted border border-warning-border rounded-lg p-4">
              <p className="font-bold text-warning-foreground mb-3">We do not guarantee:</p>
              <ul className="list-disc pl-6 space-y-2 text-warning-foreground/90">
                <li>Job placement unless specifically enrolled in a <em>Job Guarantee Program</em></li>
                <li>Income or earnings</li>
                <li>Business success</li>
                <li>Marketplace approvals</li>
                <li>Government approvals</li>
              </ul>
            </div>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">B. Accuracy of Information</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We try to ensure that all information on the website is accurate. However, errors may occur.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to update or correct any information without prior notice.
            </p>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <ExternalLink className="w-6 h-6 mr-2 text-brand" />
              C. External Links
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites. We are <strong>not responsible</strong> for
              the privacy practices or content of those websites.
            </p>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-2 text-brand" />
              D. Use of Digital Services
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Users must use the services lawfully. The company is not responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>User mistakes</li>
              <li>Wrong business decisions</li>
              <li>Financial losses</li>
              <li>Marketplace account suspensions</li>
            </ul>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="p-8 bg-warning-muted">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-6 h-6 text-warning-foreground flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Important Notice</h3>
                <p className="text-gray-700 leading-relaxed">
                  By using our platform, you acknowledge that you have read, understood, and agree to this disclaimer.
                  All services are provided on an "as is" basis, and users assume full responsibility for their use
                  of the platform and any outcomes resulting from their decisions.
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
