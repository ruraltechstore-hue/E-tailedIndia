import { Target, Eye, Award, BookOpen, ShoppingCart, TrendingUp, Users, Briefcase } from 'lucide-react';
import Card, { CardBody } from '../ui/Card';
import Button from '../ui/Button';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-brand text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">About E-Tailed Digital India</h1>
          <p className="text-xl lg:text-2xl text-brand-foreground/85 max-w-4xl mx-auto leading-relaxed">
            Empowering students, entrepreneurs, and businesses with digital skills and technology solutions
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="mb-12">
            <CardBody className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>E-Tailed Digital India</strong> is a leading EdTech, E-Commerce, and Digital Services
                  organization dedicated to empowering students, entrepreneurs, job seekers, and businesses with
                  skills that generate real results.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We specialize in:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-6">
                  <li>Digital Marketing Training</li>
                  <li>E-Commerce Store Setup & Management</li>
                  <li>Internship & Certification Programs</li>
                  <li>WhatsApp & Automation Services</li>
                  <li>Software Tools & SaaS Solutions</li>
                  <li>Franchise & Affiliate Programs</li>
                  <li>Business Mentorship & Startup Support</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our goal is simple: <strong>To build 10,000+ digital entrepreneurs and help individuals achieve
                  financial freedom through skills, technology, and automation.</strong>
                </p>
              </div>
            </CardBody>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card hover>
              <CardBody className="p-8 text-center">
                <div className="w-16 h-16 bg-brand-subtle rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-brand" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide high-quality digital training, real-time business support, and affordable entrepreneurship
                  solutions to students and professionals across India and globally.
                </p>
              </CardBody>
            </Card>

            <Card hover>
              <CardBody className="p-8 text-center">
                <div className="w-16 h-16 bg-accent-subtle rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become India's No. 1 Digital Education & Business Automation Platform with a mission to generate
                  ₹10 Crore+ monthly revenue while uplifting millions through skill-based education.
                </p>
              </CardBody>
            </Card>

            <Card hover>
              <CardBody className="p-8 text-center">
                <div className="w-16 h-16 bg-warning-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-warning-foreground" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Values</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>Transparency</li>
                  <li>Quality</li>
                  <li>Innovation</li>
                  <li>Affordability</li>
                  <li>Real-world outcomes</li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for digital success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card hover>
              <CardBody className="p-6">
                <div className="w-12 h-12 bg-brand-subtle rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-brand" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Digital Marketing Training</h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive courses in SEO, social media marketing, content marketing, and more
                </p>
              </CardBody>
            </Card>

            <Card hover>
              <CardBody className="p-6">
                <div className="w-12 h-12 bg-accent-subtle rounded-lg flex items-center justify-center mb-4">
                  <ShoppingCart className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">E-Commerce Solutions</h3>
                <p className="text-gray-600 text-sm">
                  Complete store setup, marketplace integration, and automation services
                </p>
              </CardBody>
            </Card>

            <Card hover>
              <CardBody className="p-6">
                <div className="w-12 h-12 bg-warning-muted rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-warning-foreground" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Internships & Certifications</h3>
                <p className="text-gray-600 text-sm">
                  Industry-recognized certificates and hands-on internship programs
                </p>
              </CardBody>
            </Card>

            <Card hover>
              <CardBody className="p-6">
                <div className="w-12 h-12 bg-palette-purple-muted rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-palette-purple" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Business Automation</h3>
                <p className="text-gray-600 text-sm">
                  WhatsApp marketing, CRM tools, and workflow automation solutions
                </p>
              </CardBody>
            </Card>

            <Card hover>
              <CardBody className="p-6">
                <div className="w-12 h-12 bg-palette-pink-muted rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-palette-pink" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Franchise & Affiliate</h3>
                <p className="text-gray-600 text-sm">
                  Earn commissions by promoting our programs and services
                </p>
              </CardBody>
            </Card>

            <Card hover>
              <CardBody className="p-6">
                <div className="w-12 h-12 bg-danger-muted rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-danger-foreground" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Mentorship & Support</h3>
                <p className="text-gray-600 text-sm">
                  One-on-one guidance and 24/7 support for your business growth
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Digital Journey?</h3>
            <p className="text-xl text-brand-foreground/85 mb-8 max-w-2xl mx-auto">
              Join thousands of students and entrepreneurs who have transformed their careers with E-Tailed Digital India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-brand hover:bg-gray-100"
                onClick={() => window.location.hash = '#signup'}
              >
                Get Started Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10"
                onClick={() => window.location.hash = '#contact-page'}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
