import {
  FileText,
  Clock3,
  CheckCircle2,
  IndianRupee,
  ShoppingCart,
  TrendingUp,
  ArrowUpRight,
  Users,
  Target,
  Receipt,
} from "lucide-react";

import ERPHeader from "./erp/ERPHeader";
import ERPBenefits from "./erp/ERPBenefits";
import ERPDashboardLayout from "./erp/ERPDashboardLayout";

const quotationStats = [
  { label: "Total Sales", value: "₹12.8L", icon: IndianRupee },
  { label: "Total Quotations", value: "156", icon: FileText },
  { label: "Pending Follow-ups", value: "24", icon: Clock3 },
  { label: "Converted Sales", value: "98", icon: CheckCircle2 },
];

const quotations = [
  {
    number: "QUO-1048",
    customer: "Vertex Solutions",
    salesperson: "Rahul Sharma",
    amount: "₹1,25,000",
    status: "Converted",
  },
  {
    number: "QUO-1047",
    customer: "Prime Technologies",
    salesperson: "Amit Patel",
    amount: "₹85,500",
    status: "Follow-up",
  },
  {
    number: "QUO-1046",
    customer: "Metro Systems",
    salesperson: "Rahul Sharma",
    amount: "₹2,10,000",
    status: "Sent",
  },
  {
    number: "QUO-1045",
    customer: "Global Enterprises",
    salesperson: "Neha Shah",
    amount: "₹64,800",
    status: "Pending",
  },
];

const quotationFeatures = [
  {
    icon: FileText,
    title: "Create & Manage Quotations",
    description:
      "Prepare quotations with customer details, products, quantities, prices, and taxes.",
  },
  {
    icon: TrendingUp,
    title: "Monitor Sales Performance",
    description:
      "Track sales totals, quotation conversions, and business opportunities.",
  },
  {
    icon: Clock3,
    title: "Track Follow-ups",
    description:
      "Identify pending quotations and keep customer follow-ups organized.",
  },
  {
    icon: ShoppingCart,
    title: "Convert Quotations into Sales",
    description:
      "Track accepted quotations and move sales opportunities forward.",
  },
  {
    icon: Users,
    title: "Manage Customer Opportunities",
    description:
      "View customer enquiries and maintain organized sales communication.",
  },
  {
    icon: Target,
    title: "Track Salesperson Activity",
    description:
      "Review salesperson quotations, conversions, and sales contributions.",
  },
];

function QuotationPreview() {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_12px_35px_-20px_rgba(35,36,102,0.3)]">
      <div className="space-y-4 p-3 sm:p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-bold text-slate-900 sm:text-lg">
              Sales Performance
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              Track sales, quotations, and follow-ups
            </p>
          </div>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F1F1FA] text-[#232466]">
            <TrendingUp size={20} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
          {quotationStats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="min-w-0 rounded-xl border border-slate-200 bg-white p-3"
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                    index === 2
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
          <div className="flex items-center justify-between gap-2 border-b border-slate-100 px-3 py-3 sm:px-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Sales & Quotations
              </h3>
              <p className="mt-1 text-[10px] text-slate-500">
                Customer offers and salesperson activity
              </p>
            </div>
            <span className="rounded-lg bg-[#F1F1FA] px-2.5 py-1.5 text-[10px] font-semibold text-[#232466]">
              {quotations.length} Records
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[410px] text-left text-xs">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-3 py-3 font-medium sm:px-4">
                    Quotation
                  </th>
                  <th className="px-3 py-3 font-medium">Customer</th>
                  <th className="px-3 py-3 font-medium">Salesperson</th>
                  <th className="px-3 py-3 font-medium">Amount</th>
                  <th className="px-3 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {quotations.map((quotation) => (
                  <tr key={quotation.number}>
                    <td className="whitespace-nowrap px-3 py-3 sm:px-4">
                      <p className="font-semibold text-slate-800">
                        {quotation.number}
                      </p>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 text-slate-600">
                      {quotation.customer}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 text-slate-600">
                      {quotation.salesperson}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 font-semibold text-slate-800">
                      {quotation.amount}
                    </td>
                    <td className="px-3 py-3">
                      <span
                        className={`whitespace-nowrap rounded-full px-2 py-1 text-[9px] font-semibold ${
                          quotation.status === "Converted"
                            ? "bg-emerald-50 text-emerald-700"
                            : quotation.status === "Follow-up"
                              ? "bg-orange-50 text-orange-700"
                              : "bg-[#F1F1FA] text-[#232466]"
                        }`}
                      >
                        {quotation.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-xl bg-[#F1F1FA] p-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#232466]">
            <Target size={18} />
          </div>
          <div>
            <h3 className="text-xs font-bold text-[#232466]">
              Better Sales Tracking
            </h3>
            <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
              Monitor salesperson activity, follow up on quotations, and
              identify opportunities to improve sales conversions.
            </p>
          </div>
        </div>

        <p className="text-center text-[10px] text-slate-400">
          Illustrative dashboard · Sample figures
        </p>
      </div>
    </div>
  );
}

export default function SalesQuotationSlide() {
  return (
    <section className="h-screen min-h-0 overflow-y-auto bg-white px-4 py-4 sm:px-6 lg:overflow-hidden lg:px-8 lg:py-4">
      <div className="mx-auto flex min-h-full w-full max-w-[1500px] flex-col">
        <ERPHeader title="Sales & Quotation Management" />

        <ERPDashboardLayout dashboard={<QuotationPreview />}>
          <ERPBenefits
            heading="Manage Quotations."
            highlight="Win More Business."
            description="Prepare customer quotations, track approvals, and convert accepted offers into sales orders more efficiently."
            benefits={quotationFeatures}
          />
        </ERPDashboardLayout>
      </div>
    </section>
  );
}