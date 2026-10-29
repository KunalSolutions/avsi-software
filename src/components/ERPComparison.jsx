import {
  LayoutDashboard, Users, Package, Receipt, ClipboardList,
  ChartNoAxesCombined, FileSpreadsheet, AlertCircle, ArrowRight,
  MessageSquare, Video, Mail, FolderOpen, FileText, CalendarDays,
  CheckCircle2, Settings, Search, TrendingUp, CircleDollarSign,
} from "lucide-react";

const tools = [
  ["Excel", "Spreadsheets", "X", "bg-emerald-600"],
  ["WhatsApp", "Team chats", "W", "bg-green-600"],
  ["Zoom", "Meetings", "Z", "bg-blue-600"],
  ["Tally", "Accounting", "T", "bg-sky-700"],
  ["Gmail", "Email", "M", "bg-rose-600"],
  ["Google Drive", "File storage", "D", "bg-amber-500"],
  ["Word", "Documents", "W", "bg-blue-800"],
  ["PowerPoint", "Presentations", "P", "bg-orange-600"],
  ["Google Sheets", "Reports", "S", "bg-green-700"],
  ["Outlook", "Communication", "O", "bg-blue-700"],
  ["PDF Files", "Documents", "PDF", "bg-red-600"],
  ["Paper Records", "Manual work", "DOC", "bg-slate-600"],
];

const modules = [
  [LayoutDashboard, "Dashboard"],
  [Users, "HR & Employees"],
  [Package, "Inventory"],
  [Receipt, "Finance"],
  [ClipboardList, "Projects & Tasks"],
  [ChartNoAxesCombined, "Reports & Analytics"],
];

const challenges = [
  "Scattered business data", "Repeated manual entry",
  "Missed sales follow-ups", "Duplicate file versions",
  "Poor team coordination", "Delayed business reports",
  "Inventory mismatches", "Payment tracking delays",
  "Manual attendance & payroll", "Disconnected workflows",
  "Scattered quotations", "Poor management visibility",
];

function Panel({ erp = false }) {
  return (
    <div className={`flex h-full min-h-0 overflow-hidden rounded-xl border ${
      erp ? "border-slate-700 bg-[#111827]" : "border-slate-200 bg-[#F6F7FB]"
    }`}>
      {erp && (
        <aside className="flex w-8 shrink-0 flex-col items-center gap-3 bg-[#1B2232] py-3 sm:w-10 sm:gap-4">
          <span className="flex h-6 w-6 items-center justify-center rounded bg-[#EF5622] text-[10px] font-black text-white">A</span>
          {modules.map(([Icon, name], i) => (
            <div key={name} title={name} className={`rounded p-1.5 ${i === 0 ? "bg-[#232466] text-white" : "text-slate-400"}`}>
              <Icon size={13} />
            </div>
          ))}
          <Settings size={13} className="mt-auto text-slate-500" />
        </aside>
      )}

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden p-2 sm:p-3">
        <header className={`flex shrink-0 items-center justify-between gap-2 border-b pb-2 ${
          erp ? "border-white/10" : "border-slate-200"
        }`}>
          <div className="min-w-0">
            <p className={`text-[8px] font-semibold uppercase tracking-wider sm:text-[9px] ${erp ? "text-slate-500" : "text-slate-400"}`}>
              {erp ? "AVSI BUSINESS WORKSPACE" : "EVERYDAY BUSINESS TOOLS"}
            </p>
            <h3 className={`mt-1 truncate text-xs font-bold sm:text-base ${erp ? "text-white" : "text-slate-800"}`}>
              {erp ? "Business Dashboard" : "Too Many Tools. No Unified System."}
            </h3>
            <p className={`mt-1 text-[8px] sm:text-[10px] ${erp ? "text-slate-400" : "text-slate-500"}`}>
              {erp ? "Connected data · Centralized workflows" : "Different apps, files and manual processes"}
            </p>
          </div>
          {erp ? (
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EF5622] text-[9px] font-bold text-white">A</div>
          ) : (
            <FolderOpen size={20} className="shrink-0 text-amber-600" />
          )}
        </header>

        {erp ? (
          <>
            <div className="mt-2 grid shrink-0 grid-cols-3 gap-1.5 sm:mt-3 sm:gap-2">
              {[
                [CircleDollarSign, "Sales", "₹8.5L"],
                [TrendingUp, "Receivables", "₹2.4L"],
                [ClipboardList, "Projects", "24"],
              ].map(([Icon, label, value]) => (
                <div key={label} className="min-w-0 rounded-lg border border-white/10 bg-white/5 p-1.5 sm:p-2">
                  <Icon size={12} className="text-[#EF5622]" />
                  <p className="mt-1 truncate text-[8px] text-slate-400 sm:text-[10px]">{label}</p>
                  <p className="mt-1 text-xs font-bold text-white sm:text-base">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-2 grid min-h-0 flex-1 grid-cols-5 gap-1.5 sm:mt-3 sm:gap-2">
              <div className="col-span-3 flex min-h-0 flex-col rounded-lg border border-white/10 bg-white/5 p-2 sm:p-3">
                <p className="text-[9px] font-bold text-slate-200 sm:text-[11px]">Business Overview</p>
                <p className="mt-1 text-[8px] text-slate-500">Illustrative dashboard data</p>
                <div className="mt-2 flex min-h-0 flex-1 items-end gap-1 border-b border-l border-white/10 px-1">
                  {[35, 48, 42, 62, 54, 76, 68, 92, 75, 100].map((h, i) => (
                    <div key={i} style={{ height: `${h}%` }} className={`flex-1 rounded-t-sm ${i === 9 ? "bg-[#EF5622]" : "bg-indigo-500/80"}`} />
                  ))}
                </div>
                <div className="mt-2 space-y-2">
                  {["Sales & orders", "Payments tracking", "Project progress"].map(label => (
                    <div key={label} className="flex items-center gap-1.5 text-[8px] text-slate-300 sm:text-[9px]">
                      <CheckCircle2 size={11} className="text-emerald-400" />{label}
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-2 overflow-hidden rounded-lg border border-white/10 bg-white/5 p-2 sm:p-3">
                <p className="text-[9px] font-bold text-slate-200 sm:text-[11px]">ERP Modules</p>
                <div className="mt-3 space-y-3">
                  {modules.map(([Icon, name]) => (
                    <div key={name} className="flex min-w-0 items-center gap-1.5">
                      <Icon size={12} className="shrink-0 text-[#EF5622]" />
                      <span className="truncate text-[8px] text-slate-300 sm:text-[10px]">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-2 grid shrink-0 grid-cols-3 gap-1.5 sm:mt-3 sm:gap-2">
              {["Finance connected", "Operations organized", "Reports centralized"].map(label => (
                <div key={label} className="flex min-w-0 items-center gap-1 rounded-md border border-white/10 p-1.5 sm:p-2">
                  <CheckCircle2 size={11} className="shrink-0 text-emerald-400" />
                  <span className="truncate text-[7px] text-slate-300 sm:text-[9px]">{label}</span>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="mt-2 grid shrink-0 grid-cols-3 gap-1.5 sm:gap-2">
              {[["Different tools", "12+"], ["File versions", "12+"], ["Manual updates", "Daily"]].map(([label, value]) => (
                <div key={label} className="rounded-lg border border-slate-200 bg-white p-1.5 sm:p-2">
                  <p className="truncate text-[8px] text-slate-500 sm:text-[10px]">{label}</p>
                  <p className="mt-1 text-xs font-bold text-slate-800 sm:text-base">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-2 min-h-0 flex-1 overflow-hidden rounded-lg border border-slate-200 bg-white p-2 sm:mt-3 sm:p-3">
              <div className="mb-2 flex items-center justify-between gap-1">
                <p className="text-[9px] font-bold uppercase tracking-wider text-slate-600 sm:text-[10px]">Apps & Work Tools</p>
                <Search size={12} className="text-slate-400" />
              </div>
              <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-6 sm:gap-2">
                {tools.map(([name, category, short, color]) => (
                  <div key={name} className="flex min-w-0 flex-col items-center justify-center rounded-lg border border-slate-100 bg-slate-50 px-1 py-2 text-center sm:py-3">
                    <div className={`flex h-6 w-6 items-center justify-center rounded-md ${color} text-[7px] font-black text-white sm:h-8 sm:w-8 sm:text-[9px]`}>{short}</div>
                    <p className="mt-1.5 w-full truncate text-[8px] font-bold text-slate-700 sm:text-[10px]">{name}</p>
                    <p className="mt-0.5 w-full truncate text-[7px] text-slate-400 sm:text-[9px]">{category}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-2 shrink-0 rounded-lg border border-rose-100 bg-rose-50/60 p-2">
              <div className="mb-1.5 flex items-center gap-1.5">
                <AlertCircle size={11} className="text-rose-500" />
                <p className="text-[8px] font-bold uppercase tracking-wider text-slate-600 sm:text-[9px]">Common Business Problems</p>
              </div>
              <div className="grid grid-cols-3 gap-x-2 gap-y-1.5">
                {challenges.map(label => (
                  <div key={label} className="flex min-w-0 items-start gap-1">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                    <span className="text-[7px] leading-tight text-slate-600 sm:text-[9px]">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function ERPComparison() {
  return (
    <section className="mx-auto flex aspect-[16/9] w-full max-w-[1440px] flex-col overflow-hidden bg-white font-sans text-[#232466]">
      <div className="flex h-full min-h-0 flex-col p-3 sm:p-5 lg:p-7">
        <header className="flex shrink-0 items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="min-w-0">
              <h1 className="mt-0.5 text-xl font-bold tracking-tight sm:text-3xl lg:text-4xl">ERP Benefits</h1>
              <p className="mt-1 text-[9px] text-slate-500 sm:text-sm">From scattered tools to one connected business platform.</p>
            </div>
          </div>
          <img src="https://avsitechnologies.in/AVSI_LOGO.png" alt="AVSI Technologies" className="w-20 shrink-0 object-contain sm:w-28 lg:w-32" />
        </header>

        <div className="mt-3 h-px shrink-0 bg-slate-200 sm:mt-4" />

        <div className="mt-2 grid min-h-0 flex-1 grid-cols-2 gap-2 sm:mt-3 sm:gap-4">
          <div className="flex min-h-0 flex-col">
            <div className="mb-1.5 flex shrink-0 items-center justify-between gap-1 sm:mb-2">
              <div>
                <h2 className="text-[10px] font-bold tracking-wide text-slate-700 sm:text-sm">WITHOUT ERP</h2>
                <p className="mt-0.5 text-[8px] text-slate-400 sm:text-[10px]">Separate apps · Manual processes</p>
              </div>
              <span className="rounded-full bg-amber-50 px-2 py-1 text-[7px] font-bold text-amber-700 sm:text-[9px]">FRAGMENTED</span>
            </div>
            <div className="min-h-0 flex-1"><Panel /></div>
          </div>

          <div className="flex min-h-0 flex-col">
            <div className="mb-1.5 flex shrink-0 items-center justify-between gap-1 sm:mb-2">
              <div>
                <h2 className="text-[10px] font-bold tracking-wide text-[#232466] sm:text-sm">WITH AVSI ERP</h2>
                <p className="mt-0.5 text-[8px] text-slate-400 sm:text-[10px]">Centralized data · Connected workflows</p>
              </div>
              <span className="rounded-full bg-emerald-50 px-2 py-1 text-[7px] font-bold text-emerald-700 sm:text-[9px]">CONNECTED</span>
            </div>
            <div className="min-h-0 flex-1"><Panel erp /></div>
          </div>
        </div>

      </div>
    </section>
  );
}