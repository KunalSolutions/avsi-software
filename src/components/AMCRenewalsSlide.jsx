import {
  ShieldCheck,
  CalendarDays,
  Clock3,
  Wrench,
  AlertTriangle,
  CheckCircle2,
  FileText,
} from "lucide-react";

import ERPHeader from "./erp/ERPHeader";
import ERPBenefits from "./erp/ERPBenefits";
import ERPDashboardLayout from "./erp/ERPDashboardLayout";

const contracts = [
  {
    customer: "ABC Corporate Ltd.",
    service: "Annual CCTV Maintenance",
    expiry: "05 Nov 2026",
    status: "Expiring Soon",
  },
  {
    customer: "Metro Business Park",
    service: "Access Control AMC",
    expiry: "18 Nov 2026",
    status: "Active",
  },
  {
    customer: "Prime Tech Solutions",
    service: "Network Support",
    expiry: "25 Oct 2026",
    status: "Expired",
  },
];

const benefits = [
  {
    icon: CalendarDays,
    title: "Renewal Reminders",
    description: "Track upcoming AMC, warranty, and service contract expiry dates.",
  },
  {
    icon: ShieldCheck,
    title: "Warranty Tracking",
    description: "Maintain warranty coverage and product purchase details.",
  },
  {
    icon: Wrench,
    title: "Service Contract Management",
    description: "Organize maintenance agreements and customer service coverage.",
  },
  {
    icon: Clock3,
    title: "Expiry Monitoring",
    description: "Identify expired and soon-to-expire contracts in advance.",
  },
];

function AMCDashboard() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="space-y-4 p-3 sm:p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F1F1FA] text-[#232466]">
            <ShieldCheck size={21} />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900">AMC & Warranty</h2>
            <p className="text-xs text-slate-500">Contracts and renewal tracking</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Active", value: "86", color: "text-emerald-700" },
            { label: "Expiring Soon", value: "12", color: "text-orange-600" },
            { label: "Expired", value: "04", color: "text-red-600" },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-slate-200 p-3">
              <p className={`text-xl font-bold ${item.color}`}>{item.value}</p>
              <p className="mt-1 text-[10px] text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200">
          <div className="flex items-center justify-between border-b border-slate-100 p-3">
            <h3 className="text-sm font-bold text-slate-800">Contract Register</h3>
            <FileText size={17} className="text-[#232466]" />
          </div>
          {contracts.map((item) => (
            <div key={item.customer} className="space-y-2 border-b border-slate-100 p-3 last:border-0">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-slate-800">{item.customer}</p>
                  <p className="mt-1 text-[10px] text-slate-500">{item.service}</p>
                </div>
                <span className={`shrink-0 rounded-full px-2 py-1 text-[9px] font-semibold ${
                  item.status === "Active"
                    ? "bg-emerald-50 text-emerald-700"
                    : item.status === "Expired"
                      ? "bg-red-50 text-red-700"
                      : "bg-orange-50 text-orange-700"
                }`}>{item.status}</span>
              </div>
              <p className="flex items-center gap-1 text-[10px] text-slate-500">
                <CalendarDays size={12} /> Expiry: {item.expiry}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-xl bg-[#F1F1FA] p-3">
          <div className="flex items-center gap-2 text-[#232466]">
            <AlertTriangle size={17} />
            <p className="text-xs font-bold">Renewal Follow-up</p>
          </div>
          <p className="mt-2 text-[11px] leading-5 text-slate-600">
            Identify upcoming renewals and follow up with customers before coverage expires.
          </p>
        </div>
        <p className="text-center text-[10px] text-slate-400">Illustrative dashboard · Sample data</p>
      </div>
    </div>
  );
}

export default function AMCRenewalsSlide() {
  return (
    <section className="h-screen min-h-0 overflow-y-auto bg-white px-4 py-4 sm:px-6 lg:overflow-hidden lg:px-8 lg:py-4">
      <div className="mx-auto flex min-h-full w-full max-w-[1500px] flex-col">
        <ERPHeader title="AMC & Warranty Management" />
        <ERPDashboardLayout dashboard={<AMCDashboard />}>
          <ERPBenefits
            heading="Never Miss."
            highlight="A Renewal."
            description="Track annual maintenance contracts, product warranties, and service agreement renewals from one centralized workspace."
            benefits={benefits}
          />
        </ERPDashboardLayout>
      </div>
    </section>
  );
}