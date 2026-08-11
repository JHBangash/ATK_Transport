import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '@/data/company';

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-xl hover:bg-green-500 hover:scale-105 transition print:hidden"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}