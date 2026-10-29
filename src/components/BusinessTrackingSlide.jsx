
import {
  TrendingUp,
  Users,
  Target,
  IndianRupee,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  ArrowUpRight,
  Activity,
} from "lucide-react";

import ERPHeader from "./erp/ERPHeader";
import ERPBenefits from "./erp/ERPBenefits";
import ERPDashboardLayout from "./erp/ERPDashboardLayout";

const stats = [
  { label: "Total Sales", value: "₹12.8L", change: "+18%", icon: IndianRupee },
  { label: "Active Leads", value: "126", change: "+12%", icon: Users },
  { label: "Target Achieved", value: "78%", change: "+8%", icon: Target },
  { label: "Active Projects", value: "18", change: "4 delayed", icon: BriefcaseBusiness },
];

const funnel = [
  { label: "New Leads", count: 126, width: "100%", color: "bg-indigo-500" },
  { label: "Contacted", count: 98, width: "78%", color: "bg-blue-500" },
  { label: "Quotation Sent", count: 64, width: "51%", color: "bg-violet-500" },
  { label: "Negotiation", count: 32, width: "25%", color: "bg-orange-500" },
  { label: "Sales Won", count: 21, width: "17%", color: "bg-emerald-500" },
];

const employees = [
  { name: "Rahul Sharma", role: "Sales", progress: 92, color: "bg-indigo-500" },
  { name: "Amit Patel", role: "Sales", progress: 78, color: "bg-blue-500" },
  { name: "Neha Shah", role: "Operations", progress: 85, color: "bg-violet-500" },
];

const trackingFeatures = [
  {
    icon: TrendingUp,
    title: "Sales & Revenue Tracking",
    description: "Compare monthly sales, revenue trends, targets, and business growth.",
  },
  {
    icon: Activity,
    title: "Sales Funnel Tracking",
    description: "Track leads from enquiry to quotation, negotiation, and confirmed sales.",
  },
  {
    icon: Users,
    title: "Employee Performance",
    description: "Compare employee targets, productivity, task completion, and contributions.",
  },
  {
    icon: Target,
    title: "Targets & Achievements",
    description: "Measure individual and business targets against actual results.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Project Progress",
    description: "Monitor project status, milestones, deadlines, and delayed work.",
  },
  {
    icon: CheckCircle2,
    title: "Pending Work & Follow-ups",
    description: "Identify overdue activities, missed follow-ups, and work requiring attention.",
  },
];

function TrackingPreview() {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_12px_35px_-20px_rgba(35,36,102,0.3)]">
      <div className="space-y-3 p-3 sm:p-4">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h2 className="text-base font-bold text-slate-900">
              Business Performance
            </h2>
            <p className="mt-1 text-[10px] text-slate-500">
              Sales, people and operations at a glance
            </p>
          </div>
          <span className="rounded-lg bg-[#F1F1FA] px-2.5 py-2 text-[10px] font-semibold text-[#232466]">
            Monthly
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className="min-w-0 rounded-lg border border-slate-200 p-2.5">
                <div className="flex items-center justify-between gap-1">
                  <Icon size={16} className="shrink-0 text-[#232466]" />
                  <span className={`text-[9px] font-semibold ${item.change.startsWith("+") ? "text-emerald-600" : "text-orange-600"}`}>
                    {item.change}
                  </span>
                </div>
                <p className="mt-2 text-base font-bold text-slate-900">{item.value}</p>
                <p className="mt-1 text-[9px] leading-tight text-slate-500">{item.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-900">Revenue Trend</h3>
              <TrendingUp size={15} className="text-emerald-600" />
            </div>

            <div className="mt-3 flex h-28">
              <div className="flex flex-col justify-between pb-5 pr-2 text-[9px] text-slate-400">
                <span>₹15L</span>
                <span>₹10L</span>
                <span>₹5L</span>
                <span>₹0</span>
              </div>

              <div className="relative min-w-0 flex-1">
                <div className="absolute inset-0 flex flex-col justify-between pb-5">
                  {[0, 1, 2, 3].map((n) => (
                    <div key={n} className="border-t border-dashed border-slate-200" />
                  ))}
                </div>

                <svg viewBox="0 0 240 100" preserveAspectRatio="none" className="absolute inset-0 h-[calc(100%-20px)] w-full overflow-visible">
                  <defs>
                    <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6366f1" stopOpacity=".25" />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 78 L40 65 L80 70 L120 42 L160 49 L200 22 L240 10 L240 100 L0 100 Z" fill="url(#revenueFill)" />
                  <polyline points="0,78 40,65 80,70 120,42 160,49 200,22 240,10" fill="none" stroke="#5145CD" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
                  {[ [0,78], [40,65], [80,70], [120,42], [160,49], [200,22], [240,10] ].map(([x, y]) => (
                    <circle key={x} cx={x} cy={y} r="3" fill="#5145CD" vectorEffect="non-scaling-stroke" />
                  ))}
                </svg>

                <div className="absolute inset-x-0 bottom-0 flex justify-between text-[9px] text-slate-400">
                  {["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"].map((m) => <span key={m}>{m}</span>)}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 p-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-900">Sales Funnel</h3>
              <span className="text-[9px] text-slate-500">Lead conversion</span>
            </div>

            <div className="mt-3 space-y-2.5">
              {funnel.map((item) => (
                <div key={item.label}>
                  <div className="mb-1 flex items-center justify-between gap-2 text-[10px]">
                    <span className="text-slate-600">{item.label}</span>
                    <span className="font-bold text-slate-800">{item.count}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className={`h-full rounded-full ${item.color}`} style={{ width: item.width }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 p-3">
          <div className="mb-3 flex items-center justify-between gap-2">
            <div>
              <h3 className="text-xs font-bold text-slate-900">Employee Performance</h3>
              <p className="mt-1 text-[9px] text-slate-500">Target achievement by employee</p>
            </div>
            <Users size={17} className="text-[#232466]" />
          </div>

          <div className="space-y-3">
            {employees.map((employee) => (
              <div key={employee.name} className="flex items-center gap-2">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F1F1FA] text-[9px] font-bold text-[#232466]">
                  {employee.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex justify-between gap-2 text-[10px]">
                    <span className="truncate font-semibold text-slate-700">{employee.name}</span>
                    <span className="shrink-0 font-bold text-slate-800">{employee.progress}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-slate-100">
                    <div className={`h-full rounded-full ${employee.color}`} style={{ width: `${employee.progress}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-2.5">
            <Clock3 size={17} className="shrink-0 text-orange-600" />
            <div>
              <p className="text-sm font-bold text-slate-900">12</p>
              <p className="text-[9px] text-slate-600">Overdue activities</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-emerald-50 p-2.5">
            <CheckCircle2 size={17} className="shrink-0 text-emerald-600" />
            <div>
              <p className="text-sm font-bold text-slate-900">86%</p>
              <p className="text-[9px] text-slate-600">Tasks completed</p>
            </div>
          </div>
        </div>

        <p className="text-center text-[9px] text-slate-400">
          Illustrative dashboard · Sample figures
        </p>
      </div>
    </div>
  );
}

export default function BusinessTrackingSlide() {
  return (
    <section className="h-screen min-h-0 overflow-y-auto bg-white px-4 py-4 sm:px-6 lg:overflow-hidden lg:px-8 lg:py-4">
      <div className="mx-auto flex min-h-full w-full max-w-[1500px] flex-col">
        <ERPHeader title="Business Performance & Tracking" />

        <ERPDashboardLayout dashboard={<TrackingPreview />}>
          <ERPBenefits
            heading="Measure Performance."
            highlight="Improve Results."
            description="Track the complete business journey with visual reports for sales, funnel conversion, employee performance, targets, project progress, and pending activities."
            benefits={trackingFeatures}
          />
        </ERPDashboardLayout>
      </div>
    </section>
  );
}
