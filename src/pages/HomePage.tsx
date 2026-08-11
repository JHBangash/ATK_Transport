import {
  ArrowRight,
  Award,
  BadgeCheck,
  Bus,
  CalendarDays,
  Clock,
  Mail,
  MessageCircle,
  Plane,
  School,
  ShieldCheck,
  Users,
  Zap,
} from 'lucide-react';
import useSeo from '@/hooks/useSeo';
import { COMPANY, WHATSAPP_LINK, MAILTO } from '@/data/company';

const SERVICES = [
  {
    icon: Users,
    title: 'Staff Transportation',
    desc: 'Daily staff pick-up and drop-off for companies and construction camps, always on time.',
  },
  {
    icon: School,
    title: 'School Bus Services',
    desc: 'Safe, supervised and punctual transportation for students with fixed routes and schedules.',
  },
  {
    icon: Plane,
    title: 'Airport Transfers',
    desc: 'On-time airport pick-up and drop-off for individuals, groups and corporate travellers.',
  },
  {
    icon: CalendarDays,
    title: 'Event & Group Travel',
    desc: 'Weddings, conferences, tours and field trips — the right bus size for your group.',
  },
  {
    icon: Bus,
    title: 'Bus Rental',
    desc: 'Modern air-conditioned buses (up to 34 seats) for short-term and long-term rental.',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    desc: 'Round-the-clock service. One call away for urgent or off-hours transportation needs.',
  },
];

const HIGHLIGHTS = [
  { icon: ShieldCheck, label: 'Licensed & Insured', sub: 'Fully compliant fleet' },
  { icon: Bus, label: 'Modern Fleet', sub: 'AC buses up to 34 seats' },
  { icon: Award, label: 'Experienced Drivers', sub: 'Professional & courteous' },
  { icon: Zap, label: 'On-Time Service', sub: 'Punctual every trip' },
];

export default function HomePage({ navigate }: { navigate: (to: string) => void }) {
  useSeo({
    title: `${COMPANY.shortName} | Passenger Transport By Rented Buses - Abu Dhabi, UAE`,
    description:
      'Al TAREEQ ALKAMIL Passenger Transport By Rented Buses - staff transport, school bus, airport and group travel services in Mussafah, Abu Dhabi, UAE. 24/7 service. Call or WhatsApp ' +
      COMPANY.mobile +
      '.',
    keywords:
      'Al Tareeq Al Kamil, ATK Transport, passenger transport Abu Dhabi, bus rental Abu Dhabi, rented buses UAE, staff transport UAE, school transport Abu Dhabi, Mussafah M37 Abu Dhabi, bus hire UAE, ' +
      COMPANY.mobile,
  });

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0b2e59] via-[#0d3a70] to-[#14508f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium">
                <BadgeCheck className="h-4 w-4 text-amber-400" />
                Mussafah M37, Abu Dhabi, UAE
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight">
                {COMPANY.shortName}
                <span className="block mt-2 text-xl sm:text-2xl font-semibold text-amber-400">
                  Passenger Transport By Rented Buses
                </span>
              </h1>
              <p className="mt-6 text-lg text-gray-200 max-w-xl">
                Reliable staff, school and group transportation across Abu Dhabi and the UAE —
                modern buses, professional drivers and 24/7 availability.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-green-600 hover:bg-green-500 px-6 py-3 font-semibold transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </a>
                <button
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/20 border border-white/30 px-6 py-3 font-semibold transition-colors"
                >
                  Contact Us
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-6 text-sm text-gray-300">
                Email: {COMPANY.email} &nbsp;|&nbsp; Mobile / WhatsApp: {COMPANY.mobile}
              </p>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="relative flex h-80 w-80 items-center justify-center rounded-full bg-white/10 border border-white/20">
                <Bus className="h-40 w-40 text-amber-400" />
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-4 py-1 text-sm font-bold text-[#0b2e59]">
                  {COMPANY.mobile}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight strip */}
      <section className="bg-amber-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map(h => (
            <div key={h.label} className="flex items-center gap-3 text-[#0b2e59]">
              <h.icon className="h-8 w-8 shrink-0" />
              <div>
                <p className="font-bold">{h.label}</p>
                <p className="text-xs">{h.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-[#0b2e59]">Our Services</h2>
            <p className="mt-4 text-gray-600">
              Whatever your transportation need, we have the right bus and the right driver for it.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(s => (
              <div
                key={s.title}
                className="group rounded-xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#0b2e59] text-white group-hover:bg-amber-400 group-hover:text-[#0b2e59] transition-colors">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-6">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-[#0b2e59]">Why Choose Al TAREEQ ALKAMIL?</h2>
            <p className="mt-4 text-gray-600 leading-7">
              We are a trusted passenger transport company in Abu Dhabi committed to safety,
              punctuality and professional service for companies, schools, families and event
              organisers.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                'Modern, air-conditioned and well-maintained buses',
                'Experienced, licensed and courteous drivers',
                'Flexible short-term and long-term contracts',
                'Transparent pricing with VAT invoices',
                'Mobile & WhatsApp booking — 24/7',
              ].map(t => (
                <li key={t} className="flex items-start gap-3 text-gray-700">
                  <BadgeCheck className="h-5 w-5 shrink-0 text-green-600 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-[#0b2e59] text-white p-8 sm:p-10">
            <h3 className="text-xl font-bold">Request a Quote</h3>
            <p className="mt-3 text-sm text-gray-200 leading-6">
              Tell us the group size, route and dates and we will respond with a tailored quote —
              fast.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md bg-green-600 hover:bg-green-500 px-5 py-3 font-semibold transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp: {COMPANY.mobile}
              </a>
              <a
                href={MAILTO}
                className="flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/20 border border-white/30 px-5 py-3 font-semibold transition-colors break-all"
              >
                <Mail className="h-5 w-5" />
                {COMPANY.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}