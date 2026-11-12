
import {
  GraduationCap,
  ShieldCheck,
  Cloud,
  BookOpen,
  Users,
  Wallet,
  ClipboardCheck,
  BarChart3,
} from "lucide-react";

const modules = [
  {
    label: "Student Management",
    icon: GraduationCap,
    position: "left-[18%] top-[25%]",
  },
  {
    label: "Academic Management",
    icon: BookOpen,
    position: "left-[49%] top-[12%]",
  },
  {
    label: "Faculty Management",
    icon: Users,
    position: "right-[9%] top-[25%]",
  },
  {
    label: "Fee Management",
    icon: Wallet,
    position: "left-[7%] top-[56%]",
  },
  {
    label: "Attendance Management",
    icon: ClipboardCheck,
    position: "right-[1%] top-[46%]",
  },
  {
    label: "Examination & Results",
    icon: BarChart3,
    position: "right-[5%] top-[70%]",
  },
];

function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[570px]">
      <div className="absolute inset-8 rounded-full bg-blue-100/70 blur-3xl" />

      <div className="relative rotate-[-2deg] rounded-2xl border-[8px] border-slate-800 bg-white p-2 shadow-2xl">
        <div className="flex min-h-[330px] overflow-hidden rounded-lg bg-slate-50">
          {/* Sidebar */}
          <aside className="w-[26%] shrink-0 bg-[#232466] p-3 text-white">
            <div className="mb-7 text-sm font-black tracking-wide">
              AVSI College ERP
            </div>

            {[
              "Dashboard",
              "Admissions",
              "Students",
              "Courses",
              "Faculty",
              "Fees",
              "Attendance",
              "Examinations",
            ].map((item, i) => (
              <div
                key={item}
                className={`mb-2 rounded-md px-2 py-2 text-[10px] ${
                  i === 0
                    ? "bg-blue-500"
                    : "text-blue-100"
                }`}
              >
                {item}
              </div>
            ))}
          </aside>

          {/* Dashboard Content */}
          <div className="min-w-0 flex-1 p-3 sm:p-4">
            <p className="mb-4 text-sm font-bold text-slate-800">
              College Overview
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2">
              {[
                ["Total Students", "2,450"],
                ["Faculty Members", "85"],
                ["Pending Admissions", "124"],
              ].map(([label, amount], i) => (
                <div
                  key={label}
                  className="rounded-lg border border-slate-100 bg-white p-2"
                >
                  <p className="text-[8px] text-slate-500 sm:text-[10px]">
                    {label}
                  </p>

                  <p className="mt-1 text-[9px] font-bold text-[#232466] sm:text-xs">
                    {amount}
                  </p>

                  <p className="mt-1 text-[8px] text-green-600">
                    {i === 0
                      ? "↑ 12.5%"
                      : i === 1
                        ? "↑ 8.2%"
                        : "Awaiting review"}
                  </p>
                </div>
              ))}
            </div>

            {/* Charts */}
            <div className="mt-3 grid grid-cols-[1.2fr_0.8fr] gap-2">
              <div className="rounded-lg border border-slate-100 bg-white p-3">
                <p className="text-[10px] font-semibold text-slate-700">
                  Student Admissions
                </p>

                <div className="mt-5 flex h-28 items-end justify-around gap-2 border-b border-slate-200">
                  {[35, 50, 42, 68, 78, 95].map((height, i) => (
                    <div
                      key={i}
                      style={{ height: `${height}%` }}
                      className={`w-full rounded-t-sm ${
                        i === 5 ? "bg-[#EF5622]" : "bg-blue-500"
                      }`}
                    />
                  ))}
                </div>

                <div className="mt-2 flex justify-around text-[8px] text-slate-400">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map(
                    (m) => (
                      <span key={m}>{m}</span>
                    )
                  )}
                </div>
              </div>

              <div className="rounded-lg border border-slate-100 bg-white p-3">
                <p className="text-[10px] font-semibold text-slate-700">
                  Fee Collection
                </p>

                <div className="mx-auto my-5 flex h-24 w-24 items-center justify-center rounded-full bg-[conic-gradient(#232466_0_55%,#EF5622_55%_78%,#60A5FA_78%_90%,#CBD5E1_90%_100%)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[9px] font-bold text-slate-700">
                    Fees
                  </div>
                </div>

                <div className="space-y-2 text-[9px] text-slate-500">
                  <p>● Collected</p>
                  <p className="text-orange-500">● Pending</p>
                  <p className="text-blue-400">● Other</p>
                </div>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="mt-3 rounded-lg border border-slate-100 bg-white p-3">
              <p className="mb-2 text-[10px] font-semibold text-slate-700">
                Recent Activities
              </p>

              {[
                "New student admission received",
                "Fee payment recorded",
                "Student attendance updated",
              ].map((item) => (
                <p
                  key={item}
                  className="mb-2 text-[9px] text-slate-500"
                >
                  ● {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Module Cards */}
      {modules.map(({ label, icon: Icon, position }) => (
        <div
          key={label}
          className={`absolute ${position} z-10 hidden w-[112px] flex-col items-center gap-2 rounded-xl border border-blue-100 bg-white/95 p-3 text-center shadow-lg sm:flex`}
        >
          <Icon size={28} className="text-[#232466]" />

          <span className="text-[11px] font-semibold leading-tight text-[#232466]">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function CollegeERPCoverSlide() {
  return (
    <section className="relative mx-auto aspect-[16/9] w-full max-w-[1440px] overflow-hidden bg-white font-sans text-[#232466]">
      {/* Background Design */}
      <div className="absolute -right-20 -top-24 h-64 w-64 rotate-45 rounded-3xl bg-[#FBAA19]/10" />

      <div className="absolute -bottom-40 -right-24 h-80 w-[55%] -rotate-[30deg] rounded-3xl bg-[#232466]/[0.04]" />

      <div className="absolute bottom-0 left-0 h-32 w-1/3 rounded-tr-full border-t-2 border-[#FBAA19]/20" />

      <div className="relative z-10 flex h-full flex-col p-5 sm:p-8 lg:p-12">
        {/* Header */}
        <header className="flex items-center">
          <img
            src="https://avsitechnologies.in/AVSI_LOGO.png"
            alt="AVSI Technologies"
            className="h-12 w-auto object-contain sm:h-16"
          />
        </header>

        {/* Main Content */}
        <div className="grid min-h-0 flex-1 grid-cols-1 items-center gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:gap-2">
          {/* Left Content */}
          <div className="relative z-20 py-4 lg:py-0">
            <div className="mb-5 h-1.5 w-16 rounded-full bg-[#FBAA19] sm:mb-7 sm:w-20" />

            <h1 className="max-w-[620px] text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl xl:text-6xl">
              Complete College
              <span className="block text-[#EF5622]">
                Management
              </span>
              <span className="block">ERP Solution</span>
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-relaxed text-slate-500 sm:mt-7 sm:text-lg">
              Simplify Administration. Empower Academics. Manage Your Entire
              College in One Place.
            </p>

            {/* Highlights */}
            <div className="mt-7 hidden items-center gap-4 xl:flex">
              <div className="flex items-center gap-2">
                <GraduationCap size={27} className="text-[#232466]" />

                <span className="text-xs font-semibold">
                  Complete College
                  <br />
                  Management
                </span>
              </div>

              <div className="h-10 w-px bg-slate-200" />

              <div className="flex items-center gap-2">
                <ShieldCheck size={27} className="text-[#EF5622]" />

                <span className="text-xs font-semibold">
                  Secure &
                  <br />
                  Reliable
                </span>
              </div>

              <div className="h-10 w-px bg-slate-200" />

              <div className="flex items-center gap-2">
                <Cloud size={27} className="text-[#232466]" />

                <span className="text-xs font-semibold">
                  Smart &
                  <br />
                  Connected
                </span>
              </div>
            </div>
          </div>

          {/* Right Dashboard Preview */}
          <div className="flex min-h-0 items-center justify-center py-2 lg:py-0">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
