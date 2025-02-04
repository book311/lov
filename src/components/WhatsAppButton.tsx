import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const phoneNumber = "+1234567890"; // Replace with your actual WhatsApp number
  const message = "Hello! I'm interested in learning more about SP L4BS services.";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(true);
    }, 2000);

    const hideTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 15000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-6 right-6 z-50"
      style={{ position: 'fixed' }}
    >
      <AnimatePresence>
        {showWelcome && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-20 right-0 mb-2 p-4 bg-green-500 text-white rounded-lg shadow-lg max-w-sm whitespace-nowrap"
          >
            <p className="text-sm font-medium">
              👋 We're online! How can we help you today?
            </p>
          </motion.div>
        )}

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mb-4 p-4 bg-white rounded-lg shadow-lg max-w-sm"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Chat with us!</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-gray-600 mb-4">
              Have questions? Chat with our team on WhatsApp for quick assistance!
            </p>
            <Button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white"
            >
              Start Chat
              <MessageSquare className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-lg ${
          isOpen ? 'ring-2 ring-green-300' : ''
        }`}
      >
        <MessageSquare className="h-6 w-6 text-white" />
      </Button>
    </motion.div>
  );
};