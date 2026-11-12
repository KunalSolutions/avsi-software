
import {
  GraduationCap,
  UserRound,
  BookOpen,
  Phone,
  Mail,
  CalendarDays,
  FileText,
  Search,
  Users,
  ShieldCheck,
} from "lucide-react";

const studentDetails = [
  { label: "Student ID", value: "STU-2026-001" },
  { label: "Course", value: "Bachelor of Science" },
  { label: "Semester", value: "Semester 1" },
  { label: "Academic Year", value: "2026–2027" },
];

const features = [
  {
    icon: UserRound,
    title: "Student Profiles",
    description: "Maintain personal details, contact information and student records.",
  },
  {
    icon: BookOpen,
    title: "Academic Information",
    description: "Access course, semester, subject and academic year details.",
  },
  {
    icon: FileText,
    title: "Document Records",
    description: "Keep student admission documents and verification details organised.",
  },
  {
    icon: Search,
    title: "Quick Student Search",
    description: "Find student records quickly using relevant student information.",
  },
  {
    icon: ShieldCheck,
    title: "Centralised Records",
    description: "Use one student record across connected college management modules.",
  },
  {
    icon: Users,
    title: "Student Directory",
    description: "View and manage student information from a common directory.",
  },
];

export default function StudentManagementSlide() {
  return (
    <div className="relative aspect-video w-full overflow-hidden bg-white px-12 py-9 text-[#232466]">
      <div className="flex items-center justify-between">
        <img
          src="https://avsitechnologies.in/AVSI_LOGO.png"
          alt="AVSI Technologies"
          className="h-10 object-contain"
        />
        <span className="text-xs font-semibold tracking-[0.2em] text-[#EF5622]">
          STUDENT MANAGEMENT
        </span>
      </div>

      <div className="mt-8">
        <p className="text-sm font-bold uppercase tracking-widest text-[#EF5622]">
          Centralised Student Records
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Every Student Record,
          <span className="block text-[#EF5622]">Organised in One Place.</span>
        </h1>
        <p className="mt-3 max-w-3xl text-base text-gray-500">
          Maintain complete student information, academic details and documents
          through a single, easily accessible student database.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-[1.05fr_1.4fr] gap-7">
        <div className="rounded-2xl border border-gray-100 bg-[#FAFAFC] p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold">Student Profile Preview</h2>
            <span className="rounded-full bg-green-50 px-3 py-1 text-[10px] font-semibold text-green-700">
              Active Student
            </span>
          </div>

          <div className="mt-5 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#232466]/10 text-[#232466]">
              <GraduationCap size={28} />
            </div>
            <div>
              <h3 className="text-lg font-bold">Rahul Sharma</h3>
              <p className="text-xs text-gray-500">Student Information</p>
            </div>
          </div>

          <div className="mt-5 space-y-3 border-t border-gray-100 pt-4">
            <div className="flex items-center gap-3 text-xs text-gray-600">
              <Mail size={15} className="text-[#EF5622]" />
              rahul.sharma@example.com
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-600">
              <Phone size={15} className="text-[#EF5622]" />
              +91 98765 43210
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-600">
              <CalendarDays size={15} className="text-[#EF5622]" />
              Academic Year 2026–2027
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {studentDetails.map((item) => (
              <div key={item.label} className="rounded-lg bg-white p-3">
                <p className="text-[10px] text-gray-400">{item.label}</p>
                <p className="mt-1 text-xs font-bold text-[#232466]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-[10px] text-gray-400">
            Illustrative student profile
          </p>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-2">
            <Users size={18} className="text-[#EF5622]" />
            <h2 className="text-base font-bold">Student Management Features</h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="min-h-[126px] rounded-xl border border-gray-100 bg-[#FAFAFC] p-4"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#232466]/10 text-[#232466]">
                    <Icon size={19} />
                  </div>
                  <h3 className="mt-3 text-sm font-bold">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-gray-500">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-4 flex items-center gap-3 rounded-xl bg-[#232466] p-4 text-white">
            <ShieldCheck size={24} className="shrink-0 text-[#EF5622]" />
            <p className="text-xs leading-relaxed text-white/85">
              A single student record helps reduce duplicate data entry and
              keeps information consistent across college departments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
