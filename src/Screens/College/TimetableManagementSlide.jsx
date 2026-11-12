
import {
  CalendarDays,
  Clock3,
  BookOpen,
  Users,
  GraduationCap,
  MapPin,
} from "lucide-react";

const timetable = [
  { day: "Monday", subjects: ["Mathematics", "Physics", "English"] },
  { day: "Tuesday", subjects: ["Chemistry", "Mathematics", "Computer"] },
  { day: "Wednesday", subjects: ["Physics", "English", "Chemistry"] },
  { day: "Thursday", subjects: ["Computer", "Physics", "Mathematics"] },
  { day: "Friday", subjects: ["English", "Chemistry", "Computer"] },
];

const periods = ["09:00 AM", "10:00 AM", "11:30 AM"];

export default function TimetableManagementSlide() {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-[#F7F8FC] px-12 py-9 text-[#232466]">
      <div className="flex items-center justify-between">
        <img
          src="https://avsitechnologies.in/AVSI_LOGO.png"
          alt="AVSI Technologies"
          className="h-10 object-contain"
        />
        <span className="text-xs font-semibold tracking-[0.2em] text-[#EF5622]">
          TIMETABLE MANAGEMENT
        </span>
      </div>

      <div className="mt-8 flex items-end justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-[#EF5622]">
            Academic Scheduling
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            Plan Classes.
            <span className="text-[#EF5622]"> Manage Every Schedule.</span>
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Organise class schedules, subjects, faculty and classroom allocation.
          </p>
        </div>
        <div className="rounded-xl bg-[#232466] px-4 py-3 text-white">
          <p className="text-[10px] text-white/60">ACADEMIC YEAR</p>
          <p className="mt-1 text-sm font-bold">2026 – 2027</p>
        </div>
      </div>

      <div className="mt-7 grid grid-cols-3 gap-4">
        {[
          { label: "Total Classes", value: "24", icon: BookOpen },
          { label: "Faculty Assigned", value: "18", icon: Users },
          { label: "Working Days", value: "5 Days", icon: CalendarDays },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#232466]/10 text-[#232466]">
                <Icon size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500">{item.label}</p>
                <p className="mt-1 text-xl font-bold">{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold">Weekly Class Timetable</h2>
            <p className="mt-1 text-xs text-gray-400">B.Sc. · Semester 1 · Division A</p>
          </div>
          <span className="rounded-lg bg-orange-50 px-3 py-2 text-xs font-semibold text-[#EF5622]">
            Monday – Friday
          </span>
        </div>

        <div className="grid grid-cols-[100px_repeat(3,minmax(0,1fr))] gap-2">
          <div className="rounded-lg bg-[#232466] p-3 text-center text-xs font-semibold text-white">
            Day
          </div>
          {periods.map((period) => (
            <div key={period} className="rounded-lg bg-[#232466] p-3 text-center text-xs font-semibold text-white">
              {period}
            </div>
          ))}

          {timetable.map((day) => (
            <>
              <div key={`${day.day}-label`} className="flex items-center rounded-lg bg-[#F3F4F9] p-3 text-xs font-bold">
                {day.day}
              </div>
              {day.subjects.map((subject, index) => (
                <div key={`${day.day}-${subject}`} className={`rounded-lg p-3 ${index === 1 ? "bg-orange-50" : "bg-[#F3F4F9]"}`}>
                  <p className="text-xs font-bold">{subject}</p>
                  <p className="mt-1 text-[10px] text-gray-500">
                    {index === 1 ? "Room 204" : "Room 102"}
                  </p>
                </div>
              ))}
            </>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between rounded-xl bg-[#232466] px-5 py-4 text-white">
        <div className="flex items-center gap-3">
          <Clock3 size={21} className="text-[#EF5622]" />
          <div>
            <p className="text-sm font-bold">Smart Schedule Management</p>
            <p className="mt-1 text-xs text-white/65">
              Coordinate subjects, faculty, periods and classrooms in one place.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-white/70">
          <MapPin size={15} />
          Classroom Allocation
        </div>
      </div>
    </div>
  );
}
