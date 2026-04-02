import { Star, Quote } from 'lucide-react';
import Card, { CardBody } from '../ui/Card';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Retailer',
      location: 'Hyderabad, Telangana',
      image: '👨‍💼',
      rating: 5,
      text: 'Started with ₹10,000 investment, now earning ₹35,000 monthly! The AEPS and DMT services are most profitable. Support team is excellent. Best decision of my life!',
    },
    {
      name: 'Priya Sharma',
      role: 'Distributor',
      location: 'Bangalore, Karnataka',
      image: '👩‍💼',
      rating: 5,
      text: 'Managing 45 retailers under me. Earning over ₹1,50,000 per month from commissions alone. The platform is very user-friendly and transactions are instant.',
    },
    {
      name: 'Mohammed Ismail',
      role: 'Super Distributor',
      location: 'Vijayawada, Andhra Pradesh',
      image: '👨',
      rating: 5,
      text: 'Crossed ₹3 lakh monthly income within 8 months. Have 150+ retailers in my network. The white-label option helped me build my own brand. Highly recommend!',
    },
    {
      name: 'Sunita Devi',
      role: 'Retailer',
      location: 'Rural Maharashtra',
      image: '👩',
      rating: 5,
      text: 'Running shop from home in a small village. Providing banking services to villagers. Earning ₹20,000+ monthly. Training was simple even with basic smartphone knowledge.',
    },
    {
      name: 'Amit Patel',
      role: 'White Label Partner',
      location: 'Ahmedabad, Gujarat',
      image: '👨‍💻',
      rating: 5,
      text: 'Built my own branded portal with 200+ retailers. The white-label package gave me complete control. Technical support is outstanding. Monthly turnover: ₹50+ lakhs.',
    },
    {
      name: 'Kavitha Reddy',
      role: 'Distributor',
      location: 'Warangal, Telangana',
      image: '👩‍💼',
      rating: 5,
      text: 'All services in one platform is the best feature. My retailers love the variety. Commission is always on time. Dashboard is easy to use. Very happy with Etailed Digital India!',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Success Stories from Our Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful entrepreneurs who transformed their lives with Etailed Digital India
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
          <h3 className="text-3xl font-bold mb-4">Want to Share Your Success Story?</h3>
          <p className="text-xl text-accent-foreground/90 mb-6 max-w-2xl mx-auto">
            Start your journey today and become our next success story. Join 11,000+ partners earning
            daily income!
          </p>
          <button
            onClick={() => (window.location.hash = '#signup')}
            className="px-8 py-4 bg-white text-accent font-bold text-lg rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Start Your Success Journey
          </button>
        </div>
      </div>
    </section>
  );
}
