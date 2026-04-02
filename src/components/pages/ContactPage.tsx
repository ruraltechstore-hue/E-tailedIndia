import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import WhatsAppLogo from '../icons/WhatsAppLogo';
import Card, { CardBody } from '../ui/Card';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { sendTemplateEmail } from '../../lib/emailjs';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError('');

    const messageBody = [
      `Phone: ${formData.phone}`,
      `Subject: ${formData.subject}`,
      '',
      formData.message,
    ].join('\n');

    try {
      await sendTemplateEmail({
        name: formData.name,
        email: formData.email,
        title: formData.subject.trim() || 'Contact form',
        message: messageBody,
      });

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error(err);
      setSubmitError('Failed to send message. Please try again or use WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone & WhatsApp',
      details: '+91 8125752562',
      link: 'tel:+918125752562',
      color: '#009933',
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: 'support@e-tailedindia.com',
      link: 'mailto:support@e-tailedindia.com',
      color: '#0052cc',
    },
    {
      icon: MapPin,
      title: 'Office Address',
      details: 'Sai Silicon Heights, 3-118, Megha Hills Rd, Ayyappa Society, Mega Hills, Madhapur, Hyderabad, Telangana 500081, India',
      color: '#ff9933',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Sunday: 24/7 Support Available',
      color: '#e91e63',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-brand text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl lg:text-2xl text-brand-foreground/85 max-w-4xl mx-auto leading-relaxed">
            Have questions? We're here to help! Reach out to us anytime via phone, email, or WhatsApp
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're interested in becoming a partner, need support, or have questions about
                our services, our team is ready to assist you.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={index} hover>
                      <CardBody className="p-6">
                        <div className="flex items-start space-x-4">
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: `${info.color}20` }}
                          >
                            <Icon className="w-6 h-6" style={{ color: info.color }} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg text-gray-900 mb-1">{info.title}</h3>
                            {info.link ? (
                              <a
                                href={info.link}
                                className="text-gray-700 hover:text-brand transition-colors"
                              >
                                {info.details}
                              </a>
                            ) : (
                              <p className="text-gray-700">{info.details}</p>
                            )}
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  );
                })}
              </div>

              <div className="mt-8">
                <Card className="bg-accent">
                  <CardBody className="p-6 text-white">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                        <WhatsAppLogo className="h-6 w-6" />
                      </span>
                      <h3 className="text-xl font-bold leading-tight pt-1">
                        Quick Support via WhatsApp
                      </h3>
                    </div>
                    <p className="text-accent-foreground/90 mb-4">
                      For immediate assistance, chat with us on WhatsApp. We typically respond within
                      minutes!
                    </p>
                    <Button
                      className="bg-white text-accent hover:bg-gray-100"
                      onClick={() => window.open('https://wa.me/918125752562', '_blank')}
                    >
                      Open WhatsApp Chat
                    </Button>
                  </CardBody>
                </Card>
              </div>
            </div>

            <div>
              <Card>
                <CardBody className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>

                  {submitted && (
                    <div className="mb-6 p-4 bg-accent-muted border border-success-border rounded-lg">
                      <p className="text-accent-active font-semibold">
                        Message sent successfully! We'll get back to you soon.
                      </p>
                    </div>
                  )}

                  {submitError && (
                    <div className="mb-6 p-4 bg-danger-muted border border-danger-border rounded-lg">
                      <p className="text-danger-foreground font-semibold">{submitError}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us more about your inquiry..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={loading}>
                      {loading ? 'Sending...' : 'Send Message'}{' '}
                      <Send className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common queries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardBody className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  What are your support hours?
                </h3>
                <p className="text-gray-600">
                  We provide 24/7 support via WhatsApp and email. Phone support is available from 9 AM
                  to 9 PM IST, 7 days a week.
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  How quickly will I get a response?
                </h3>
                <p className="text-gray-600">
                  WhatsApp queries are typically answered within minutes. Email responses are sent
                  within 24 hours on business days.
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Can I visit your office?
                </h3>
                <p className="text-gray-600">
                  Yes! Our office is at Sai Silicon Heights, 3-118, Megha Hills Rd, Ayyappa Society, Mega Hills, Madhapur, Hyderabad, Telangana 500081, India.
                  Please call ahead to schedule a visit.
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Do you provide training and onboarding?
                </h3>
                <p className="text-gray-600">
                  Absolutely! All partners receive comprehensive training, video tutorials, and ongoing
                  support to ensure success.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-xl text-brand-foreground/85 mb-8">
              Don't hesitate to reach out. Our team is here to help you succeed!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-brand hover:bg-gray-100"
                onClick={() => window.open('https://wa.me/918125752562', '_blank')}
              >
                WhatsApp: +91 8125752562
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10"
                onClick={() => window.open('tel:+918125752562')}
              >
                Call: +91 8125752562
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
