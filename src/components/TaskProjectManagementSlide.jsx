import {
  ClipboardList,
  FolderKanban,
  Users,
  CalendarDays,
  CheckCircle2,
  Clock3,
  AlertCircle,
  Target,
} from "lucide-react";

import ERPHeader from "./erp/ERPHeader";
import ERPBenefits from "./erp/ERPBenefits";
import ERPDashboardLayout from "./erp/ERPDashboardLayout";

const tasks = [
  {
    title: "Install CCTV Cameras",
    project: "Office Security Project",
    assignee: "Rahul Sharma",
    due: "30 Oct",
    status: "In Progress",
    progress: 65,
  },
  {
    title: "Configure Network Switches",
    project: "Network Upgrade",
    assignee: "Amit Patel",
    due: "31 Oct",
    status: "Pending",
    progress: 25,
  },
  {
    title: "Client Handover",
    project: "Office Security Project",
    assignee: "Neha Shah",
    due: "02 Nov",
    status: "Completed",
    progress: 100,
  },
];

const benefits = [
  {
    icon: FolderKanban,
    title: "Project Tracking",
    description: "Organize projects, milestones, deliverables, and progress.",
  },
  {
    icon: Users,
    title: "Task Assignment",
    description: "Assign responsibilities to employees and project teams.",
  },
  {
    icon: CalendarDays,
    title: "Deadline Management",
    description: "Set due dates and identify overdue tasks.",
  },
  {
    icon: Target,
    title: "Progress Monitoring",
    description: "Track completion status and project performance.",
  },
];

function ProjectDashboard() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="space-y-4 p-3 sm:p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F1F1FA] text-[#232466]">
            <FolderKanban size={21} />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900">Projects & Tasks</h2>
            <p className="text-xs text-slate-500">Team workload and project delivery</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Projects", value: "18" },
            { label: "In Progress", value: "07" },
            { label: "Completed", value: "42" },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-slate-200 p-3">
              <p className="text-xl font-bold text-[#232466]">{item.value}</p>
              <p className="mt-1 text-[10px] text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-slate-200">
          <div className="flex items-center justify-between border-b border-slate-100 p-3">
            <h3 className="text-sm font-bold text-slate-800">Task Board</h3>
            <ClipboardList size={17} className="text-[#232466]" />
          </div>
          {tasks.map((task) => (
            <div key={task.title} className="space-y-2 border-b border-slate-100 p-3 last:border-0">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-slate-800">{task.title}</p>
                  <p className="mt-1 text-[10px] text-slate-500">{task.project}</p>
                </div>
                <span className={`shrink-0 rounded-full px-2 py-1 text-[9px] font-semibold ${
                  task.status === "Completed"
                    ? "bg-emerald-50 text-emerald-700"
                    : task.status === "In Progress"
                      ? "bg-blue-50 text-blue-700"
                      : "bg-orange-50 text-orange-700"
                }`}>{task.status}</span>
              </div>
              <div className="flex items-center justify-between gap-2 text-[10px] text-slate-500">
                <span className="flex items-center gap-1"><Users size={12} />{task.assignee}</span>
                <span className="flex items-center gap-1"><CalendarDays size={12} />{task.due}</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full rounded-full bg-[#232466]" style={{ width: `${task.progress}%` }} />
              </div>
              <p className="text-right text-[9px] text-slate-500">{task.progress}% complete</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-[#F1F1FA] p-3">
            <Clock3 size={17} className="text-[#232466]" />
            <p className="mt-2 text-lg font-bold text-[#232466]">05</p>
            <p className="text-[10px] text-slate-600">Overdue Tasks</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-3">
            <CheckCircle2 size={17} className="text-emerald-700" />
            <p className="mt-2 text-lg font-bold text-emerald-700">87%</p>
            <p className="text-[10px] text-slate-600">Completion Rate</p>
          </div>
        </div>
        <p className="text-center text-[10px] text-slate-400">Illustrative dashboard · Sample data</p>
      </div>
    </div>
  );
}

export default function TaskProjectManagementSlide() {
  return (
    <section className="h-screen min-h-0 overflow-y-auto bg-white px-4 py-4 sm:px-6 lg:overflow-hidden lg:px-8 lg:py-4">
      <div className="mx-auto flex min-h-full w-full max-w-[1500px] flex-col">
        <ERPHeader title="Task & Project Management" />
        <ERPDashboardLayout dashboard={<ProjectDashboard />}>
          <ERPBenefits
            heading="Plan Better."
            highlight="Deliver Faster."
            description="Manage projects, assign employee tasks, track deadlines, and monitor progress through one organized dashboard."
            benefits={benefits}
          />
        </ERPDashboardLayout>
      </div>
    </section>
  );
}