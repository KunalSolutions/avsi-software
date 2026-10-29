
import {
  Users,
  UserPlus,
  Contact,
  Search,
  FileText,
  Wallet,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  ChevronDown,
  Bell,
  CalendarDays,
  LockKeyhole,
} from "lucide-react";

import ERPHeader from "./erp/ERPHeader";
import ERPBenefits from "./erp/ERPBenefits";
import ERPDashboardLayout from "./erp/ERPDashboardLayout";

const customerStats = [
  { label: "Total Customers", value: "248", icon: Users },
  { label: "Active Customers", value: "216", icon: CheckCircle2 },
  { label: "New This Month", value: "18", icon: UserPlus },
  { label: "Pending Payments", value: "12", icon: Wallet },
];

const customers = [
  {
    name: "Vertex Solutions",
    code: "CUS-1001",
    contact: "Rajesh Sharma",
    phone: "+91 98765 43210",
    status: "Active",
  },
  {
    name: "Prime Technologies",
    code: "CUS-1002",
    contact: "Amit Patel",
    phone: "+91 98765 12345",
    status: "Active",
  },
  {
    name: "Metro Systems",
    code: "CUS-1003",
    contact: "Sneha Mehta",
    phone: "+91 98765 67890",
    status: "Inactive",
  },
  {
    name: "Global Enterprises",
    code: "CUS-1004",
    contact: "Vikas Shah",
    phone: "+91 98765 98765",
    status: "Active",
  },
];

const customerFeatures = [
  {
    icon: UserPlus,
    title: "Create & Manage Customers",
    description:
      "Add new customers, update their details, view records, and delete records when required.",
  },
  {
    icon: Contact,
    title: "Centralized Customer Details",
    description:
      "Keep customer names, contact information, addresses, and business details organized.",
  },
  {
    icon: Search,
    title: "Quick Customer Search",
    description:
      "Find customer records quickly using available search options.",
  },
  {
    icon: FileText,
    title: "Customer Transaction History",
    description:
      "Review related quotations, sales orders, invoices, and delivery records.",
  },
  {
    icon: Wallet,
    title: "Payment Tracking",
    description:
      "View customer payment status and identify outstanding payments.",
  },
  {
    icon: Users,
    title: "Customer Relationship Management",
    description:
      "Maintain organized customer records to support follow-ups and stronger business relationships.",
  },
];

function CustomerPreview() {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_12px_35px_-20px_rgba(35,36,102,0.3)]">

      <div className="min-w-0 p-3 sm:p-4">
        <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F1F1FA] text-[#232466]">
              <Users size={16} />
            </div>
            <div>
              <h3 className="text-xs font-bold text-slate-900 sm:text-sm">
                Customer Management
              </h3>
              <p className="text-[8px] text-slate-500 sm:text-[9px]">
                Manage your customer relationships
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 text-slate-600">
              <Bell size={13} />
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full border border-white bg-[#EF5622]" />
            </div>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#232466] text-[9px] font-bold text-white">
              A
            </div>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between gap-2">
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Customers
            </h3>
            <p className="mt-0.5 text-[8px] text-slate-500">
              View and manage customer records.
            </p>
          </div>
          <button
            type="button"
            className="flex shrink-0 items-center gap-1 rounded-lg bg-[#232466] px-2.5 py-2 text-[8px] font-semibold text-white"
          >
            <UserPlus size={11} />
            Add Customer
          </button>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2 xl:grid-cols-4">
          {customerStats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="min-w-0 rounded-xl border border-slate-200/80 p-2.5"
              >
                <div className="flex items-center justify-between gap-1">
                  <span className="text-[8px] font-medium text-slate-500 sm:text-[9px]">
                    {item.label}
                  </span>
                  <Icon
                    size={13}
                    className={
                      index === 3 ? "text-[#EF5622]" : "text-[#232466]"
                    }
                  />
                </div>
                <p className="mt-2 text-lg font-bold text-slate-900">
                  {item.value}
                </p>
                <p className="mt-0.5 text-[8px] text-slate-400">
                  {index === 3 ? "Requires attention" : "Customer records"}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-3 overflow-hidden rounded-xl border border-slate-200">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 px-3 py-2.5">
            <div>
              <h4 className="text-[10px] font-bold text-slate-800">
                Customer Directory
              </h4>
              <p className="mt-0.5 text-[8px] text-slate-500">
                Customer contact information
              </p>
            </div>

            <div className="flex items-center gap-1 rounded-md border border-slate-200 px-2 py-1.5 text-[8px] text-slate-400">
              <Search size={10} />
              Search customers
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[390px] text-left text-[8px] sm:text-[9px]">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-3 py-2 font-medium">Customer</th>
                  <th className="px-3 py-2 font-medium">Contact Person</th>
                  <th className="px-3 py-2 font-medium">Phone</th>
                  <th className="px-3 py-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {customers.map((customer) => (
                  <tr key={customer.code}>
                    <td className="whitespace-nowrap px-3 py-2">
                      <p className="font-semibold text-slate-700">
                        {customer.name}
                      </p>
                      <p className="mt-0.5 text-[8px] text-slate-400">
                        {customer.code}
                      </p>
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 text-slate-600">
                      {customer.contact}
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 text-slate-500">
                      {customer.phone}
                    </td>
                    <td className="px-3 py-2">
                      <span
                        className={`whitespace-nowrap rounded-full px-2 py-1 text-[8px] font-semibold ${
                          customer.status === "Active"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {customer.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-3 rounded-lg border border-indigo-100 bg-[#F1F1FA] p-2.5">
          <div className="flex items-start gap-2">
            <Contact size={15} className="mt-0.5 shrink-0 text-[#232466]" />
            <div>
              <p className="text-[10px] font-bold text-[#232466]">
                Centralized Customer Information
              </p>
              <p className="mt-0.5 text-[9px] leading-4 text-slate-600">
                Keep customer contacts and business records organized in one place.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-2 text-center text-[8px] text-slate-400">
          Illustrative dashboard · Sample figures and records
        </p>
      </div>
    </div>
  );
}

export default function CustomerManagementSlide() {
  return (
    <section className="h-screen min-h-0 overflow-y-auto bg-white px-4 py-4 sm:px-6 lg:overflow-hidden lg:px-8 lg:py-4">
      <div className="mx-auto flex min-h-full w-full max-w-[1500px] flex-col">
        <ERPHeader title="Customer Management" />

        <ERPDashboardLayout dashboard={<CustomerPreview />}>
          <ERPBenefits
            heading="Manage Customers."
            highlight="Build Better Relationships."
            description="Keep customer records organized, access contact information quickly, and track related business transactions."
            benefits={customerFeatures}
          />
        </ERPDashboardLayout>
      </div>
    </section>
  );
}
