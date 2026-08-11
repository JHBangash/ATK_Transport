import { Award, Bus, CheckCircle2, Eye, Target, Users } from 'lucide-react';
import useSeo from '@/hooks/useSeo';
import { COMPANY, WHATSAPP_LINK } from '@/data/company';

const VALUES = [
  { icon: Target, title: 'Our Mission', desc: 'To deliver safe, punctual and comfortable passenger transport for companies, schools and communities across Abu Dhabi and the UAE.' },
  { icon: Eye, title: 'Our Vision', desc: 'To be the most trusted rented-bus operator in the UAE, known for reliability, professionalism and care for every passenger.' },
  { icon: Award, title: 'Our Commitment', desc: 'Well-maintained buses, licensed drivers, transparent pricing and round-the-clock availability — every single trip.' },
];

const FLEET = [
  { seats: '29 Seats', use: 'Staff transport, schools and group trips' },
  { seats: '34 Seats', use: 'Large groups, companies and events' },
  { seats: 'Custom Trips', use: 'Airport, tours and long-distance journeys' },
];

export default function AboutPage() {
  useSeo({
    title: `About Us | ${COMPANY.shortName} - Abu Dhabi, UAE`,
    description:
      'Learn about Al TAREEQ ALKAMIL Passenger Transport By Rented Buses in Mussafah, Abu Dhabi - our mission, values, fleet and commitment to safe and reliable transportation.',
    keywords:
      'about Al Tareeq Al Kamil, Al Tareeq Al Kamil Abu Dhabi, ATK transport company, bus rental company Abu Dhabi, Mussafah M37 transport, passenger transport UAE, ' + COMPANY.mobile,
  });

  return (
    <main>
      <section className="bg-gradient-to-br from-[#0b2e59] via-[#0d3a70] to-[#14508f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <h1 className="text-4xl sm:text-5xl font-extrabold">About Us</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-200">
            {COMPANY.shortName} provides professional passenger transport by rented buses
            throughout Abu Dhabi and the UAE.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-[#0b2e59]">
              Trusted Passenger Transport in Abu Dhabi
            </h2>
            <p className="mt-5 text-gray-600 leading-7">
              Based in Mussafah M37, Abu Dhabi, {COMPANY.shortName} specialises in renting modern,
              air-conditioned buses for staff transportation, school runs, airport transfers, events
              and group travel. We serve businesses, schools and families with dependable schedules
              and professional drivers who treat every trip with care.
            </p>
            <p className="mt-4 text-gray-600 leading-7">
              From a single journey to a long-term staff transport contract, we tailor the bus size,
              route and schedule to your needs — with transparent pricing and clear VAT invoices.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Licensed and insured fleet',
                'Professional, experienced drivers',
                'Punctual pick-ups, every time',
                '24/7 booking by call or WhatsApp',
              ].map(t => (
                <li key={t} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600 mt-0.5" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4">
            {VALUES.map(v => (
              <div key={v.title} className="rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#0b2e59] text-white">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-3 font-bold text-gray-900">{v.title}</h3>
                <p className="mt-1 text-sm text-gray-600 leading-6">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-[#0b2e59]">Our Fleet</h2>
            <p className="mt-4 text-gray-600">
              Clean, safe and comfortable buses maintained to the highest standard.
            </p>
          </div>
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {FLEET.map(f => (
              <div key={f.seats} className="rounded-xl bg-white border border-gray-100 shadow-sm p-8 text-center hover:shadow-lg transition">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-amber-400 text-[#0b2e59]">
                  <Bus className="h-7 w-7" />
                </span>
                <h3 className="mt-4 text-xl font-bold text-[#0b2e59]">{f.seats}</h3>
                <p className="mt-1 text-sm text-gray-600">{f.use}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl bg-[#0b2e59] text-white p-8 sm:p-10 text-center">
            <h3 className="text-2xl font-bold">Need a bus today?</h3>
            <p className="mt-3 text-gray-200">
              Call or WhatsApp us on {COMPANY.mobile} — we are available 24/7.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-green-600 hover:bg-green-500 px-6 py-3 font-semibold transition-colors"
            >
              <Users className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}