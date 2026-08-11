import { useState } from 'react';
import { Bus, Menu, MessageCircle, X } from 'lucide-react';
import { COMPANY, WHATSAPP_LINK } from '@/data/company';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar({
  path,
  navigate,
}: {
  path: string;
  navigate: (to: string) => void;
}) {
  const [open, setOpen] = useState(false);

  const go = (to: string) => {
    navigate(to);
    setOpen(false);
  };

  const linkClass = (to: string) =>
    `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
      path === to ? 'text-white bg-white/10' : 'text-gray-200 hover:text-white hover:bg-white/5'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-[#0b2e59] text-white shadow-lg print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-3">
          <button onClick={() => go('/')} className="flex items-center gap-3 text-left">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber-400 text-[#0b2e59]">
              <Bus className="h-6 w-6" />
            </span>
            <span>
              <span className="block font-bold tracking-wide leading-tight">{COMPANY.shortName}</span>
              <span className="block text-[11px] text-gray-300">{COMPANY.tagline}</span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {LINKS.map(l => (
              <button key={l.to} onClick={() => go(l.to)} className={linkClass(l.to)}>
                {l.label}
              </button>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center gap-2 rounded-md bg-green-600 hover:bg-green-500 px-4 py-2 text-sm font-semibold transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </nav>

          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-white/10 px-4 pb-4 pt-2 space-y-1">
          {LINKS.map(l => (
            <button
              key={l.to}
              onClick={() => go(l.to)}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                path === l.to ? 'bg-white/10 text-white' : 'text-gray-200 hover:bg-white/5'
              }`}
            >
              {l.label}
            </button>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold mt-2"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}