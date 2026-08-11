import { useState } from 'react';
import { DocType, LineItem } from '@/App';

interface Props {
  docType: DocType;
  stampImage: string | null;
  letterheadBg: string | null;
  items: LineItem[];
  vatPct: number;
  setVatPct: (v: number) => void;
  subTotal: number;
  vatAmount: number;
  grandTotal: number;
  fmt: (n: number) => string;
  onDeleteRow: (id: number) => void;
  onUpdateItem: (id: number, field: keyof LineItem, value: string | number) => void;
}

function Editable({
  value,
  onChange,
  className = '',
  tag: Tag = 'span',
}: {
  value: string;
  onChange: (v: string) => void;
  className?: string;
  tag?: 'span' | 'div' | 'p';
}) {
  return (
    <Tag
      contentEditable
      suppressContentEditableWarning
      onBlur={e => onChange(e.currentTarget.textContent ?? '')}
      className={`outline-none hover:bg-blue-50 focus:bg-blue-50 rounded px-0.5 transition-colors ${className}`}
    >
      {value}
    </Tag>
  );
}

export default function InvoicePage({
  docType, stampImage,
  letterheadBg, items, vatPct, setVatPct,
  subTotal, vatAmount, grandTotal, fmt,
  onDeleteRow, onUpdateItem,
}: Props) {
  const [billTo, setBillTo] = useState('Manager\nStrong Growth General Maintenance LLC\nAbu Dhabi, UAE\nTRN:\nContact:');
  const [invoiceNo, setInvoiceNo] = useState('ATK/SGG/2026/INV001');
  const [ref, setRef] = useState('AT/SGG/2026/INV');
  const [date, setDate] = useState('15-Jul-2026');
  const [subject, setSubject] = useState('Transportation Services Vehicle 88893-34 Seats - Jun 16-Jul 15-2026');
  const [vatLabel, setVatLabel] = useState('VAT');
  const [vatAmountText, setVatAmountText] = useState<string | null>(null);
  const [bankDetails, setBankDetails] = useState('Bank Name:\nAccount Name:\nAccount No.:\nIBAN:\nSWIFT Code:\nBranch:');
  const [receiverName, setReceiverName] = useState('____________');

  const displayedVatAmount = vatAmountText ?? fmt(vatAmount);
  const grandTotalOverride = vatAmountText !== null;
  const displayedGrandTotal = grandTotalOverride
    ? fmt(subTotal + (parseFloat(vatAmountText.replace(/,/g, '')) || 0))
    : fmt(grandTotal);

  const handleVatPctChange = (v: number) => {
    setVatAmountText(null);
    setVatPct(v);
  };

  return (
    <div className="flex justify-center py-6 print:py-0">
      {/* A4 page */}
      <div
        id="documentPage"
        className="relative bg-white shadow-2xl print:shadow-none"
        style={{
          width: '210mm',
          minHeight: '297mm',
          padding: '28mm 14mm 24mm 14mm',
          fontFamily: 'Arial, sans-serif',
          color: '#111',
          fontSize: '12px',
        }}
      >
        {/* Letterhead background image */}
        {letterheadBg && (
          <img
            src={letterheadBg}
            alt="Letterhead"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ zIndex: 0, opacity: 1 }}
          />
        )}

        {/* All content sits above BG */}
        <div className="relative" style={{ zIndex: 1 }}>

          {/* Header meta */}
          <div className="flex justify-between text-xs mb-2">
            <Editable value="Al TAREEQ ALKAMIL Passenger Transport By Rented Buses" onChange={() => {}} className="text-gray-700" />
            <Editable value="Mob/WhatsApp: 050-966-4255 | altareeqkamilad@gmail.com" onChange={() => {}} className="text-gray-700 text-right" />
          </div>

          {/* Document title */}
          <div className="text-center text-xl font-bold tracking-widest uppercase mb-4" style={{ letterSpacing: '3px' }}>
            ** {docType} **
          </div>

          {/* Meta grid */}
          <div className="grid grid-cols-2 gap-5 text-xs mb-3">
            <div>
              <strong>Bill To:</strong>
              <div className="mt-1 leading-5">
                {billTo.split('\n').map((line, i) => (
                  <div key={i} contentEditable suppressContentEditableWarning
                    onBlur={e => {
                      const lines = billTo.split('\n');
                      lines[i] = e.currentTarget.textContent ?? '';
                      setBillTo(lines.join('\n'));
                    }}
                    className="outline-none hover:bg-blue-50 focus:bg-blue-50 rounded px-0.5 transition-colors min-h-[1em]"
                  >{line}</div>
                ))}
              </div>
            </div>
            <div className="text-right">
              <p><strong>Invoice No:</strong> <Editable value={invoiceNo} onChange={setInvoiceNo} /></p>
              <p><strong>Ref:</strong> <Editable value={ref} onChange={setRef} /></p>
              <p><strong>Date:</strong> <Editable value={date} onChange={setDate} /></p>
            </div>
          </div>

          <p className="text-xs mb-3">
            <strong>Subject:</strong> <Editable value={subject} onChange={setSubject} />
          </p>

          {/* Items table */}
          <table className="w-full border-collapse text-xs mb-0" style={{ tableLayout: 'fixed' }}>
            <colgroup>
              <col style={{ width: '35%' }} />
              <col style={{ width: '19%' }} />
              <col style={{ width: '9%' }} />
              <col style={{ width: '12%' }} />
              <col style={{ width: '8%' }} />
              <col style={{ width: '14%' }} />
              <col className="print:hidden" style={{ width: '3%' }} />
            </colgroup>
            <thead>
              <tr style={{ backgroundColor: '#0b2e59', color: 'white' }}>
                {['Description', 'Work Period', 'Unit', 'Unit Price', 'Qty', 'Amount (AED)', ''].map((h, i) => (
                  <th key={i} className={`border border-gray-400 px-2 py-1.5 text-center font-semibold ${i === 6 ? 'print:hidden' : ''}`}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="border border-gray-400 px-2 py-1">
                    <Editable value={item.description} onChange={v => onUpdateItem(item.id, 'description', v)} />
                  </td>
                  <td className="border border-gray-400 px-2 py-1 text-center">
                    <Editable value={item.workPeriod} onChange={v => onUpdateItem(item.id, 'workPeriod', v)} />
                  </td>
                  <td className="border border-gray-400 px-2 py-1 text-center">
                    <Editable value={item.unit} onChange={v => onUpdateItem(item.id, 'unit', v)} />
                  </td>
                  <td className="border border-gray-400 px-2 py-1 text-right">
                    <Editable
                      value={fmt(item.unitPrice)}
                      onChange={v => onUpdateItem(item.id, 'unitPrice', parseFloat(v.replace(/,/g, '')) || 0)}
                    />
                  </td>
                  <td className="border border-gray-400 px-2 py-1 text-center">
                    <Editable
                      value={String(item.qty)}
                      onChange={v => onUpdateItem(item.id, 'qty', parseFloat(v.replace(/,/g, '')) || 0)}
                    />
                  </td>
                  <td className="border border-gray-400 px-2 py-1 text-right font-medium">
                    {fmt(item.unitPrice * item.qty)}
                  </td>
                  <td className="border border-gray-400 px-1 py-1 text-center print:hidden">
                    <button
                      onClick={() => onDeleteRow(item.id)}
                      className="text-red-500 hover:text-red-700 font-bold text-xs leading-none"
                    >×</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Summary */}
          <div className="flex justify-end mb-6">
            <table className="border-collapse text-xs" style={{ width: '50%' }}>
              <tbody>
                <tr>
                  <td className="border border-gray-400 px-2 py-1.5 font-bold w-3/4">Sub Total (AED):</td>
                  <td className="border border-gray-400 px-2 py-1.5 text-right font-bold">{fmt(subTotal)}</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-2 py-1.5 font-bold">
                    <Editable value={vatLabel} onChange={setVatLabel} />{' '}
                    <span
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={e => handleVatPctChange(parseFloat(e.currentTarget.textContent ?? '0') || 0)}
                      className="outline-none hover:bg-blue-50 focus:bg-blue-50 rounded px-0.5"
                    >{vatPct}</span>% :
                  </td>
                  <td className="border border-gray-400 px-2 py-1.5 text-right font-bold">
                    <Editable
                      value={displayedVatAmount}
                      onChange={v => setVatAmountText(v)}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-2 py-1.5 font-bold">Total Amount (Inc. VAT):</td>
                  <td className="border border-gray-400 px-2 py-1.5 text-right font-bold text-[#0b2e59]">{displayedGrandTotal}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Signature + Stamp section ── */}
          <div className="relative flex justify-between items-end mt-6 mb-2" style={{ minHeight: '130px' }}>

            {/* Left: Authorized Signature — stamp image sits over this */}
            <div className="relative flex flex-col items-center" style={{ width: '220px' }}>
              {stampImage && (
                <img
                  src={stampImage}
                  alt="Company stamp"
                  className="absolute"
                  style={{
                    left: '50%',
                    bottom: '-8px',
                    width: '170px',
                    height: 'auto',
                    objectFit: 'contain',
                    transform: 'translateX(-50%) rotate(-6deg)',
                    opacity: 0.92,
                    zIndex: 10,
                    pointerEvents: 'none',
                  }}
                />
              )}
              <div style={{ borderTop: '1px solid #333', width: '100%', paddingTop: '4px', textAlign: 'center' }}>
                <strong style={{ fontSize: '11px' }}>Authorized Signature</strong>
              </div>
            </div>

            {/* Right: Receiver's Signature */}
            <div style={{ width: '200px', textAlign: 'center', fontSize: '11px' }}>
              <p><strong>Name:</strong> <Editable value={receiverName} onChange={setReceiverName} /></p>
              <p className="mt-3"><strong>Receiver's Signature:</strong> ____________</p>
            </div>
          </div>

          {/* Bank details */}
          <div className="mt-10 text-xs">
            <strong>Bank Account Details:</strong>
            <div className="mt-1 leading-5">
              {bankDetails.split('\n').map((line, i) => (
                <div key={i} contentEditable suppressContentEditableWarning
                  onBlur={e => {
                    const lines = bankDetails.split('\n');
                    lines[i] = e.currentTarget.textContent ?? '';
                    setBankDetails(lines.join('\n'));
                  }}
                  className="outline-none hover:bg-blue-50 focus:bg-blue-50 rounded px-0.5 transition-colors min-h-[1em]"
                >{line}</div>
              ))}
            </div>
          </div>

        </div>{/* /relative z-1 */}
      </div>
    </div>
  );
}
