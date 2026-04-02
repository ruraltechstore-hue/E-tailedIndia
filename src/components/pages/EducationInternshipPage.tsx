import { GraduationCap, Award, Briefcase, CheckCircle2 } from 'lucide-react';
import Card, { CardBody } from '../ui/Card';
import Button from '../ui/Button';
import ServiceContactForm from '../ui/ServiceContactForm';

export default function EducationInternshipPage() {
  const programs = [
    'Digital marketing internship',
    'E-commerce internship',
    'Python internship',
    'Website development internship',
    'AI Tools internship',
    'Job assistance programs',
    'Foundation courses',
    'Premium certification courses',
  ];

  const benefits = [
    'Live + recorded classes',
    'Industry projects',
    'Certificates',
    'Internship letter',
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-vertical-education text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GraduationCap className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Education & Internship Programs</h1>
          <p className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Build skills + Earn with industry-recognized certificates
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Build Skills + Earn With Certificates</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              E-Tailed Digital India offers comprehensive internship and education programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {programs.map((program, index) => (
              <Card key={index} hover>
                <CardBody className="p-6">
                  <div className="w-12 h-12 bg-vertical-education-muted rounded-full flex items-center justify-center mb-4">
                    <GraduationCap className="w-6 h-6 text-vertical-education" />
                  </div>
                  <h3 className="font-bold text-gray-900">{program}</h3>
                </CardBody>
              </Card>
            ))}
          </div>

          <div className="bg-vertical-education-muted rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">All Programs Include</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardBody className="p-6 text-center">
                    <CheckCircle2 className="w-10 h-10 mx-auto mb-3 text-vertical-education" />
                    <p className="font-semibold text-gray-900">{benefit}</p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Enroll in Our Programs</h2>
              <p className="text-lg text-gray-600 mb-6">
                Start your learning journey with industry-recognized certificates and practical experience.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-vertical-education flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Live & Recorded Classes</h4>
                    <p className="text-gray-600">Learn at your own pace with lifetime access</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-vertical-education flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Industry Projects</h4>
                    <p className="text-gray-600">Work on real-world projects</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-vertical-education flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Certificate & Job Support</h4>
                    <p className="text-gray-600">Get certified and job assistance</p>
                  </div>
                </div>
              </div>
            </div>
            <ServiceContactForm
              serviceName="Education & Internship Programs"
              serviceOptions={programs}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-vertical-education">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Start Your Learning Journey Today</h3>
          <p className="text-xl text-white/80 mb-8">
            Gain industry-recognized certificates and real-world experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-vertical-education hover:bg-gray-100"
              onClick={() => window.location.hash = '#signup'}
            >
              Enroll Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10"
              onClick={() => window.location.hash = '#contact-page'}
            >
              View Programs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
