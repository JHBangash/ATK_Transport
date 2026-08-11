import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { COMPANY, MAILTO, WHATSAPP_LINK } from '@/data/company';

export default function Footer({ navigate }: { navigate: (to: string) => void }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#081f3c] text-gray-300 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="text-white font-bold">{COMPANY.shortName}</h3>
          <p className="mt-1 text-xs text-gray-400">{COMPANY.tagline}</p>
          <p className="mt-4 text-sm leading-6">
            Reliable staff, school and group transportation across Abu Dhabi and the UAE,
            with modern air-conditioned buses and professional drivers.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <button onClick={() => navigate('/')} className="hover:text-white">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => navigate('/about')} className="hover:text-white">
                About
              </button>
            </li>
            <li>
              <button onClick={() => navigate('/contact')} className="hover:text-white">
                Contact
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 shrink-0 text-amber-400" />
              <a href={MAILTO} className="hover:text-white break-all">
                {COMPANY.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 shrink-0 text-amber-400" />
              <a href={`tel:+971509664255`} className="hover:text-white">
                {COMPANY.mobile}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-amber-400" />
              {COMPANY.address}
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle className="h-4 w-4 mt-0.5 shrink-0 text-green-400" />
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>
            &copy; {year} {COMPANY.name}.
          </p>
          <p>
            {COMPANY.address} | TRN: {COMPANY.trn}
          </p>
        </div>
      </div>
    </footer>
  );
}