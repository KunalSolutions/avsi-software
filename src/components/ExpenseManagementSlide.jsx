import {
  Wallet,
  Receipt,
  IndianRupee,
  Users,
  CheckCircle2,
  Clock3,
  FileText,
  TrendingDown,
} from "lucide-react";

import ERPHeader from "./erp/ERPHeader";
import ERPBenefits from "./erp/ERPBenefits";
import ERPDashboardLayout from "./erp/ERPDashboardLayout";

const expenses = [
  {
    title: "Travel & Fuel",
    employee: "Rahul Sharma",
    date: "28 Oct 2026",
    amount: "₹2,450",
    status: "Pending",
  },
  {
    title: "Installation Materials",
    employee: "Amit Patel",
    date: "27 Oct 2026",
    amount: "₹8,200",
    status: "Approved",
  },
  {
    title: "Client Meeting",
    employee: "Neha Shah",
    date: "26 Oct 2026",
    amount: "₹1,600",
    status: "Approved",
  },
];

const benefits = [
  {
    icon: Receipt,
    title: "Expense Submission",
    description: "Record employee expenses and attach bills or receipts.",
  },
  {
    icon: CheckCircle2,
    title: "Approval Workflow",
    description: "Review, approve, or reject employee expense claims.",
  },
  {
    icon: IndianRupee,
    title: "Expense Tracking",
    description: "Monitor company spending by category and employee.",
  },
  {
    icon: FileText,
    title: "Expense Reports",
    description: "Generate organized reports for financial review.",
  },
];

function ExpenseDashboard() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="space-y-4 p-3 sm:p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F1F1FA] text-[#232466]">
            <Wallet size={21} />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900">Expense Management</h2>
            <p className="text-xs text-slate-500">Company spending and employee claims</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Total Expenses", value: "₹84,500" },
            { label: "Pending Approval", value: "₹12,300" },
            { label: "Approved Claims", value: "32" },
            { label: "Pending Claims", value: "06" },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-slate-200 p-3">
              <p className="text-lg font-bold text-[#232466]">{item.value}</p>
              <p className="mt-1 text-[10px] text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200">
          <div className="flex items-center justify-between border-b border-slate-100 p-3">
            <h3 className="text-sm font-bold text-slate-800">Recent Expense Claims</h3>
            <Receipt size={17} className="text-[#232466]" />
          </div>
          {expenses.map((expense) => (
            <div key={expense.title} className="space-y-2 border-b border-slate-100 p-3 last:border-0">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-slate-800">{expense.title}</p>
                  <p className="mt-1 text-[10px] text-slate-500">{expense.employee}</p>
                  <p className="mt-1 text-[10px] text-slate-400">{expense.date}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-xs font-bold text-slate-900">{expense.amount}</p>
                  <span className={`mt-2 inline-block rounded-full px-2 py-1 text-[9px] font-semibold ${
                    expense.status === "Approved"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-orange-50 text-orange-700"
                  }`}>{expense.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl bg-[#F1F1FA] p-3">
          <div className="flex items-center gap-2 text-[#232466]">
            <TrendingDown size={17} />
            <p className="text-xs font-bold">Expense Control</p>
          </div>
          <p className="mt-2 text-[11px] leading-5 text-slate-600">
            Review spending, verify receipts, and approve employee claims with a clear audit trail.
          </p>
        </div>
        <p className="text-center text-[10px] text-slate-400">Illustrative dashboard · Sample data</p>
      </div>
    </div>
  );
}

export default function ExpenseManagementSlide() {
  return (
    <section className="h-screen min-h-0 overflow-y-auto bg-white px-4 py-4 sm:px-6 lg:overflow-hidden lg:px-8 lg:py-4">
      <div className="mx-auto flex min-h-full w-full max-w-[1500px] flex-col">
        <ERPHeader title="Expense & Reimbursement Management" />
        <ERPDashboardLayout dashboard={<ExpenseDashboard />}>
          <ERPBenefits
            heading="Control Costs."
            highlight="Track Every Expense."
            description="Simplify employee expense claims, approval workflows, receipt management, and company spending reports."
            benefits={benefits}
          />
        </ERPDashboardLayout>
      </div>
    </section>
  );
}