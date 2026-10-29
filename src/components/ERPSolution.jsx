
import {
  Database,
  Workflow,
  Network,
  BarChart3,
  SlidersHorizontal,
  CheckCircle2,
  Layers,
  ArrowRight,
} from "lucide-react";

const solutions = [
  {
    icon: Layers,
    number: "01",
    title: "All Business Operations in One System",
    description:
      "Manage sales, purchases, inventory, customers, vendors, and business documentation in one place.",
  },
  {
    icon: Database,
    number: "02",
    title: "Centralized Business Information",
    description:
      "Keep important business records organized and accessible to authorized team members.",
  },
  {
    icon: Workflow,
    number: "03",
    title: "Reduced Manual Work",
    description:
      "Simplify routine documentation and reduce repetitive data entry and paperwork.",
  },
  {
    icon: Network,
    number: "04",
    title: "Connected Business Workflows",
    description:
      "Organize sales orders, purchasing, inventory, and delivery processes more efficiently.",
  },
  {
    icon: BarChart3,
    number: "05",
    title: "Better Business Visibility",
    description:
      "Access available reports and business records to track activities and support informed decisions.",
  },
  {
    icon: SlidersHorizontal,
    number: "06",
    title: "Customized ERP Solutions",
    description:
      "Adapt supported modules and workflows to your business requirements and operating processes.",
  },
];

export default function ERPSolution() {
  return (
    <section className="relative mx-auto flex aspect-[16/9] w-full max-w-[1440px] flex-col overflow-hidden bg-white font-sans text-[#232466]">
    <div className="flex h-full flex-col p-6 sm:p-10 lg:p-12">
        <header className="flex shrink-0 items-start justify-between">
        <div>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            AVSI ERP Solution
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-500 sm:text-base">
            Manage your business operations through one organized system designed around your business processes.
            </p>
        </div>

        <img
            src="https://avsitechnologies.in/AVSI_LOGO.png"
            alt="AVSI Technologies"
            className="ml-5 h-auto w-24 shrink-0 object-contain sm:w-32 lg:w-40"
        />
        </header>

        <div className="mt-7 h-px shrink-0 bg-slate-200 sm:mt-8" />

        <div className="mt-6 grid min-h-0 flex-1 grid-cols-3 grid-rows-2 gap-x-6 gap-y-5 sm:mt-8 lg:gap-x-10 lg:gap-y-7">
        {solutions.map(({ icon: Icon, number, title, description }) => (
            <article
            key={number}
            className="flex min-h-0 flex-col border-l-[3px] border-[#EF5622] pl-3 sm:pl-5"
            >
            <div className="flex items-center gap-3">
                <Icon
                size={24}
                strokeWidth={1.8}
                className="shrink-0 text-[#232466]"
                />
                <span className="text-xs font-bold tracking-wider text-[#EF5622] sm:text-sm">
                {number}
                </span>
            </div>

            <h2 className="mt-4 text-sm font-bold leading-snug sm:text-base lg:text-xl">
                {title}
            </h2>

            <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-sm lg:text-base">
                {description}
            </p>
            </article>
        ))}
        </div>
    </div>
    </section>
  );
}
