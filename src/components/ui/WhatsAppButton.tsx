import WhatsAppLogo from '../icons/WhatsAppLogo';

export default function WhatsAppButton() {
  const phoneNumber = '918125752562';
  const message = 'Hello! I would like to know more about Etailed Digital India services.';

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-3 sm:right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsAppLogo className="w-8 h-8 group-hover:scale-110 transition-transform" />
      <span className="hidden lg:block absolute right-full mr-3 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us!
      </span>
    </button>
  );
}
