
import {
  Settings,
  TrendingUp,
  Eye,
  ClipboardCheck,
  Users,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    title: "Improved Productivity",
    description:
      "Automate repetitive tasks, simplify daily workflows, and help employees complete their work faster with greater efficiency.",
    icon: Settings,
  },
  {
    title: "Better Decision-Making",
    description:
      "Access accurate, organized business information and meaningful reports to make informed decisions and plan future growth.",
    icon: TrendingUp,
  },
  {
    title: "Greater Business Visibility",
    description:
      "Monitor sales, expenses, projects, and departmental activities from one centralized system for a clearer view of business performance.",
    icon: Eye,
  },
  {
    title: "Reduced Errors",
    description:
      "Minimize manual data entry, avoid duplicate records, and maintain consistent information across departments and business operations.",
    icon: ClipboardCheck,
  },
  {
    title: "Better Team Collaboration",
    description:
      "Connect departments through shared information, streamline communication, and help teams coordinate tasks and responsibilities effectively.",
    icon: Users,
  },
  {
    title: "Improved Control & Accountability",
    description:
      "Track responsibilities, monitor approvals, and review business progress to improve transparency and maintain better operational control.",
    icon: ShieldCheck,
  },
];

export default function KeyBusinessBenefits() {
  return (
    <section className="mx-auto flex aspect-[16/9] w-full max-w-[1440px] flex-col overflow-hidden bg-white px-[4.2%] py-[3%] font-sans text-[#232466]">
      <header className="flex shrink-0 items-center justify-between gap-4">
        <div>
          <div className="mb-3 h-1.5 w-12 bg-[#EF5622]" />
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
            Key Business <span className="text-[#EF5622]">Benefits</span>
          </h1>
          <p className="mt-2 text-xs text-slate-500 sm:text-sm lg:text-base">
            A smarter way to work, grow and stay in control.
          </p>
        </div>

        <img
          src="https://avsitechnologies.in/AVSI_LOGO.png"
          alt="AVSI Technologies"
          className="w-24 shrink-0 object-contain sm:w-32"
        />
      </header>

      <div className="my-5 h-px shrink-0 bg-slate-200" />

      <div className="grid min-h-0 flex-1 grid-cols-3 grid-rows-2 gap-x-8 gap-y-6 py-3">
        {benefits.map(({ title, description, icon: Icon }, index) => (
          <article key={title} className="flex min-h-0 gap-4 border-l-[3px] border-[#EF5622] pl-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F0F2FA] text-[#232466]">
              <Icon size={23} strokeWidth={1.8} />
            </div>

            <div className="min-w-0">
              <div className="mb-2 flex items-center gap-2">
                <h2 className="text-xs font-bold leading-snug sm:text-sm lg:text-base">
                  {title}
                </h2>
              </div>

              <p className="text-[10px] leading-relaxed text-slate-600 sm:text-xs lg:text-sm">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <footer className="mt-4 flex shrink-0 items-center gap-3 border-t border-slate-200 pt-4">
        <div className="h-7 w-1 shrink-0 bg-[#EF5622]" />
        <p className="text-xs font-semibold leading-relaxed sm:text-sm lg:text-base">
          Less manual work. Better visibility.{" "}
          <span className="text-[#EF5622]">Greater control</span> over your
          business.
        </p>
      </footer>
    </section>
  );
}
