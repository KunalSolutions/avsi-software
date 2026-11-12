
import {
  ClipboardList,
  FileText,
  CalendarDays,
  BookOpen,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: CalendarDays,
    title: "Exam Scheduling",
    description: "Plan examination dates, sessions and schedules.",
  },
  {
    icon: BookOpen,
    title: "Subject Management",
    description: "Organise examinations according to courses and subjects.",
  },
  {
    icon: FileText,
    title: "Marks Entry",
    description: "Record and manage student examination marks.",
  },
  {
    icon: ClipboardList,
    title: "Exam Records",
    description: "Maintain examination details and student performance records.",
  },
];

export default function ExaminationManagementSlide() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white px-12 py-10 text-[#232466]">
      <div className="flex items-center justify-between">
        <img
          src="https://avsitechnologies.in/AVSI_LOGO.png"
          alt="AVSI Technologies"
          className="h-10 object-contain"
        />
        <span className="text-xs font-semibold tracking-[0.2em] text-[#EF5622]">
          EXAMINATION MANAGEMENT
        </span>
      </div>

      <div className="mt-12">
        <p className="text-sm font-bold uppercase tracking-widest text-[#EF5622]">
          Academic Assessment
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          Manage Examinations,
          <span className="block text-[#EF5622]">Organise Every Assessment.</span>
        </h1>
        <p className="mt-3 max-w-2xl text-base text-gray-500">
          Plan examinations, manage subject-wise assessments and maintain
          student marks through a centralised examination system.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-[1.15fr_1fr] gap-8">
        <div className="rounded-2xl border border-gray-100 bg-[#FAFAFC] p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold">Examination Overview</h2>
              <p className="mt-1 text-xs text-gray-500">
                Illustrative examination record
              </p>
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#232466]/10 text-[#232466]">
              <ClipboardList size={22} />
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-white p-5">
            <span className="rounded-full bg-orange-50 px-3 py-1 text-[10px] font-semibold text-[#EF5622]">
              Upcoming Examination
            </span>
            <h3 className="mt-4 text-lg font-bold">Semester 1 Examination</h3>
            <p className="mt-1 text-xs text-gray-500">Bachelor of Science</p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-[#FAFAFC] p-3">
                <p className="text-[10px] text-gray-400">Academic Year</p>
                <p className="mt-1 text-sm font-bold">2026–2027</p>
              </div>
              <div className="rounded-lg bg-[#FAFAFC] p-3">
                <p className="text-[10px] text-gray-400">Subjects</p>
                <p className="mt-1 text-sm font-bold">6 Subjects</p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3 border-t border-gray-100 pt-4">
              <CalendarDays size={18} className="text-[#EF5622]" />
              <p className="text-xs text-gray-600">
                Examination schedule and subject-wise records
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-xl border border-gray-100 bg-[#FAFAFC] p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#232466]/10 text-[#232466]">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-sm font-bold">{feature.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3 rounded-xl bg-[#232466] p-4 text-white">
        <CheckCircle2 size={22} className="shrink-0 text-[#EF5622]" />
        <p className="text-xs leading-relaxed text-white/80">
          Keep examination schedules, marks and assessment records organised
          for a smoother academic process.
        </p>
      </div>
    </div>
  );
}
