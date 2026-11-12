
import {
  Award,
  GraduationCap,
  FileCheck,
  BarChart3,
  BookOpen,
} from "lucide-react";

const features = [
  {
    icon: FileCheck,
    title: "Result Management",
    description: "Maintain examination results and student records.",
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    description: "Review subject-wise marks and academic progress.",
  },
  {
    icon: Award,
    title: "Grade Management",
    description: "Organise grades, percentages and result status.",
  },
  {
    icon: BookOpen,
    title: "Academic History",
    description: "Access semester-wise student performance records.",
  },
];

export default function ResultsGradesSlide() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white px-12 py-10 text-[#232466]">
      <div className="flex items-center justify-between">
        <img
          src="https://avsitechnologies.in/AVSI_LOGO.png"
          alt="AVSI Technologies"
          className="h-10 object-contain"
        />
        <span className="text-xs font-semibold tracking-[0.2em] text-[#EF5622]">
          RESULTS & GRADES
        </span>
      </div>

      <div className="mt-12">
        <p className="text-sm font-bold uppercase tracking-widest text-[#EF5622]">
          Student Academic Performance
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          Results Made Simple,
          <span className="block text-[#EF5622]">Performance Made Clear.</span>
        </h1>
        <p className="mt-3 max-w-2xl text-base text-gray-500">
          Manage examination results, subject-wise marks and student grades
          with organised academic performance records.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-[1.05fr_1.15fr] gap-8">
        <div className="rounded-2xl border border-gray-100 bg-[#FAFAFC] p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold">Student Result Preview</h2>
            <Award size={22} className="text-[#EF5622]" />
          </div>

          <div className="mt-5 rounded-xl bg-white p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#232466]/10 text-[#232466]">
                <GraduationCap size={23} />
              </div>
              <div>
                <h3 className="text-sm font-bold">Rahul Sharma</h3>
                <p className="text-xs text-gray-500">B.Sc. · Semester 1</p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-[#FAFAFC] p-3">
                <p className="text-[10px] text-gray-400">Total Marks</p>
                <p className="mt-1 text-xl font-bold">450 / 500</p>
              </div>
              <div className="rounded-lg bg-[#FAFAFC] p-3">
                <p className="text-[10px] text-gray-400">Percentage</p>
                <p className="mt-1 text-xl font-bold text-green-600">90%</p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between rounded-lg bg-green-50 p-3">
              <div>
                <p className="text-[10px] text-green-700">Overall Result</p>
                <p className="mt-1 text-sm font-bold text-green-700">Passed</p>
              </div>
              <span className="rounded-lg bg-white px-4 py-2 text-lg font-bold text-green-700">
                A+
              </span>
            </div>
          </div>

          <p className="mt-3 text-[10px] text-gray-400">
            Illustrative student result
          </p>
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
    </div>
  );
}
