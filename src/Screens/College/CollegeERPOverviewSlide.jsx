
import {
  GraduationCap,
  ClipboardList,
  BookOpen,
  Users,
  Wallet,
  CalendarCheck,
  FileText,
  Library,
  ShieldCheck,
  UserRound,
} from "lucide-react";

const modules = [
  { title: "Admission Management", description: "Manage enquiries, applications and student admissions.", icon: ClipboardList },
  { title: "Student Management", description: "Maintain complete student profiles and records.", icon: GraduationCap },
  { title: "Course Management", description: "Manage courses, semesters and subjects.", icon: BookOpen },
  { title: "Faculty Management", description: "Organise faculty details and responsibilities.", icon: Users },
  { title: "Fee Management", description: "Track fee collection, pending payments and receipts.", icon: Wallet },
  { title: "Attendance Management", description: "Monitor student and faculty attendance.", icon: CalendarCheck },
  { title: "Examination & Results", description: "Manage examinations, marks and academic results.", icon: FileText },
  { title: "Library Management", description: "Organise books, issue records and returns.", icon: Library },
  { title: "Visitor Management", description: "Record visitor entries and exit details.", icon: ShieldCheck },
  { title: "User Management", description: "Manage access for admin, faculty and students.", icon: UserRound },
];

export default function CollegeERPOverviewSlide() {
  return (
    <div className="relative w-full aspect-video overflow-hidden bg-white px-12 py-9 text-[#232466]">
      <div className="flex items-center justify-between">
        <img
          src="https://avsitechnologies.in/AVSI_LOGO.png"
          alt="AVSI Technologies"
          className="h-10 object-contain"
        />
        <span className="text-xs font-semibold tracking-[0.2em] text-[#EF5622]">
          COLLEGE ERP SOLUTION
        </span>
      </div>

      <div className="mt-8">
        <p className="text-sm font-bold uppercase tracking-widest text-[#EF5622]">
          Platform Overview
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Everything Your College Needs,
          <span className="block text-[#EF5622]">All in One Platform.</span>
        </h1>
        <p className="mt-3 max-w-3xl text-base text-gray-500">
          A unified college management system designed to simplify daily
          operations, improve coordination and keep every department connected.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-5 gap-4">
        {modules.map((module, index) => {
          const Icon = module.icon;

          return (
            <div
              key={module.title}
              className="min-h-[130px] rounded-xl border border-gray-100 bg-[#FAFAFC] p-4"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#232466]/10 text-[#232466]">
                <Icon size={19} />
              </div>

              <h3 className="mt-3 text-sm font-bold text-[#232466]">
                {module.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-gray-500">
                {module.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
