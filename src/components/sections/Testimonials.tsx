import { Star, Quote } from 'lucide-react';
import Card, { CardBody } from '../ui/Card';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'E-Commerce Founder',
      location: 'Hyderabad, Telangana',
      image: '👨‍💼',
      rating: 5,
      text: 'E-Tailed built our Shopify store and ran Google + Meta ads that tripled our monthly revenue in 4 months. Their SaaS inventory tool saved us hours every week.',
    },
    {
      name: 'Priya Sharma',
      role: 'Marketing Director',
      location: 'Bangalore, Karnataka',
      image: '👩‍💼',
      rating: 5,
      text: 'We outsourced our entire social media and lead generation to them. Lead volume went up 280% and our CRM automation handles follow-ups automatically.',
    },
    {
      name: 'Mohammed Ismail',
      role: 'SaaS Startup CEO',
      location: 'Vijayawada, Andhra Pradesh',
      image: '👨',
      rating: 5,
      text: 'They developed and deployed our custom CRM SaaS in 6 weeks. Clean UI, solid backend, and ongoing support. Best technology partner we have worked with.',
    },
    {
      name: 'Sunita Devi',
      role: 'Local Business Owner',
      location: 'Pune, Maharashtra',
      image: '👩',
      rating: 5,
      text: 'As a small business, I needed affordable digital marketing. Their team set up WhatsApp automation and local SEO — now I get 15-20 leads daily.',
    },
    {
      name: 'Amit Patel',
      role: 'Digital Agency Owner',
      location: 'Ahmedabad, Gujarat',
      image: '👨‍💻',
      rating: 5,
      text: 'We white-label their SaaS and marketing services for our clients. Reliable delivery, great margins, and their backend team handles all fulfillment.',
    },
    {
      name: 'Kavitha Reddy',
      role: 'EdTech Founder',
      location: 'Warangal, Telangana',
      image: '👩‍💼',
      rating: 5,
      text: 'Their LMS SaaS platform and content marketing strategy helped us onboard 2,000+ students in the first quarter. Professional team from start to finish.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from businesses that grew with our digital marketing and SaaS solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} hover>
              <CardBody className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{testimonial.image}</div>
                  <Quote className="w-8 h-8 text-brand/15" />
                </div>

                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-brand font-semibold">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="bg-accent rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h3>
          <p className="text-xl text-accent-foreground/90 mb-6 max-w-2xl mx-auto">
            Let us help you with digital marketing campaigns, custom SaaS products, and automation
            that drives measurable growth.
          </p>
          <button
            onClick={() => (window.location.hash = '#contact-page')}
            className="px-8 py-4 bg-white text-accent font-bold text-lg rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Book a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
