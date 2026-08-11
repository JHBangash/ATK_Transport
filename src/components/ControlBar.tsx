import { DocType } from '@/App';

interface Props {
  docType: DocType;
  setDocType: (d: DocType) => void;
  stampImage: string | null;
  onUploadStamp: () => void;
  onClearStamp: () => void;
  onAddRow: () => void;
  onUploadLetterhead: () => void;
  hasLetterhead: boolean;
  onClearLetterhead: () => void;
}

const docTypes: DocType[] = ['TAX INVOICE', 'QUOTATION', 'RECEIPT VOUCHER', 'STATEMENT OF ACCOUNT (S.O.A)'];

export default function ControlBar({
  docType, setDocType,
  stampImage, onUploadStamp, onClearStamp,
  onAddRow, onUploadLetterhead, hasLetterhead, onClearLetterhead
}: Props) {
  return (
    <div className="print:hidden sticky top-0 z-50 bg-[#1a252f] text-white px-4 py-3 flex flex-wrap items-center gap-3 shadow-lg">
      <label className="flex flex-col gap-1 text-xs">
        <span className="text-gray-300">Document Type</span>
        <select
          value={docType}
          onChange={e => setDocType(e.target.value as DocType)}
          className="bg-[#243342] text-white border border-gray-600 rounded px-2 py-1.5 text-xs focus:outline-none focus:border-blue-400"
        >
          {docTypes.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
      </label>

      <div className="h-8 w-px bg-gray-600 mx-1" />

      {stampImage ? (
        <button
          onClick={onClearStamp}
          className="px-3 py-1.5 rounded text-xs font-semibold bg-red-700 hover:bg-red-600 transition-all"
        >
          Remove Stamp
        </button>
      ) : (
        <button
          onClick={onUploadStamp}
          className="px-3 py-1.5 rounded text-xs font-semibold bg-[#0b2e59] hover:bg-[#0d3a70] transition-all"
        >
          Upload Stamp
        </button>
      )}

      <div className="h-8 w-px bg-gray-600 mx-1" />

      {hasLetterhead ? (
        <button
          onClick={onClearLetterhead}
          className="px-3 py-1.5 rounded text-xs font-semibold bg-red-700 hover:bg-red-600 transition-all"
        >
          Remove Letterhead
        </button>
      ) : (
        <button
          onClick={onUploadLetterhead}
          className="px-3 py-1.5 rounded text-xs font-semibold bg-teal-700 hover:bg-teal-600 transition-all"
        >
          Upload Letterhead BG
        </button>
      )}

      <button
        onClick={onAddRow}
        className="px-3 py-1.5 rounded text-xs font-semibold bg-blue-700 hover:bg-blue-600 transition-all"
      >
        + Add Line Item
      </button>

      <button
        onClick={() => window.print()}
        className="px-4 py-1.5 rounded text-xs font-semibold bg-green-700 hover:bg-green-600 transition-all ml-auto"
      >
        Print / Save PDF
      </button>
    </div>
  );
}
