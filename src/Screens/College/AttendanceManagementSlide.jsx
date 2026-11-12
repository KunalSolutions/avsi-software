
import {
  CalendarCheck,
  Users,
  UserCheck,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Student Attendance",
    description: "Record and monitor daily student attendance.",
  },
  {
    icon: UserCheck,
    title: "Faculty Attendance",
    description: "Maintain faculty attendance records.",
  },
  {
    icon: CalendarCheck,
    title: "Daily Records",
    description: "View attendance by date, class and semester.",
  },
  {
    icon: Clock,
    title: "Attendance Tracking",
    description: "Monitor attendance history and student presence.",
  },
];

export default function AttendanceManagementSlide() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white px-12 py-10 text-[#232466]">
      <div className="flex items-center justify-between">
        <img
          src="https://avsitechnologies.in/AVSI_LOGO.png"
          alt="AVSI Technologies"
          className="h-10 object-contain"
        />
        <span className="text-xs font-semibold tracking-[0.2em] text-[#EF5622]">
          ATTENDANCE MANAGEMENT
        </span>
      </div>

      <div className="mt-12">
        <p className="text-sm font-bold uppercase tracking-widest text-[#EF5622]">
          Daily Attendance Tracking
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          Track Attendance,
          <span className="block text-[#EF5622]">Stay Academically Updated.</span>
        </h1>
        <p className="mt-3 max-w-2xl text-base text-gray-500">
          Simplify attendance management for students and faculty with
          organised daily records and easy access to attendance history.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-[1fr_1.15fr] gap-8">
        <div className="rounded-2xl border border-gray-100 bg-[#FAFAFC] p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold">Attendance Overview</h2>
            <CalendarCheck size={21} className="text-[#EF5622]" />
          </div>

          <p className="mt-2 text-xs text-gray-500">Illustrative daily report</p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-white p-4">
              <p className="text-xs text-gray-500">Present</p>
              <p className="mt-2 text-3xl font-bold text-green-600">92%</p>
            </div>
            <div className="rounded-xl bg-white p-4">
              <p className="text-xs text-gray-500">Absent</p>
              <p className="mt-2 text-3xl font-bold text-red-500">8%</p>
            </div>
          </div>

          <div className="mt-6">
            <div className="mb-2 flex justify-between text-xs font-semibold">
              <span>Attendance Rate</span>
              <span>92%</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-gray-200">
              <div className="h-full w-[92%] rounded-full bg-[#EF5622]" />
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3 rounded-xl bg-white p-4">
            <Users size={22} className="text-[#232466]" />
            <div>
              <p className="text-sm font-bold">Student Attendance</p>
              <p className="text-xs text-gray-500">Class-wise attendance records</p>
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
    </div>
  );
}
