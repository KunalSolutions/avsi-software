import {
  FileText,
  Boxes,
  TrendingUp,
  Users,
  Calculator,
  CalendarCheck,
  ShoppingCart,
  BarChart3,
  Database,
  ClipboardCheck,
  Clock,
} from "lucide-react";

const challenges = [
  {
    icon: FileText,
    title: "Manual Work and Paperwork",
    description: "Creating quotations, invoices, and delivery challans manually wastes time.",
  },
  {
    icon: Boxes,
    title: "Poor Inventory Visibility",
    description: "Difficulty tracking available stock, product movements, and shortages.",
  },
  {
    icon: TrendingUp,
    title: "Inefficient Sales Tracking",
    description: "Leads, quotations, follow-ups, and sales orders are difficult to track.",
  },
  {
    icon: Users,
    title: "Employee Management Issues",
    description: "Managing employee records, attendance, and daily activities takes extra effort.",
  },
  {
    icon: Database,
    title: "Scattered Business Information",
    description: "Customer, vendor, product, and sales data are spread across multiple files.",
  },
  {
    icon: ShoppingCart,
    title: "Purchase Management Difficulties",
    description: "Tracking supplier quotations, purchase orders, and pending deliveries is challenging.",
  },
  {
    icon: Calculator,
    title: "Billing and Calculation Errors",
    description: "Manual calculations and repeated data entry increase the risk of invoice errors.",
  },
  {
    icon: Clock,
    title: "Delayed Payment Tracking",
    description: "Following up on customer dues and monitoring outstanding payments takes time.",
  },
  {
    icon: Users,
    title: "Poor Team Coordination",
    description: "Sales, accounts, and operations teams struggle to share updated information.",
  },
  {
    icon: ClipboardCheck,
    title: "Order and Delivery Tracking",
    description: "Tracking order status, delivery challans, and pending deliveries is difficult.",
  },
  {
    icon: BarChart3,
    title: "Time-Consuming Reports",
    description: "Preparing sales, purchase, and business performance reports requires manual effort.",
  },
  {
    icon: TrendingUp,
    title: "Limited Business Visibility",
    description: "Business owners struggle to get a clear overview of operations and performance.",
  },
];

export default function BusinessChallenges() {
  return (
    
<section className="relative mx-auto flex aspect-[16/9] w-full max-w-[1440px] flex-col overflow-hidden bg-white font-sans text-[#232466]">
  <div className="flex h-full flex-col p-6 sm:p-10 lg:p-12">
    <header className="flex shrink-0 items-start justify-between">
      <div>

        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Challenges Facing Modern Businesses
        </h1>

        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-500 sm:text-base">
          Growing organizations need better visibility, connected processes,
          and reliable control over everyday operations.
        </p>
      </div>

      <img
        src="https://avsitechnologies.in/AVSI_LOGO.png"
        alt="AVSI Technologies"
        className="ml-5 h-auto w-24 shrink-0 object-contain sm:w-32 lg:w-40"
      />
    </header>

    <div className="mt-7 h-px shrink-0 bg-slate-200 sm:mt-8" />

    <div className="mt-6 grid min-h-0 flex-1 grid-cols-4 grid-rows-2 gap-x-5 gap-y-5 sm:mt-7 lg:gap-x-7 lg:gap-y-6">
      {challenges.map(({ icon: Icon, title, description }, index) => (
        <article
          key={title}
          className="flex min-h-0 flex-col border-l-[3px] border-[#EF5622] pl-3 sm:pl-4 lg:pl-5"
        >
          <h2 className="mt-3 text-sm font-bold leading-snug sm:text-base lg:text-lg">
            {title}
          </h2>

          <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
            {description}
          </p>
        </article>
      ))}
    </div>
  </div>
</section>

  );
}
