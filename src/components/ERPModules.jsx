
import {
  Calculator,
  Users,
  Handshake,
  Package,
  ClipboardList,
  ChartNoAxesCombined,
} from "lucide-react";

const modules = [
  {
    icon: Calculator,
    number: "01",
    title: "Finance & Accounting",
    description:
      "Manage business expenses, invoices, payments, and financial records in one centralized system.",
    features: ["Invoices & Payments", "Expense Tracking", "Financial Records"],
  },
  {
    icon: Users,
    number: "02",
    title: "HR & Payroll",
    description:
      "Maintain employee records, track attendance and leaves, and simplify salary and payroll management.",
    features: ["Employee Records", "Attendance & Leave", "Payroll Management"],
  },
  {
    icon: Handshake,
    number: "03",
    title: "Sales & CRM",
    description:
      "Manage customer information, track leads and quotations, and monitor sales activities from inquiry to order.",
    features: ["Customer Management", "Leads & Quotations", "Sales Tracking"],
  },
  {
    icon: Package,
    number: "04",
    title: "Purchase & Inventory",
    description:
      "Manage suppliers, purchase orders, stock availability, and material movements for better resource control.",
    features: ["Supplier Management", "Purchase Orders", "Stock Control"],
  },
  {
    icon: ClipboardList,
    number: "05",
    title: "Project Management",
    description:
      "Plan projects, assign tasks, track deadlines, monitor progress, and manage project-related costs.",
    features: ["Task Assignment", "Progress Tracking", "Project Costs"],
  },
  {
    icon: ChartNoAxesCombined,
    number: "06",
    title: "Reports & Analytics",
    description:
      "Review financial performance, monitor key activities, and support better management decisions.",
    features: ["Business Reports", "Performance Metrics", "Dashboards"],
  },
];

export default function ERPModules() {
  return (
   <section className="relative mx-auto flex aspect-[16/9] w-full max-w-[1440px] flex-col overflow-hidden bg-white font-sans text-[#232466]">
  <div className="flex h-full flex-col p-6 sm:p-9 lg:p-11">
    <header className="flex shrink-0 items-start justify-between">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#EF5622] sm:text-sm">
          {/* ONE PLATFORM · CONNECTED OPERATIONS */}
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          ERP Modules & Capabilities
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-500 sm:text-base">
          Flexible modules that bring your essential business functions
          together in one integrated system.
        </p>
      </div>

      <img
        src="https://avsitechnologies.in/AVSI_LOGO.png"
        alt="AVSI Technologies"
        className="ml-5 w-24 shrink-0 object-contain sm:w-32 lg:w-36"
      />
    </header>

    <div className="mt-6 h-px shrink-0 bg-slate-200 sm:mt-7" />

    <div className="mt-6 grid min-h-0 flex-1 grid-cols-3 grid-rows-2 gap-x-5 gap-y-5 sm:mt-7 lg:gap-x-8 lg:gap-y-6">
      {modules.map(({ icon: Icon, number, title, description, features }) => (
        <article
          key={number}
          className="flex min-h-0 flex-col border-l-[3px] border-[#EF5622] py-1 pl-3 pr-2 sm:pl-4 lg:pl-5"
        >
          <div className="flex items-center gap-3">
            <Icon
              size={23}
              strokeWidth={1.8}
              className="shrink-0 text-[#232466]"
            />
            <span className="text-xs font-bold tracking-wider text-[#EF5622]">
              {number}
            </span>
          </div>

          <h2 className="mt-3 text-sm font-bold leading-snug sm:text-base lg:text-lg">
            {title}
          </h2>

          <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
            {description}
          </p>

          <div className="mt-auto space-y-2 pt-3">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 text-[10px] font-medium text-slate-600 sm:text-xs"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#EF5622]" />
                {feature}
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>

    <footer className="mt-5 flex shrink-0 items-center justify-between gap-3 border-t border-slate-200 pt-4">
      <p className="text-xs font-semibold text-slate-600 sm:text-sm">
        Flexible modules. Connected workflows. Better business control.
      </p>
      <span className="text-[10px] font-semibold tracking-wider text-[#232466] sm:text-xs">
        AVSI TECHNOLOGIES
      </span>
    </footer>
  </div>
</section>
  );
}
