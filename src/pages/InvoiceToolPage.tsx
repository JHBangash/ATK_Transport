import { useState, useRef, useCallback } from 'react';
import InvoicePage from '@/components/InvoicePage';
import ControlBar from '@/components/ControlBar';
import { DocType, LineItem } from '@/App';
import { COMPANY } from '@/data/company';
import useSeo from '@/hooks/useSeo';

export default function InvoiceToolPage() {
  useSeo({
    title: `Invoice Tool | ${COMPANY.shortName} - Abu Dhabi, UAE`,
    description:
      'Create and print VAT invoices, quotations, receipts and statements for Al TAREEQ ALKAMIL Passenger Transport By Rented Buses, Abu Dhabi.',
    keywords:
      'Al Tareeq Al Kamil invoice, ATK invoice, passenger transport Abu Dhabi invoice, VAT invoice UAE, bus rental invoice Abu Dhabi, ' + COMPANY.mobile,
  });

  const [docType, setDocType] = useState<DocType>('TAX INVOICE');
  const [stampImage, setStampImage] = useState<string | null>(null);
  const [letterheadBg, setLetterheadBg] = useState<string | null>(null);
  const [vatPct, setVatPct] = useState(5);
  const [items, setItems] = useState<LineItem[]>([
    { id: 1, description: '34 Seats Bus Rental 16-06-26 to 15-07-2026', workPeriod: 'Jun-Jul15-2026', unit: 'Month', unitPrice: 7600, qty: 1 },
    { id: 2, description: 'OverTime', workPeriod: 'June-Jul15-2026', unit: 'Hour', unitPrice: 70, qty: 28.84 },
    { id: 3, description: 'Food Allowance', workPeriod: 'June-Jul15-2026', unit: 'Food', unitPrice: 300, qty: 1 },
    { id: 4, description: 'Bus Parking', workPeriod: 'June-Jul15-2026', unit: 'Parking', unitPrice: 351, qty: 1 },
  ]);

  const letterheadRef = useRef<HTMLInputElement>(null);
  const stampRef = useRef<HTMLInputElement>(null);
  const nextId = useRef(10);

  const handleLetterheadUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setLetterheadBg(URL.createObjectURL(file));
    e.target.value = '';
  }, []);

  const handleStampUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setStampImage(URL.createObjectURL(file));
    e.target.value = '';
  }, []);

  const addRow = () => {
    setItems(prev => [...prev, { id: nextId.current++, description: 'New Item Description', workPeriod: '-', unit: 'Unit', unitPrice: 0, qty: 1 }]);
  };

  const deleteRow = (id: number) => setItems(prev => prev.filter(i => i.id !== id));

  const updateItem = (id: number, field: keyof LineItem, value: string | number) => {
    setItems(prev => prev.map(i => i.id === id ? { ...i, [field]: value } : i));
  };

  const subTotal = items.reduce((s, i) => s + i.unitPrice * i.qty, 0);
  const vatAmount = subTotal * (vatPct / 100);
  const grandTotal = subTotal + vatAmount;

  const fmt = (n: number) => n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="min-h-screen bg-gray-200">
      <div className="print:hidden bg-[#0b2e59] text-white px-4 py-3">
        <a href="#/" className="text-sm text-gray-200 hover:text-white">
          &larr; Back to website
        </a>
      </div>
      <ControlBar
        docType={docType}
        setDocType={setDocType}
        stampImage={stampImage}
        onUploadStamp={() => stampRef.current?.click()}
        onClearStamp={() => setStampImage(null)}
        onAddRow={addRow}
        onUploadLetterhead={() => letterheadRef.current?.click()}
        hasLetterhead={!!letterheadBg}
        onClearLetterhead={() => setLetterheadBg(null)}
      />
      <input ref={letterheadRef} type="file" accept="image/*" className="hidden" onChange={handleLetterheadUpload} />
      <input ref={stampRef} type="file" accept="image/*" className="hidden" onChange={handleStampUpload} />
      <InvoicePage
        docType={docType}
        stampImage={stampImage}
        letterheadBg={letterheadBg}
        items={items}
        vatPct={vatPct}
        setVatPct={setVatPct}
        subTotal={subTotal}
        vatAmount={vatAmount}
        grandTotal={grandTotal}
        fmt={fmt}
        onDeleteRow={deleteRow}
        onUpdateItem={updateItem}
      />
    </div>
  );
}