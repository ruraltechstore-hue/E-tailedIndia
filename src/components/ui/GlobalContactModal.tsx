import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from './Modal';
import ServiceContactForm from './ServiceContactForm';

export default function GlobalContactModal() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open modal if hash is #contact
    if (location.hash === '#contact') {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [location.hash]);

  const handleClose = () => {
    setIsOpen(false);
    // Remove the hash from URL without refreshing
    navigate(location.pathname + location.search, { replace: true });
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size="md">
      <div className="relative">
        <button 
          onClick={handleClose}
          className="absolute right-0 top-0 p-2 text-gray-500 hover:text-gray-700 z-10 hidden"
        >
          {/* Close button is handled by Modal, but we can hide it here or keep ServiceContactForm clean */}
        </button>
        <ServiceContactForm serviceName="General Inquiry" />
      </div>
    </Modal>
  );
}
