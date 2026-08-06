import { useNavigate } from 'react-router-dom';
import SEO from '../seo/SEO';
import { Share2, Instagram, ThumbsUp, TrendingUp, CheckCircle2 } from 'lucide-react';
import Card, { CardBody } from '../ui/Card';
import Button from '../ui/Button';
import ServiceContactForm from '../ui/ServiceContactForm';

export default function SocialMediaServicesPage() {
  const navigate = useNavigate();

  const services = [
    'Social media account setup',
    'Monthly management',
    'Instagram posts (30/50/90)',
    'Facebook page boosting',
    'Influencer outreach',
    'Reel editing',
    'Thumbnail designing',
    'Hashtag strategy',
  ];

  const benefits = [
    'Consistent branding',
    'High-engagement posts',
    'Professional creatives',
    'Marketing growth',
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-vertical-social text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Share2 className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Social Media Services</h1>
          <p className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Grow your online presence with professional social media management
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Grow Your Online Presence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional social media services to boost your brand
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <Card key={index} hover>
                <CardBody className="p-6">
                  <div className="w-12 h-12 bg-vertical-social-muted rounded-full flex items-center justify-center mb-4">
                    <Share2 className="w-6 h-6 text-vertical-social" />
                  </div>
                  <h3 className="font-bold text-gray-900">{service}</h3>
                </CardBody>
              </Card>
            ))}
          </div>

          <div className="bg-vertical-social-muted rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Benefits</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardBody className="p-6 text-center">
                    <CheckCircle2 className="w-10 h-10 mx-auto mb-3 text-vertical-social" />
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Grow Your Social Presence</h2>
              <p className="text-lg text-gray-600 mb-6">
                Fill out the form and our social media experts will create a custom plan for you.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-vertical-social flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Consistent Branding</h4>
                    <p className="text-gray-600">Professional posts that match your brand</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-vertical-social flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Daily Posting</h4>
                    <p className="text-gray-600">Regular content to keep you visible</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-vertical-social flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Monthly Reports</h4>
                    <p className="text-gray-600">Track your growth and engagement</p>
                  </div>
                </div>
              </div>
            </div>
            <ServiceContactForm
              serviceName="Social Media Services"
              serviceOptions={services}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-vertical-social">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Boost Your Social Media Today</h3>
          <p className="text-xl text-white/80 mb-8">
            Let us handle your social media while you focus on your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10"
              onClick={() => navigate('/contact')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
