import { useState } from 'react';
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import useSeo from '@/hooks/useSeo';
import { COMPANY, MAILTO, WHATSAPP_LINK } from '@/data/company';

const CONTACT_CARDS = [
  { icon: Phone, title: 'Phone', value: COMPANY.mobile, href: 'tel:+971509664255' },
  { icon: Mail, title: 'Email', value: COMPANY.email, href: MAILTO },
  { icon: MapPin, title: 'Address', value: COMPANY.address, href: undefined },
  { icon: MessageCircle, title: 'WhatsApp', value: COMPANY.mobile, href: WHATSAPP_LINK },
];

export default function ContactPage() {
  useSeo({
    title: `Contact Us | ${COMPANY.shortName} - Abu Dhabi, UAE`,
    description:
      'Contact Al TAREEQ ALKAMIL Passenger Transport By Rented Buses in Mussafah M37, Abu Dhabi. Call or WhatsApp ' +
      COMPANY.mobile +
      ' or email ' +
      COMPANY.email +
      ' for bus rental and passenger transport.',
    keywords:
      'contact Al Tareeq Al Kamil, bus rental Abu Dhabi contact, passenger transport Abu Dhabi contact, Mussafah M37 Abu Dhabi, WhatsApp bus hire Abu Dhabi, ' + COMPANY.mobile + ', ' + COMPANY.email,
  });

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(`Name: ${name}\n\n${message}`);
    window.open(`mailto:${COMPANY.email}?subject=Bus%20Rental%20Enquiry&body=${body}`, '_self');
  };

  return (
    <main>
      <section className="bg-gradient-to-br from-[#0b2e59] via-[#0d3a70] to-[#14508f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-200">
            Ready to book a bus or get a quote? Reach us anytime — we are available 24/7.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTACT_CARDS.map(c => {
              const inner = (
                <>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#0b2e59] text-white">
                    <c.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-bold text-gray-900">{c.title}</h3>
                  <p className="mt-1 text-sm text-gray-600 break-all">{c.value}</p>
                </>
              );
              return c.href ? (
                <a
                  key={c.title}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="rounded-xl bg-white border border-gray-100 shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition"
                >
                  {inner}
                </a>
              ) : (
                <div key={c.title} className="rounded-xl bg-white border border-gray-100 shadow-sm p-6">
                  {inner}
                </div>
              );
            })}
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-8">
              <h2 className="text-2xl font-extrabold text-[#0b2e59]">Send an Enquiry</h2>
              <p className="mt-2 text-sm text-gray-600">
                Fill in the form and it will open your email app addressed to {COMPANY.email}.
              </p>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Your Name</label>
                  <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b2e59]"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b2e59]"
                    placeholder="Group size, route and preferred dates..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-[#0b2e59] hover:bg-[#0d3a70] text-white px-6 py-3 font-semibold transition-colors"
                >
                  <Send className="h-5 w-5" />
                  Send Enquiry
                </button>
              </form>
            </div>

            <div className="rounded-2xl bg-[#0b2e59] text-white p-8 flex flex-col">
              <h2 className="text-2xl font-extrabold">Visit Us</h2>
              <p className="mt-3 text-gray-200 leading-7">
                Our operations are based in Mussafah M37, Abu Dhabi, United Arab Emirates. Call ahead
                or message us on WhatsApp before visiting.
              </p>
              <div className="mt-6 space-y-4">
                <p className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-amber-400 mt-0.5" />
                  {COMPANY.address}
                </p>
                <p className="flex items-start gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-amber-400 mt-0.5" />
                  Open 24 hours, 7 days a week
                </p>
                <p className="flex items-start gap-3">
                  <MessageCircle className="h-5 w-5 shrink-0 text-green-400 mt-0.5" />
                  WhatsApp: {COMPANY.mobile}
                </p>
              </div>
              <div className="mt-auto pt-8 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-green-600 hover:bg-green-500 px-5 py-3 font-semibold transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </a>
                <a
                  href={MAILTO}
                  className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/20 border border-white/30 px-5 py-3 font-semibold transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}