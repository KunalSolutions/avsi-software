import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Boxes,
  ChevronDown,
  Clock3,
  FileText,
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Wallet,
  Search,
  Bell,
  UserCheck,
  CalendarDays,
} from "lucide-react";

import ERPHeader from "./erp/ERPHeader";
import ERPBenefits from "./erp/ERPBenefits";
import ERPDashboardLayout from "./erp/ERPDashboardLayout";

const benefits = [
  {
    icon: Wallet,
    title: "Today's Sales",
    description: "View sales recorded for the current day.",
  },
  {
    icon: Users,
    title: "Total Customers",
    description: "See how many customers are registered in the system.",
  },
  {
    icon: FileText,
    title: "Pending Quotations",
    description: "Track quotations that need follow-up or a decision.",
  },
  {
    icon: ShoppingCart,
    title: "Sales Orders",
    description: "Monitor sales orders and their current status.",
  },
  {
    icon: Boxes,
    title: "Inventory Overview",
    description: "Check available stock and product information.",
  },
  {
    icon: BarChart3,
    title: "Sales Performance",
    description: "Review sales trends and monitor business performance.",
  },
  {
    icon: UserCheck,
    title: "Employee Attendance",
    description: "Track employee attendance, working hours, and leave status.",
  },
];


const stats = [
  { title: "Today's Sales", value: "₹1,28,500", change: "+12.8%", icon: Wallet },
  { title: "Total Customers", value: "248", change: "+8.2%", icon: Users },
  { title: "Pending Quotations", value: "18", change: "Needs follow-up", icon: FileText },
  { title: "Sales Orders", value: "36", change: "12 in progress", icon: ShoppingCart },
];

const transactions = [
  { id: "INV-1048", customer: "Vertex Solutions", amount: "₹42,500", status: "Paid" },
  { id: "INV-1047", customer: "Prime Technologies", amount: "₹28,000", status: "Pending" },
  { id: "INV-1046", customer: "Metro Systems", amount: "₹65,200", status: "Paid" },
];

const chartValues = [34, 48, 39, 65, 51, 72, 57, 84, 66, 91, 76, 100];
const chartPoints = chartValues
  .map((value, index) => `${index * 30},${100 - value * 0.85}`)
  .join(" ");

function SalesChart() {
  return (
    <div className="relative mt-2">
      <div className="absolute inset-0 flex flex-col justify-between pb-4">
        {[0, 1, 2, 3].map((item) => (
          <div key={item} className="border-t border-dashed border-slate-200" />
        ))}
      </div>

      <svg
        viewBox="0 0 330 115"
        className="relative z-10 h-20 w-full sm:h-24"
        preserveAspectRatio="none"
        role="img"
        aria-label="Illustrative monthly sales trend"
      >
        <defs>
          <linearGradient id="salesArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#EF5622" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#EF5622" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon
          points={`0,115 ${chartPoints} 330,115`}
          fill="url(#salesArea)"
        />
        <polyline
          points={chartPoints}
          fill="none"
          stroke="#EF5622"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="300" cy="15" r="4" fill="#EF5622" stroke="white" strokeWidth="2" />
      </svg>

      <div className="mt-0.5 flex justify-between text-[9px] text-slate-400">
        {["01", "05", "10", "15", "20", "25", "30"].map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
    </div>
  );
}

function StatCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="min-w-0 rounded-lg border border-slate-200/80 bg-white p-2.5">
      <div className="flex items-center justify-between gap-1.5">
        <span className="text-[10px] font-medium text-slate-500">
          {item.title}
        </span>
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#F1F1FA] text-[#232466]">
          <Icon size={13} />
        </span>
      </div>
      <div className="mt-1.5 text-lg font-bold tracking-tight text-slate-900">
        {item.value}
      </div>
      <div
        className={`mt-0.5 text-[9px] ${
          item.change.startsWith("+") ? "text-emerald-600" : "text-orange-600"
        }`}
      >
        {item.change}
      </div>
    </div>
  );
}

function AdminDashboard() {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_12px_35px_-20px_rgba(35,36,102,0.3)]">
      <div className="min-w-0 p-3 sm:p-4">
        {/* Top Navigation */}
        <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div className="flex min-w-0 items-center gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#232466] text-white">
              <LayoutDashboard size={16} />
            </div>
            <div className="min-w-0">
              <h3 className="truncate text-xs font-bold text-slate-900 sm:text-sm">
                Dashboard
              </h3>
              <p className="text-[8px] text-slate-500 sm:text-[9px]">
                Welcome back, Admin
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <div className="hidden items-center gap-1.5 rounded-lg border border-slate-200 px-2 py-1.5 sm:flex">
              <Search size={11} className="text-slate-400" />
              <span className="text-[9px] text-slate-400">
                Search anything...
              </span>
              <span className="rounded border border-slate-200 px-1 text-[8px] text-slate-400">
                /
              </span>
            </div>

            <div className="relative flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 text-slate-600">
              <Bell size={14} />
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full border border-white bg-[#EF5622]" />
            </div>

            <div className="flex items-center gap-1.5">
              <img
                src="https://i.pravatar.cc/80?img=12"
                alt="Admin profile"
                className="h-7 w-7 rounded-full border border-slate-200 object-cover"
              />
              <div className="hidden sm:block">
                <p className="text-[9px] font-bold text-slate-800">Admin</p>
                <p className="text-[8px] text-slate-400">Administrator</p>
              </div>
              <ChevronDown size={11} className="text-slate-400" />
            </div>
          </div>
        </div>

        {/* Dashboard Heading */}
        <div className="mt-3 flex items-center justify-between gap-2">
          <div>
            <h3 className="text-sm font-bold text-slate-900 sm:text-base">
              Business Overview
            </h3>
            <p className="mt-0.5 text-[9px] text-slate-500">
              Monitor your business performance in one place.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-1 rounded-lg border border-slate-200 px-2 py-1.5 text-[9px] text-slate-600">
            <CalendarDays size={11} />
            <span>This Month</span>
            <ChevronDown size={10} />
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-3 grid grid-cols-2 gap-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="min-w-0 rounded-xl border border-slate-200/80 bg-white p-2.5 sm:p-3"
              >
                <div className="flex items-center justify-between gap-1">
                  <span className="text-[9px] font-medium text-slate-500 sm:text-[10px]">
                    {item.title}
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${
                      index % 2 === 0
                        ? "bg-[#F1F1FA] text-[#232466]"
                        : "bg-[#FFF0E9] text-[#EF5622]"
                    }`}
                  >
                    <Icon size={14} />
                  </span>
                </div>
                <p className="mt-2 text-base font-bold tracking-tight text-slate-900 sm:text-lg">
                  {item.value}
                </p>
                <p
                  className={`mt-1 text-[8px] sm:text-[9px] ${
                    item.change.startsWith("+")
                      ? "text-emerald-600"
                      : "text-slate-500"
                  }`}
                >
                  {item.change.startsWith("+") && (
                    <ArrowUpRight size={10} className="mr-0.5 inline" />
                  )}
                  {item.change}
                </p>
              </div>
            );
          })}
        </div>

        {/* Analytics */}
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-[1.35fr_1fr]">
          <section className="min-w-0 rounded-xl border border-slate-200/80 p-3">
            <div className="flex items-center justify-between gap-2">
              <div>
                <h4 className="text-[10px] font-bold text-slate-800">
                  Sales Performance
                </h4>
                <p className="mt-1 text-[8px] text-slate-500">
                  Monthly revenue overview
                </p>
              </div>
              <span className="rounded-md bg-emerald-50 px-2 py-1 text-[8px] font-semibold text-emerald-700">
                +12.8%
              </span>
            </div>

            <div className="mt-2 text-lg font-bold text-slate-900">
              ₹8,42,600
            </div>
            <SalesChart />
          </section>

          <section className="min-w-0 rounded-xl border border-slate-200/80 p-3">
            <div className="flex items-center justify-between gap-2">
              <div>
                <h4 className="text-[10px] font-bold text-slate-800">
                  Inventory Overview
                </h4>
                <p className="mt-1 text-[8px] text-slate-500">
                  Current stock status
                </p>
              </div>
              <Boxes size={15} className="text-[#232466]" />
            </div>

            <div className="mt-3 flex items-end justify-between gap-2">
              <div>
                <p className="text-xl font-bold text-slate-900">324</p>
                <p className="text-[8px] text-slate-500">Total products</p>
              </div>
              <span className="rounded-md bg-orange-50 px-2 py-1 text-[8px] font-medium text-orange-600">
                12 low stock
              </span>
            </div>

            <div className="mt-3 space-y-2.5">
              {[
                {
                  label: "In stock",
                  value: "78%",
                  width: "78%",
                  color: "bg-[#232466]",
                },
                {
                  label: "Low stock",
                  value: "14%",
                  width: "14%",
                  color: "bg-[#EF5622]",
                },
                {
                  label: "Out of stock",
                  value: "8%",
                  width: "8%",
                  color: "bg-slate-300",
                },
              ].map((item) => (
                <div key={item.label}>
                  <div className="mb-1 flex justify-between text-[8px]">
                    <span className="text-slate-500">{item.label}</span>
                    <span className="font-semibold text-slate-700">
                      {item.value}
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-slate-100">
                    <div
                      className={`h-full rounded-full ${item.color}`}
                      style={{ width: item.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Recent Transactions */}
        <section className="mt-3 overflow-hidden rounded-xl border border-slate-200/80">
          <div className="flex items-center justify-between gap-2 px-3 py-2.5">
            <div>
              <h4 className="text-[10px] font-bold text-slate-800">
                Recent Transactions
              </h4>
              <p className="mt-0.5 text-[8px] text-slate-500">
                Latest customer invoices
              </p>
            </div>
            <span className="flex items-center gap-1 text-[8px] font-semibold text-[#232466]">
              View all <ArrowUpRight size={10} />
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[330px] text-left text-[8px] sm:text-[9px]">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-3 py-2 font-medium">Invoice</th>
                  <th className="px-3 py-2 font-medium">Customer</th>
                  <th className="px-3 py-2 font-medium">Amount</th>
                  <th className="px-3 py-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {transactions.map((item) => (
                  <tr key={item.id}>
                    <td className="whitespace-nowrap px-3 py-2 font-semibold text-slate-700">
                      {item.id}
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 text-slate-600">
                      {item.customer}
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 font-semibold text-slate-800">
                      {item.amount}
                    </td>
                    <td className="px-3 py-2">
                      <span
                        className={`rounded-full px-2 py-1 font-semibold ${
                          item.status === "Paid"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-orange-50 text-orange-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="mt-2 flex items-center justify-between gap-2 text-[8px] text-slate-400">
          <span>Last updated just now</span>
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            System operational
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ERPDashboardSlide() {
  return (
    <section className="h-screen min-h-0 overflow-y-auto bg-white px-4 py-4 sm:px-6 lg:overflow-hidden lg:px-8 lg:py-4">
      <div className="mx-auto flex min-h-full w-full max-w-[1500px] flex-col">
        <ERPHeader title="Admin Pannel" />

        <ERPDashboardLayout dashboard={<AdminDashboard />}>
          <ERPBenefits
            heading="Everything Important."
            highlight="All in One Place."
            description="Get a clearer view of your business and keep important activities within reach."
            benefits={benefits}
          />
        </ERPDashboardLayout>

        <footer className="mt-3 flex shrink-0 flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-2 text-[9px] text-slate-400">
          <span>AVSI Technologies · Customized ERP Solutions</span>
          <span>Business at a glance</span>
        </footer>
      </div>
    </section>
  );
}