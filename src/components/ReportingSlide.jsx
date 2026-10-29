import {
  FileText,
  ShoppingCart,
  ClipboardList,
  Receipt,
  Truck,
  Wrench,
  Package,
  Users,
  BarChart3,
  Wallet,
  CalendarCheck,
} from "lucide-react";

import ERPHeader from "./erp/ERPHeader";
import ERPBenefits from "./erp/ERPBenefits";
import ERPDashboardLayout from "./erp/ERPDashboardLayout";

const reportStats = [
  { label: "Total Reports", value: "24", icon: FileText },
  { label: "Sales Reports", value: "08", icon: BarChart3 },
  { label: "Purchase Reports", value: "06", icon: ShoppingCart },
];

const reports = [
  { name: "Purchase Orders", code: "PO Reports", icon: ShoppingCart },
  { name: "Bill of Quantities", code: "BOQ Reports", icon: ClipboardList },
  { name: "Quotations", code: "Sales Reports", icon: FileText },
  { name: "Invoices & Billing", code: "Invoice Reports", icon: Receipt },
  { name: "Delivery Challans", code: "Delivery Reports", icon: Truck },
  { name: "Service Reports", code: "Service Reports", icon: Wrench },
  { name: "Inventory & Products", code: "Stock Reports", icon: Package },
  { name: "Customers & Vendors", code: "Party Reports", icon: Users },
  { name: "Sales & Purchases", code: "Business Reports", icon: BarChart3 },
  { name: "Payments & Receivables", code: "Finance Reports", icon: Wallet },
  { name: "Employee & Attendance", code: "HR Reports", icon: CalendarCheck },
];

const reportingFeatures = [
  {
    icon: FileText,
    title: "All Reports in One Place",
    description:
      "Access PO, BOQ, quotation, invoice, delivery challan, and service reports.",
  },
  {
    icon: BarChart3,
    title: "Sales & Purchase Reports",
    description:
      "Review sales activity, purchase records, and business transactions.",
  },
  {
    icon: Package,
    title: "Inventory Reports",
    description:
      "Review product records, stock quantities, and inventory movement.",
  },
  {
    icon: Wallet,
    title: "Financial Reports",
    description:
      "Track invoices, payments, outstanding balances, and receivables.",
  },
  {
    icon: Users,
    title: "Customer & Vendor Reports",
    description:
      "Access organized customer, supplier, and transaction information.",
  },
  {
    icon: CalendarCheck,
    title: "Employee Reports",
    description:
      "Review employee records, attendance, and workforce activity.",
  },
];

function ReportingPreview() {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_12px_35px_-20px_rgba(35,36,102,0.3)]">
      <div className="space-y-4 p-3 sm:p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-bold text-slate-900 sm:text-lg">
              Reports Overview
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              Business reports across your ERP system
            </p>
          </div>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F1F1FA] text-[#232466]">
            <BarChart3 size={20} />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {reportStats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="min-w-0 rounded-xl border border-slate-200 p-3"
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                    index === 1
                      ? "bg-orange-50 text-[#EF5622]"
                      : "bg-[#F1F1FA] text-[#232466]"
                  }`}
                >
                  <Icon size={16} />
                </div>
                <p className="mt-3 text-lg font-bold text-slate-900 sm:text-xl">
                  {item.value}
                </p>
                <p className="mt-1 text-[10px] leading-tight text-slate-500 sm:text-xs">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200">
          <div className="border-b border-slate-100 px-3 py-3 sm:px-4">
            <h3 className="text-sm font-bold text-slate-900">
              Available Reports
            </h3>
            <p className="mt-1 text-[10px] text-slate-500">
              Reports across business operations
            </p>
          </div>

          <div className="grid grid-cols-1 divide-y divide-slate-100 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
            {reports.map((report, index) => {
              const Icon = report.icon;

              return (
                <div
                  key={report.name}
                  className={`flex min-w-0 items-center gap-2.5 p-3 ${
                    index > 1 ? "sm:border-t sm:border-slate-100" : ""
                  }`}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F1F1FA] text-[#232466]">
                    <Icon size={17} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-slate-800">
                      {report.name}
                    </p>
                    <p className="mt-0.5 text-[10px] text-slate-500">
                      {report.code}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-xl bg-[#F1F1FA] p-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#232466]">
            <FileText size={18} />
          </div>
          <div>
            <h3 className="text-xs font-bold text-[#232466]">
              Complete Business Visibility
            </h3>
            <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
              Keep important business records accessible for faster reviews
              and informed decisions.
            </p>
          </div>
        </div>

        <p className="text-center text-[10px] text-slate-400">
          Illustrative dashboard · Report categories
        </p>
      </div>
    </div>
  );
}

export default function ReportingSlide() {
  return (
    <section className="h-screen min-h-0 overflow-y-auto bg-white px-4 py-4 sm:px-6 lg:overflow-hidden lg:px-8 lg:py-4">
      <div className="mx-auto flex min-h-full w-full max-w-[1500px] flex-col">
        <ERPHeader title="Reports & Analytics" />

        <ERPDashboardLayout dashboard={<ReportingPreview />}>
          <ERPBenefits
            heading="Access Every Report."
            highlight="Understand Your Business."
            description="View important reports across sales, purchases, inventory, finance, projects, and employee operations in one organized system."
            benefits={reportingFeatures}
          />
        </ERPDashboardLayout>
      </div>
    </section>
  );
}