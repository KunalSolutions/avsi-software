
import {
  ClipboardList,
  Workflow,
  Code2,
  FlaskConical,
  GraduationCap,
  Rocket,
  Headset,
} from "lucide-react";

const steps = [
  {
    title: "Requirement Analysis",
    description: "Understand business needs, challenges, and objectives.",
    icon: ClipboardList,
  },
  {
    title: "Workflow Design",
    description: "Plan efficient workflows around business operations.",
    icon: Workflow,
  },
  {
    title: "Custom Development",
    description: "Build ERP features to match business requirements.",
    icon: Code2,
  },
  {
    title: "Testing",
    description: "Check functionality, accuracy, and system reliability.",
    icon: FlaskConical,
  },
  {
    title: "Training",
    description: "Help employees confidently use the ERP system.",
    icon: GraduationCap,
  },
  {
    title: "Deployment",
    description: "Launch the system for everyday business operations.",
    icon: Rocket,
  },
  {
    title: "Ongoing Support",
    description: "Provide assistance, fixes, and continuous improvements.",
    icon: Headset,
  },
];

export default function ERPImplementationProcess() {
  return (
    <section className="mx-auto flex aspect-[16/9] w-full max-w-[1440px] flex-col overflow-hidden bg-white px-[3.5%] py-[3%] font-sans text-[#232466]">
      <header className="flex items-center justify-between">
        <div>
          <div className="mb-3 h-1.5 w-12 bg-[#EF5622]" />
          <h1 className="text-3xl font-extrabold lg:text-4xl">
            Our Implementation{" "}
            <span className="text-[#EF5622]">Process</span>
          </h1>
          <p className="mt-2 text-sm text-slate-500 lg:text-base">
            Seven clear steps to implement your customized ERP solution.
          </p>
        </div>

        <img
          src="https://avsitechnologies.in/AVSI_LOGO.png"
          alt="AVSI Technologies"
          className="w-28 object-contain lg:w-32"
        />
      </header>

      <div className="my-7 h-px bg-slate-200" />

      <div className="grid flex-1 grid-cols-7 gap-3">
        {steps.map(({ title, description, icon: Icon }, index) => (
          <article
            key={title}
            className="flex flex-col border border-slate-200 bg-white"
          >
            <div
              className={`h-1.5 ${
                index % 2 === 0 ? "bg-[#232466]" : "bg-[#EF5622]"
              }`}
            />

            <div className="flex flex-1 flex-col p-3 lg:p-4">
              <span
                className={`text-sm font-extrabold ${
                  index % 2 === 0
                    ? "text-[#232466]"
                    : "text-[#EF5622]"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="my-5 flex h-12 w-12 items-center justify-center bg-[#F1F2F9] text-[#232466]">
                <Icon size={25} strokeWidth={1.8} />
              </div>

              <h2 className="mb-3 text-sm font-bold leading-snug lg:text-base">
                {title}
              </h2>

              <p className="text-xs leading-relaxed text-slate-600">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <footer className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-4">
        <div className="h-7 w-1 bg-[#EF5622]" />
        <p className="text-sm font-semibold lg:text-base">
          From planning to launch —{" "}
          <span className="text-[#EF5622]">
            a complete ERP journey
          </span>{" "}
          tailored to your business.
        </p>
      </footer>
    </section>
  );
}
