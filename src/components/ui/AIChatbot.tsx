import { useState } from 'react';
import { Bot, X, Send, Minimize2 } from 'lucide-react';
import Button from './Button';
import Input from './Input';

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
      text: 'Hello! I\'m your Etailed Digital India AI Assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickReplies = [
    'How to register?',
    'View all services',
    'Check commission structure',
    'KYC requirements',
  ];

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (message.includes('register') || message.includes('signup')) {
      return 'To register as a retailer, click on "Become Retailer" button at the top. You\'ll need your Aadhaar, PAN, and bank details for KYC verification.';
    } else if (message.includes('service')) {
      return 'We offer 100+ services including AEPS, DMT, Recharge, Bill Payment, Insurance, Loans, Travel Booking, and much more! Visit our All Services page to explore.';
    } else if (message.includes('commission')) {
      return 'Commission varies by service and your role (Retailer, Distributor, etc.). Login to your dashboard to view detailed commission structure for each service.';
    } else if (message.includes('kyc')) {
      return 'KYC requires: Aadhaar Card, PAN Card, Bank Account Details, and a recent photograph. Some advanced services may need additional verification.';
    } else if (message.includes('wallet')) {
      return 'Each user gets a digital wallet. You can add money via UPI, Net Banking, or request top-up from your distributor. All transactions reflect instantly.';
    } else if (message.includes('support') || message.includes('help')) {
      return 'You can reach our support team at support@e-tailedindia.com or call +91 8125752562. WhatsApp support is also available 24/7!';
    } else if (message.includes('aeps')) {
      return 'AEPS (Aadhaar Enabled Payment System) allows cash withdrawal and balance inquiry using Aadhaar authentication. Requires fingerprint device.';
    } else if (message.includes('dmt')) {
      return 'Domestic Money Transfer (DMT) enables instant money transfer to any bank account in India. Daily transaction limits apply.';
    } else {
      return 'I can help you with registration, services, commission details, KYC requirements, and more. What would you like to know?';
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
    setInputMessage('');

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 800);
  };

  const handleQuickReply = (reply: string) => {
    setInputMessage(reply);
    handleSendMessage();
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-50 w-16 h-16 bg-brand hover:bg-brand-hover text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="Open AI Chatbot"
      >
        <Bot className="w-8 h-8 group-hover:scale-110 transition-transform" />
        <span className="absolute right-full mr-3 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          AI Assistant
        </span>
      </button>
    );
  }

  return (
    <div
      className={`fixed ${
        isMinimized ? 'bottom-6 right-6' : 'bottom-6 right-6'
      } z-50 bg-white rounded-2xl shadow-2xl transition-all duration-300 ${
        isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
      } flex flex-col`}
    >
      <div className="bg-brand text-white px-6 py-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold">AI Assistant</h3>
            <p className="text-xs text-brand-foreground/85">Always here to help</p>
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
