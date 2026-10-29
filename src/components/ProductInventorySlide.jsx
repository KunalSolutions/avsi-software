import {
  Package,
  Boxes,
  ClipboardList,
  AlertTriangle,
  Search,
  ArrowUpRight,
  CheckCircle2,
  Warehouse,
  PackagePlus,
  BellRing,
  Plus,
} from "lucide-react";

import ERPHeader from "./erp/ERPHeader";
import ERPBenefits from "./erp/ERPBenefits";
import ERPDashboardLayout from "./erp/ERPDashboardLayout";

const inventoryFeatures = [
  {
    icon: PackagePlus,
    title: "Create & Manage Products",
    description:
      "Add new products, update product details, and delete products when required.",
  },
  {
    icon: BellRing,
    title: "Low-Stock Alerts",
    description:
      "Identify products below their minimum stock level and get notification.",
  },
  {
    icon: Boxes,
    title: "Stock Quantity Tracking",
    description:
      "View available product quantities and identify low-stock or out-of-stock items.",
  },
  {
    icon: Search,
    title: "Quick Product Search",
    description:
      "Find product information quickly using available product search options.",
  },
  {
    icon: ClipboardList,
    title: "Organized Product Records",
    description:
      "Maintain product codes, categories, prices, and other important product details.",
  },
  {
    icon: Warehouse,
    title: "Better Inventory Control",
    description:
      "Improve inventory visibility and make stock management more organized.",
  },
];

function InventoryPreview() {
  const products = [
    { name: "CCTV Camera", code: "PRD-1001", qty: 48, status: "In Stock" },
    { name: "Network Switch", code: "PRD-1002", qty: 24, status: "In Stock" },
    { name: "HDMI Cable", code: "PRD-1003", qty: 5, status: "Low Stock" },
    { name: "Access Point", code: "PRD-1004", qty: 16, status: "In Stock" },
  ];

  const stats = [
    { label: "Total Products", value: "324", icon: Package },
    { label: "In Stock", value: "287", icon: CheckCircle2 },
    { label: "Low Stock", value: "12", icon: AlertTriangle },
  ];

  return (
  <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_12px_35px_-20px_rgba(35,36,102,0.3)]">
    <div className="space-y-4 p-3 sm:p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-bold text-slate-900 sm:text-lg">
            Inventory Overview
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            Manage products and monitor stock levels
          </p>
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F1F1FA] text-[#232466]">
          <Package size={20} />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {stats.map((item, index) => {
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
            <h3 className="text-sm font-bold text-slate-900">Product List</h3>
            <p className="mt-1 text-[10px] text-slate-500">
              Recently added products
            </p>
          </div>
          <span className="rounded-lg bg-[#F1F1FA] px-2.5 py-1.5 text-[10px] font-semibold text-[#232466]">
            {products.length} Products
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[330px] text-left text-xs">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-3 py-3 font-medium sm:px-4">Product</th>
                <th className="px-3 py-3 font-medium">Code</th>
                <th className="px-3 py-3 font-medium">Qty.</th>
                <th className="px-3 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {products.map((product) => (
                <tr key={product.code}>
                  <td className="whitespace-nowrap px-3 py-3 font-semibold text-slate-800 sm:px-4">
                    {product.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 text-slate-500">
                    {product.code}
                  </td>
                  <td className="px-3 py-3 font-medium text-slate-700">
                    {product.qty}
                  </td>
                  <td className="px-3 py-3">
                    <span
                      className={`whitespace-nowrap rounded-full px-2 py-1 text-[9px] font-semibold ${
                        product.status === "In Stock"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-orange-50 text-orange-700"
                      }`}
                    >
                      {product.status}
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
          <Boxes size={18} />
        </div>
        <div>
          <h3 className="text-xs font-bold text-[#232466]">
            Better Inventory Control
          </h3>
          <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
            Track stock quantities, identify low-stock items, and keep product
            records organized.
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

export default function ProductInventorySlide() {
  return (
  <section className="h-screen min-h-0 overflow-y-auto bg-white px-4 py-4 sm:px-6 lg:overflow-hidden lg:px-8 lg:py-4">
    <div className="mx-auto flex min-h-full w-full max-w-[1500px] flex-col">
      <ERPHeader title="Product & Inventory Management" />

      <ERPDashboardLayout dashboard={<InventoryPreview />}>
        <ERPBenefits
          heading="Organize Products."
          highlight="Control Inventory."
          description="Manage product records and keep inventory information easy to access."
          benefits={inventoryFeatures}
        />
      </ERPDashboardLayout>

    </div>
  </section>
);
}