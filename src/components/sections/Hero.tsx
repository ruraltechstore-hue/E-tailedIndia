import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, TrendingUp, Users } from 'lucide-react';
import Button from '../ui/Button';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section id="home" className="pt-32 pb-20 bg-brand-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-brand-subtle text-brand-on-muted px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Digital Marketing & SaaS Experts</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Accelerate Your Growth with{' '}
              <span className="text-brand">
                Digital Marketing & SaaS Solutions
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              We help businesses grow online with data-driven marketing campaigns, custom SaaS products,
              automation tools, and end-to-end digital solutions — from strategy to launch and scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" onClick={() => navigate('#contact')}>
                Get a Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/services')}>
                Explore Our Services
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-brand-subtle rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">500+</p>
                  <p className="text-sm text-gray-600">Clients Served</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-accent-subtle rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">50+</p>
                  <p className="text-sm text-gray-600">SaaS Products</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-brand p-8 text-white">
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                    <h3 className="font-bold text-lg mb-2">Why E-Tailed Digital India?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-accent/80 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-sm">Full-Stack Digital Marketing Services</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-accent/80 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-sm">Custom SaaS Development & Deployment</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-accent/80 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-sm">CRM, Automation & Lead Systems</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-accent/80 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-sm">Measurable ROI & Analytics</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-accent/80 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-sm">Dedicated Account Management</span>
                      </li>
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
                      <p className="text-3xl font-bold">3x</p>
                      <p className="text-sm opacity-90">Avg. Lead Growth</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
                      <p className="text-3xl font-bold">24/7</p>
                      <p className="text-sm opacity-90">Support Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              Platforms & Tools We Work With
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand">Google</div>
              <p className="text-xs text-gray-500 mt-1">Ads & Analytics</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning-foreground">Meta</div>
              <p className="text-xs text-gray-500 mt-1">Social Ads</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning-foreground">Shopify</div>
              <p className="text-xs text-gray-500 mt-1">E-Commerce</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-on-muted">HubSpot</div>
              <p className="text-xs text-gray-500 mt-1">CRM</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">AWS</div>
              <p className="text-xs text-gray-500 mt-1">Cloud SaaS</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-danger-foreground">WhatsApp</div>
              <p className="text-xs text-gray-500 mt-1">Automation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

