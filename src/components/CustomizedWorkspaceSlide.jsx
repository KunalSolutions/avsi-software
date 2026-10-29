import {
  ShieldCheck,
  Smartphone,
  Monitor,
  Settings2,
  PanelsTopLeft,
  LockKeyhole,
  CheckCircle2,
  ArrowUpRight,
  Users,
  Wallet,
  ClipboardList,
  MessageCircle,
  Globe,
  LayoutDashboard,
  Database,
  Workflow,
} from "lucide-react";
import ERPHeader from "./erp/ERPHeader";

const features = [
  {
    icon: Settings2,
    title: "Custom-Built Design",
    description: "Software designed around your business needs, processes and working style.",
  },
  {
    icon: LayoutDashboard,
    title: "Separate Panels for Every Role",
    description: "Each role gets its own dashboard, tools and access permissions.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Business Data",
    description: "Role-based access controls help protect sensitive business information.",
  },
  {
    icon: Workflow,
    title: "Your Workflow, Your Rules",
    description: "Configure modules and workflows to match how your team operates.",
  },
];

const roles = [
  { name: "Admin", icon: ShieldCheck, detail: "System and user control" },
  { name: "Manager", icon: Users, detail: "Team and approvals" },
  { name: "Accountant", icon: Wallet, detail: "Finance and accounts" },
  { name: "Employee", icon: ClipboardList, detail: "Tasks and attendance" },
];

function WorkspacePreview() {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between bg-[#232466] px-4 py-3 text-white">
        <div className="flex items-center gap-2.5">
          <div className="rounded-lg bg-white/10 p-2">
            <PanelsTopLeft size={18} />
          </div>
          <div>
            <p className="text-xs font-bold">Business Workspace</p>
            <p className="mt-0.5 text-[9px] text-indigo-200">Customized ERP dashboard</p>
          </div>
        </div>
        <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-[9px] font-semibold text-emerald-200">
          Secure Access
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 bg-slate-50 p-3">
        {[
          ["Customers", "128"],
          ["Projects", "24"],
          ["Open Tasks", "08"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-lg border border-slate-200 bg-white p-3">
            <p className="text-xl font-bold text-[#232466]">{value}</p>
            <p className="mt-1 text-[10px] text-slate-500">{label}</p>
          </div>
        ))}
      </div>

      <div className="p-3 pt-0">
        <div className="rounded-lg border border-slate-200 bg-white p-3">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-bold text-slate-800">Your Business Applications</p>
            <span className="text-[9px] text-slate-400">Quick access</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[
              { icon: Users, label: "Customers" },
              { icon: Wallet, label: "Accounts" },
              { icon: ClipboardList, label: "Tasks" },
              { icon: MessageCircle, label: "WorkChat" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 rounded-lg bg-slate-50 px-1 py-3">
                <Icon size={19} className="text-[#232466]" />
                <span className="text-center text-[9px] text-slate-600">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function RoleAccessPanel() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3.5">
      <div className="mb-3 flex items-center gap-2.5">
        <div className="rounded-lg bg-[#F1F1FA] p-2">
          <LockKeyhole size={17} className="text-[#232466]" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-slate-900">
            A Dedicated Panel for Every Role
          </h3>
          <p className="mt-1 text-[10px] text-slate-500">
            Users see only the tools they are permitted to access.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {roles.map(({ name, icon: Icon, detail }) => (
          <div key={name} className="flex items-center gap-2 rounded-lg border border-slate-100 p-2.5">
            <div className="rounded-lg bg-[#F1F1FA] p-2">
              <Icon size={16} className="text-[#232466]" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-bold text-slate-800">{name}</p>
              <p className="mt-1 text-[9px] leading-3.5 text-slate-500">{detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlatformCard({ icon: Icon, title, subtitle }) {
  return (
    <div className="flex flex-1 items-center gap-3 rounded-xl border border-slate-200 bg-white p-3">
      <div className="rounded-lg bg-[#F1F1FA] p-2.5">
        <Icon size={21} className="text-[#232466]" />
      </div>
      <div>
        <p className="text-xs font-bold text-slate-800">{title}</p>
        <p className="mt-1 text-[10px] text-slate-500">{subtitle}</p>
      </div>
      <CheckCircle2 size={16} className="ml-auto shrink-0 text-emerald-600" />
    </div>
  );
}

export default function CustomizedWorkspaceSlide() {
  return (
    <section className="flex h-full w-full flex-col overflow-hidden bg-white px-6 py-4 lg:px-9">
      <ERPHeader title="Customized Business Workspace" />

      <div className="mt-3 flex shrink-0 items-center justify-between gap-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#EF5622]">
            Software built around you
          </p>
          <h2 className="mt-1 text-xl font-bold tracking-tight text-[#232466] xl:text-2xl">
            Your Business. Your Design. Your Control.
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            A customized business application built for the way your company works.
          </p>
        </div>
        <div className="hidden shrink-0 rounded-lg bg-[#F1F1FA] px-3 py-2 text-[10px] font-semibold text-[#232466] sm:block">
          CUSTOMIZED ERP SOLUTIONS
        </div>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-2 items-center gap-5 py-4">
        <div className="flex min-w-0 flex-col gap-3">
          <WorkspacePreview />

          <div className="flex gap-3">
            <PlatformCard
              icon={Monitor}
              title="Web Application"
              subtitle="Access from your browser"
            />
            <PlatformCard
              icon={Smartphone}
              title="Mobile Application"
              subtitle="Work on the go"
            />
          </div>

          <div className="flex items-center gap-2 px-1 text-[10px] text-slate-500">
            <Globe size={14} className="text-[#232466]" />
            <span>Two platforms. One connected business experience.</span>
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-3">
          <div className="rounded-xl bg-[#232466] p-4 text-white">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
              <Settings2 size={20} className="text-orange-400" />
            </div>
            <h3 className="mt-3 text-xl font-bold leading-tight xl:text-2xl">
              Designed Specifically for Your Business
            </h3>
            <p className="mt-2 text-xs leading-5 text-indigo-100">
              We build the layout, modules and workflows around your requirements instead of forcing your business to adapt to generic software.
            </p>
          </div>

          <RoleAccessPanel />

          <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 p-3.5">
            <div className="flex items-center gap-2">
              <ShieldCheck size={19} className="shrink-0 text-emerald-700" />
              <h3 className="text-xs font-bold text-slate-900">
                Your Business Data Deserves Protection
              </h3>
            </div>
            <p className="mt-1.5 text-[10px] leading-4 text-slate-600">
              Access permissions and security controls help keep sensitive business information accessible only to authorized users.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}