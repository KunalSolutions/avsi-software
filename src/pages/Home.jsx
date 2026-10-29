
import { useNavigate } from "react-router";
import { Building2, GraduationCap, HeartPulse, ArrowRight } from "lucide-react";

const presentations = [
  {
    title: "Corporate ERP",
    description: "Business management, finance, sales, HR, projects and reporting.",
    icon: Building2,
    path: "/presentations/corporate",
  },
  // {
  //   title: "College ERP",
  //   description: "Academic administration, students, attendance and fees.",
  //   icon: GraduationCap,
  //   path: "/presentations/college",
  // },
  // {
  //   title: "Healthcare ERP",
  //   description: "Explore management solutions for healthcare organizations.",
  //   icon: HeartPulse,
  //   path: "/presentations/healthcare",
  // },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-white px-5 py-12 text-[#232466] sm:px-10">
      <header className="mx-auto flex max-w-6xl items-center justify-between">
       <div className="flex items-center gap-3">
  <img
    src="https://avsitechnologies.in/AVSI_LOGO.png"
    alt="AVSI Technologies Logo"
    className="h-12 w-auto object-contain"
  />
</div>
        <span className="hidden text-sm text-slate-500 sm:block">
          Business Solutions
        </span>
      </header>

      <section className="mx-auto mt-16 max-w-6xl">
        <p className="text-xs font-bold tracking-[0.2em] text-[#EF5622]">
          OUR SOLUTIONS
        </p>
        <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Explore Our ERP Solutions
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-slate-500">
          Select a solution to start a presentation showcasing its capabilities,
          features and business benefits.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {presentations.map(({ title, description, icon: Icon, path }) => (
            <button
              key={title}
              onClick={() => navigate(path)}
              className="group rounded-2xl border border-slate-200 bg-white p-6 text-left transition hover:-translate-y-1 hover:border-[#EF5622]/50 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50">
                <Icon size={25} className="text-[#EF5622]" />
              </div>

              <h3 className="mt-6 text-xl font-bold">{title}</h3>
              <p className="mt-3 min-h-12 text-sm leading-6 text-slate-500">
                {description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#232466]">
                View
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
