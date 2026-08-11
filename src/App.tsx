import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import InvoiceToolPage from '@/pages/InvoiceToolPage';

export type DocType = 'TAX INVOICE' | 'QUOTATION' | 'RECEIPT VOUCHER' | 'STATEMENT OF ACCOUNT (S.O.A)';

export interface LineItem {
  id: number;
  description: string;
  workPeriod: string;
  unit: string;
  unitPrice: number;
  qty: number;
}

function getPath() {
  const hash = window.location.hash.replace(/^#/, '');
  if (hash === '/about') return '/about';
  if (hash === '/contact') return '/contact';
  if (hash === '/invoice') return '/invoice';
  return '/';
}

export default function App() {
  const [path, setPath] = useState(getPath);

  useEffect(() => {
    const onHashChange = () => {
      setPath(getPath());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (to: string) => {
    window.location.hash = to;
  };

  if (path === '/invoice') {
    return <InvoiceToolPage />;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar path={path} navigate={navigate} />
      <div className="flex-1">
        {path === '/about' && <AboutPage />}
        {path === '/contact' && <ContactPage />}
        {path === '/' && <HomePage navigate={navigate} />}
      </div>
      <Footer navigate={navigate} />
      <WhatsAppButton />
    </div>
  );
}