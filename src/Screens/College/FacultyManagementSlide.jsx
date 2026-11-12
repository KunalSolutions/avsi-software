
import {
  Users,
  UserRound,
  BookOpen,
  Building2,
  CalendarCheck,
} from "lucide-react";

const features = [
  {
    icon: UserRound,
    title: "Faculty Profiles",
    description: "Maintain faculty details and contact information.",
  },
  {
    icon: Building2,
    title: "Department Allocation",
    description: "Assign faculty members to their respective departments.",
  },
  {
    icon: BookOpen,
    title: "Subject Allocation",
    description: "Manage subjects and teaching responsibilities.",
  },
  {
    icon: CalendarCheck,
    title: "Teaching Schedule",
    description: "Organise faculty schedules and assigned classes.",
  },
];

export default function FacultyManagementSlide() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white px-12 py-10 text-[#232466]">
      <div className="flex items-center justify-between">
        <img
          src="https://avsitechnologies.in/AVSI_LOGO.png"
          alt="AVSI Technologies"
          className="h-10 object-contain"
        />
        <span className="text-xs font-semibold tracking-[0.2em] text-[#EF5622]">
          FACULTY MANAGEMENT
        </span>
      </div>

      <div className="mt-12">
        <p className="text-sm font-bold uppercase tracking-widest text-[#EF5622]">
          Faculty & Staff Administration
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          Manage Your Faculty,
          <span className="block text-[#EF5622]">Empower Your Institution.</span>
        </h1>
        <p className="mt-3 max-w-2xl text-base text-gray-500">
          Maintain faculty records, organise department assignments and manage
          teaching responsibilities from one place.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-[1fr_1.15fr] gap-8">
        <div className="rounded-2xl bg-[#232466] p-7 text-white">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
            <Users size={25} className="text-[#EF5622]" />
          </div>

          <h2 className="mt-6 text-2xl font-bold">Faculty Directory</h2>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            Keep faculty information organised and accessible to authorised
            college administrators.
          </p>

          <div className="mt-7 rounded-xl bg-white/10 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                <UserRound size={22} />
              </div>
              <div>
                <p className="text-sm font-bold">Faculty Profile</p>
                <p className="text-xs text-white/60">Department of Science</p>
              </div>
            </div>
            <div className="mt-4 border-t border-white/15 pt-3 text-xs text-white/70">
              Subject: Mathematics
            </div>
          </div>
          <p className="mt-3 text-[10px] text-white/50">
            Illustrative faculty profile
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
