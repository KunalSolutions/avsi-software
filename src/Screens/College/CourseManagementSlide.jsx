
import {
  BookOpen,
  GraduationCap,
  Layers3,
  BookMarked,
  Wallet,
  Plus,
  Clock3,
  IndianRupee,
  CheckCircle2,
} from "lucide-react";

const semesters = [
  { name: "Semester 1", subjects: 6 },
  { name: "Semester 2", subjects: 6 },
  { name: "Semester 3", subjects: 6 },
  { name: "Semester 4", subjects: 6 },
  { name: "Semester 5", subjects: 6 },
  { name: "Semester 6", subjects: 6 },
];

const features = [
  {
    icon: GraduationCap,
    title: "Course Creation",
    description: "Create and manage different courses offered by the college.",
  },
  {
    icon: Layers3,
    title: "Semester Management",
    description: "Organise course structure semester by semester.",
  },
  {
    icon: BookMarked,
    title: "Subject Allocation",
    description: "Add and manage subjects under each semester.",
  },
  {
    icon: Wallet,
    title: "Course Fee Structure",
    description: "Define total course fees for admission and fee management.",
  },
];

export default function CourseManagementSlide() {
  return (
    <div className="relative aspect-video w-full overflow-hidden bg-white px-12 py-9 text-[#232466]">
      <div className="flex items-center justify-between">
        <img
          src="https://avsitechnologies.in/AVSI_LOGO.png"
          alt="AVSI Technologies"
          className="h-10 object-contain"
        />
        <span className="text-xs font-semibold tracking-[0.2em] text-[#EF5622]">
          COURSE MANAGEMENT
        </span>
      </div>

      <div className="mt-8">
        <p className="text-sm font-bold uppercase tracking-widest text-[#EF5622]">
          Academic Structure Management
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Organise Courses,
          <span className="block text-[#EF5622]">Semesters & Subjects Easily.</span>
        </h1>
        <p className="mt-3 max-w-3xl text-base text-gray-500">
          Create course structures, assign subjects to semesters and maintain
          fee details through one centralised academic management system.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-[1.1fr_1fr] gap-7">
        <div className="rounded-2xl border border-gray-100 bg-[#FAFAFC] p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen size={19} className="text-[#EF5622]" />
              <h2 className="text-sm font-bold">Course Structure Preview</h2>
            </div>
            <span className="rounded-full bg-green-50 px-3 py-1 text-[10px] font-semibold text-green-700">
              Active
            </span>
          </div>

          <div className="mt-5 rounded-xl bg-white p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#232466]/10 text-[#232466]">
                <GraduationCap size={23} />
              </div>
              <div>
                <h3 className="text-base font-bold">Bachelor of Science</h3>
                <p className="text-xs text-gray-500">Undergraduate Programme</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-[#FAFAFC] p-3">
                <p className="text-[10px] text-gray-400">Duration</p>
                <p className="mt-1 text-sm font-bold">3 Years</p>
              </div>
              <div className="rounded-lg bg-[#FAFAFC] p-3">
                <p className="text-[10px] text-gray-400">Total Semesters</p>
                <p className="mt-1 text-sm font-bold">6 Semesters</p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <h4 className="text-xs font-bold">Semester Structure</h4>
              <span className="text-[10px] text-gray-400">Subjects by semester</span>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2">
              {semesters.map((semester) => (
                <div key={semester.name} className="rounded-lg border border-gray-100 p-3">
                  <p className="text-[10px] font-semibold text-[#232466]">
                    {semester.name}
                  </p>
                  <p className="mt-1 text-[10px] text-gray-500">
                    {semester.subjects} Subjects
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-3 text-[10px] text-gray-400">
            Illustrative course structure
          </p>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-2">
            <Layers3 size={18} className="text-[#EF5622]" />
            <h2 className="text-base font-bold">Course Management Features</h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div key={feature.title} className="min-h-[145px] rounded-xl border border-gray-100 bg-[#FAFAFC] p-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#232466]/10 text-[#232466]">
                    <Icon size={19} />
                  </div>
                  <h3 className="mt-3 text-sm font-bold">{feature.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-gray-500">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
