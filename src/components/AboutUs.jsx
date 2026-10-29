
import {
  Settings,
  ShieldCheck,
  Cloud,
  Users,
  Code2,
  Headphones,
  BarChart3,
  TrendingUp,
  ShoppingCart,
  Package,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";

const modules = [
  { label: "Finance", icon: BarChart3 },
  { label: "Sales & CRM", icon: TrendingUp },
  { label: "HR & Payroll", icon: Users },
  { label: "Purchases", icon: ShoppingCart },
  { label: "Inventory", icon: Package },
  { label: "Projects", icon: ClipboardCheck },
];

const capabilities = [
  {
    title: "Custom Solutions",
    description: "Built around your workflow",
    icon: Settings,
  },
  {
    title: "Reliable Support",
    description: "Support when you need us",
    icon: ShieldCheck,
  },
  {
    title: "Long-Term Partnership",
    description: "Growing together",
    icon: Cloud,
  },
];

const teamServices = [
  {
    title: "Skilled Professionals",
    description: "Developers and designers working together.",
    icon: Users,
    color: "bg-[#232466]",
  },
  {
    title: "Custom Development",
    description: "Features tailored to your business needs.",
    icon: Code2,
    color: "bg-[#EF5622]",
  },
  {
    title: "Quality & Testing",
    description: "Careful testing for reliable solutions.",
    icon: ShieldCheck,
    color: "bg-blue-500",
  },
  {
    title: "Ongoing Support",
    description: "Assistance beyond implementation.",
    icon: Headphones,
    color: "bg-slate-200 text-[#232466]",
  },
];

function TeamworkPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[590px]">
      <div className="absolute inset-8 rounded-full bg-blue-100/70 blur-3xl" />

      <div className="relative overflow-hidden rounded-3x bg-white p-2">
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1100&q=85"
            alt="Team collaborating on a business software project"
            className="h-[250px] w-full object-cover sm:h-[330px] lg:h-[450px]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#151747]/90 via-[#151747]/10 to-transparent" />

          <div className="absolute bottom-0 left-0 p-5 text-white sm:p-7">

            <h2 className="max-w-md text-2xl font-bold leading-tight sm:text-3xl">
              Together, We Build
              <span className="block text-[#FBAA19]">
                Smarter Business Software
              </span>
            </h2>

            <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/80">
              Our team turns business requirements into practical,
              customized ERP solutions.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default function AboutUs() {
  return (
    <section className="relative mx-auto aspect-[16/9] w-full max-w-[1440px] overflow-hidden bg-white font-sans text-[#232466]">
      <div className="absolute -right-20 -top-24 h-64 w-64 rotate-45 rounded-3xl bg-[#FBAA19]/10" />
      <div className="absolute -bottom-40 -right-24 h-80 w-[55%] -rotate-[30deg] rounded-3xl bg-[#232466]/[0.04]" />
      <div className="absolute bottom-0 left-0 h-32 w-1/3 rounded-tr-full border-t-2 border-[#FBAA19]/20" />

      <div className="relative z-10 flex h-full flex-col p-5 sm:p-8 lg:p-12">
        <header className="flex shrink-0 items-start">
        <img
            src="https://avsitechnologies.in/AVSI_LOGO.png"
            alt="AVSI Technologies"
            className="ml-auto h-auto w-24 shrink-0 object-contain sm:w-32 lg:w-40"
        />
        </header>

        <div className="grid min-h-0 flex-1 grid-cols-1 items-center gap-7 py-7 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-4">
          <div className="flex min-w-0 flex-col justify-center gap-7 lg:gap-9">
            <TeamworkPreview />
          </div>

          <div className="min-w-0">
            <div className="mb-5 h-1.5 w-16 rounded-full bg-[#FBAA19]" />

            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl xl:text-6xl">
              About
              <span className="text-[#EF5622]"> AVSI</span>
              <span className="block">Technologies</span>
            </h1>

            <p className="mt-4 text-base font-semibold leading-relaxed text-[#232466] sm:text-xl">
              Your Growth Partner in Digital Transformation
            </p>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-500 sm:mt-5 sm:text-base">
              AVSI Technologies provides customized software solutions
              that help businesses simplify daily operations and work
              more efficiently. We build ERP systems around your
              business processes, bringing sales, purchases, inventory,
              customers and reporting together in one place.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-2 sm:mt-8 sm:gap-4">
              {capabilities.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="border-r border-slate-200 pr-2 last:border-0 sm:pr-4"
                >
                  <Icon
                    size={25}
                    className="mb-3 text-[#EF5622] sm:h-7 sm:w-7"
                  />
                  <h3 className="text-xs font-bold leading-snug sm:text-sm">
                    {title}
                  </h3>
                  <p className="mt-2 text-[10px] leading-relaxed text-slate-500 sm:text-xs">
                    {description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
