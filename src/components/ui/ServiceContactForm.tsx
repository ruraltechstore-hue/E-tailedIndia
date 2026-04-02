import { useState } from 'react';
import { Send } from 'lucide-react';
import Button from './Button';
import Input from './Input';
import { sendTemplateEmail } from '../../lib/emailjs';

interface ServiceContactFormProps {
  serviceName: string;
  serviceOptions?: string[];
}

export default function ServiceContactForm({ serviceName, serviceOptions = [] }: ServiceContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: serviceOptions[0] || '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const messageBody = [
      `Service category: ${serviceName}`,
      `Service type: ${formData.service || 'N/A'}`,
      `Phone: ${formData.phone}`,
      '',
      formData.message || '(no message)',
    ].join('\n');

    try {
      await sendTemplateEmail({
        name: formData.name,
        email: formData.email,
        title: `Quote: ${serviceName}`,
        message: messageBody,
      });

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: serviceOptions[0] || '',
        message: '',
      });

      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError('Failed to submit inquiry. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h3>

      {success && (
        <div className="mb-6 p-4 bg-accent-muted border border-success-border rounded-lg text-success-foreground">
          Thank you! We'll get back to you within 24 hours.
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-danger-muted border border-danger-border rounded-lg text-danger-foreground">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Name *
          </label>
          <Input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <Input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <Input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 XXXXX XXXXX"
          />
        </div>

        {serviceOptions.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Service *
            </label>
            <select
              required
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
            >
              {serviceOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            placeholder="Tell us about your requirements..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full group"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Inquiry'}
          <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </form>
    </div>
  );
}
