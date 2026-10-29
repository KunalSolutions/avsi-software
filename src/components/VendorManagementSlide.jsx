import {
  Users,
  UserPlus,
  Contact,
  Search,
  FileText,
  Wallet,
  CheckCircle2,
  AlertTriangle,
  Truck,
  Package,
} from "lucide-react";

import ERPHeader from "./erp/ERPHeader";
import ERPBenefits from "./erp/ERPBenefits";
import ERPDashboardLayout from "./erp/ERPDashboardLayout";

const vendorStats = [
  { label: "Total Vendors", value: "86", icon: Users },
  { label: "Active Vendors", value: "72", icon: CheckCircle2 },
  { label: "New This Month", value: "8", icon: UserPlus },
];

const vendors = [
  {
    name: "SecureTech Supplies",
    code: "VEN-1001",
    contact: "Rahul Sharma",
    phone: "+91 98765 43210",
    status: "Active",
  },
  {
    name: "Network Solutions",
    code: "VEN-1002",
    contact: "Amit Patel",
    phone: "+91 98765 12345",
    status: "Active",
  },
  {
    name: "Digital Components",
    code: "VEN-1003",
    contact: "Sneha Mehta",
    phone: "+91 98765 67890",
    status: "Inactive",
  },
  {
    name: "Prime Electronics",
    code: "VEN-1004",
    contact: "Vikas Shah",
    phone: "+91 98765 98765",
    status: "Active",
  },
];

const vendorFeatures = [
  {
    icon: UserPlus,
    title: "Create & Manage Vendors",
    description:
      "Add new vendors, update their details, and maintain accurate supplier records.",
  },
  {
    icon: Contact,
    title: "Centralized Vendor Details",
    description:
      "Keep supplier contact information, addresses, and business details organized.",
  },
  {
    icon: Search,
    title: "Quick Vendor Search",
    description:
      "Find vendor information quickly whenever your team needs it.",
  },
  {
    icon: FileText,
    title: "Organized Purchase Records",
    description:
      "Access related purchase orders, bills, and transaction details in one place.",
  },
  {
    icon: Wallet,
    title: "Track Vendor Payments",
    description:
      "Review payment status and identify outstanding supplier payments.",
  },
  {
    icon: Truck,
    title: "Better Supplier Management",
    description:
      "Maintain organized supplier records and simplify purchasing coordination.",
  },
];

function VendorPreview() {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_12px_35px_-20px_rgba(35,36,102,0.3)]">
      <div className="space-y-4 p-3 sm:p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-bold text-slate-900 sm:text-lg">
              Vendor Overview
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              Manage suppliers and purchasing records
            </p>
          </div>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F1F1FA] text-[#232466]">
            <Truck size={20} />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {vendorStats.map((item, index) => {
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
                Vendor List
              </h3>
              <p className="mt-1 text-[10px] text-slate-500">
                Supplier directory
              </p>
            </div>
            <span className="rounded-lg bg-[#F1F1FA] px-2.5 py-1.5 text-[10px] font-semibold text-[#232466]">
              {vendors.length} Vendors
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[380px] text-left text-xs">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-3 py-3 font-medium sm:px-4">
                    Vendor
                  </th>
                  <th className="px-3 py-3 font-medium">Code</th>
                  <th className="px-3 py-3 font-medium">Contact</th>
                  <th className="px-3 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {vendors.map((vendor) => (
                  <tr key={vendor.code}>
                    <td className="whitespace-nowrap px-3 py-3 font-semibold text-slate-800 sm:px-4">
                      {vendor.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 text-slate-500">
                      {vendor.code}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <p className="font-medium text-slate-700">
                        {vendor.contact}
                      </p>
                      <p className="mt-1 text-[10px] text-slate-400">
                        {vendor.phone}
                      </p>
                    </td>
                    <td className="px-3 py-3">
                      <span
                        className={`whitespace-nowrap rounded-full px-2 py-1 text-[9px] font-semibold ${
                          vendor.status === "Active"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {vendor.status}
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
            <Package size={18} />
          </div>
          <div>
            <h3 className="text-xs font-bold text-[#232466]">
              Simplified Purchasing
            </h3>
            <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
              Keep supplier details and purchase information organized for
              smoother business operations.
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

export default function VendorManagementSlide() {
  return (
    <section className="h-screen min-h-0 overflow-y-auto bg-white px-4 py-4 sm:px-6 lg:overflow-hidden lg:px-8 lg:py-4">
      <div className="mx-auto flex min-h-full w-full max-w-[1500px] flex-col">
        <ERPHeader title="Vendor Management" />

        <ERPDashboardLayout dashboard={<VendorPreview />}>
          <ERPBenefits
            heading="Manage Vendors."
            highlight="Simplify Purchasing."
            description="Keep supplier information organized, access purchase records quickly, and track vendor payments more efficiently."
            benefits={vendorFeatures}
          />
        </ERPDashboardLayout>
      </div>
    </section>
  );
}