import { MessageCircle } from 'lucide-react';
import { generateWhatsAppLink } from '../lib/utils';

export default function WhatsAppButton() {
  const defaultMessage = "Hi Adedola Gold, I'd like to ask about your services.";
  
  return (
    <a
      href={generateWhatsAppLink(defaultMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-xl shadow-green-500/20 transition-transform hover:scale-105 active:scale-95"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-medium hidden sm:inline">Chat With Us</span>
    </a>
  );
}
