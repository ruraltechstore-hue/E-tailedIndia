import { useState } from 'react';
import { Bot, X, Send, Minimize2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your E-Tailed Digital India assistant. Ask me about digital marketing, SaaS solutions, or how we can help grow your business.',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickReplies = [
    'Contact us',
    'Digital marketing services',
    'SaaS solutions',
    'Pricing information',
  ];

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (message.includes('register') || message.includes('signup') || message.includes('contact')) {
      return 'To get started, visit our Contact page or reach us at support@e-tailedindia.com or +91 93928 98733 or +91 9390168733. WhatsApp support is also available 24/7!';
    } else if (message.includes('marketing') || message.includes('seo') || message.includes('social')) {
      return 'We offer SEO, Google Ads, Meta/Instagram Ads, social media management, content marketing, email campaigns, and lead generation funnels. Visit our All Services page to explore.';
    } else if (message.includes('saas') || message.includes('software') || message.includes('crm')) {
      return 'We build and deploy custom SaaS products including CRM, ERP, HRMS, LMS, booking systems, and industry-specific software. Contact us for a free consultation.';
    } else if (message.includes('service')) {
      return 'Our services include digital marketing, website development, e-commerce, automation, SaaS products, branding, and training programs. Visit our All Services page to explore.';
    } else if (message.includes('commission') || message.includes('pricing') || message.includes('price')) {
      return 'Pricing depends on your project scope — marketing retainers, SaaS licenses, or one-time development. Contact us at support@e-tailedindia.com or +91 93928 98733 or +91 9390168733 for a custom quote.';
    } else if (message.includes('automation') || message.includes('whatsapp')) {
      return 'We set up WhatsApp Business API bots, email automation, CRM integrations, sales funnels, and lead nurturing workflows. Great for converting more prospects automatically.';
    } else if (message.includes('support') || message.includes('help')) {
      return 'You can reach our team at support@e-tailedindia.com or call +91 93928 98733 or +91 9390168733. WhatsApp support is available 24/7!';
    } else if (message.includes('website') || message.includes('ecommerce') || message.includes('e-commerce')) {
      return 'We build business websites, Shopify/WooCommerce stores, landing pages, and marketplaces — all optimized for SEO and mobile performance.';
    } else if (message.includes('partner') || message.includes('agency') || message.includes('white')) {
      return 'We offer white-label digital marketing and SaaS delivery for agencies. Visit our Partner With Us page or contact us to learn more.';
    } else {
      return 'I can help you with digital marketing, SaaS solutions, pricing, and how to get in touch. What would you like to know?';
    }
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = inputMessage;
    setInputMessage('');

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(currentInput),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 800);
  };

  const handleQuickReply = (reply: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: reply,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(reply),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 800);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-3 sm:right-6 z-50 w-16 h-16 bg-brand hover:bg-brand-hover text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="Open AI Chatbot"
      >
        <Bot className="w-8 h-8 group-hover:scale-110 transition-transform" />
        <span className="hidden lg:block absolute right-full mr-3 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          AI Assistant
        </span>
      </button>
    );
  }

  return (
    <div
      className={`fixed ${
        isMinimized ? 'bottom-4 right-3 sm:bottom-6 sm:right-6' : 'bottom-4 right-3 sm:bottom-6 sm:right-6'
      } z-50 bg-white rounded-2xl shadow-2xl transition-all duration-300 ${
        isMinimized
          ? 'w-[calc(100vw-1.5rem)] max-w-80 h-16'
          : 'w-[calc(100vw-1.5rem)] max-w-96 h-[600px] max-h-[calc(100vh-2rem)] sm:max-h-[600px]'
      } flex flex-col`}
    >
      <div className="bg-brand text-white px-6 py-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold">AI Assistant</h3>
            <p className="text-xs text-brand-foreground/85">Marketing & SaaS help</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
          >
            <Minimize2 className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-brand text-white rounded-br-none'
                      : 'bg-white text-gray-900 shadow-sm rounded-bl-none'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-200 space-y-3">
            <div className="flex flex-wrap gap-2">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => handleQuickReply(reply)}
                  className="text-xs px-3 py-1.5 bg-brand-muted text-brand-on-muted rounded-full hover:bg-brand-subtle transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand-subtle"
              />
              <button
                onClick={handleSendMessage}
                className="px-4 py-2.5 bg-brand text-white rounded-lg hover:bg-brand-hover transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
