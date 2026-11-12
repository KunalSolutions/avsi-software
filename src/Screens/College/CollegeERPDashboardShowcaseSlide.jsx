
import {
  GraduationCap,
  LayoutDashboard,
  Users,
  Wallet,
  BookOpen,
  CalendarCheck,
  ClipboardList,
  TrendingUp,
  Bell,
  Search,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Globe,
  Mail,
  Phone,
  ChevronRight,
} from "lucide-react";

export default function CollegeERPDashboardShowcaseSlide() {
  const stats = [
    {
      title: "Total Students",
      value: "2,450",
      change: "+12.5%",
      icon: Users,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Total Faculty",
      value: "125",
      change: "+8.2%",
      icon: GraduationCap,
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Fee Collection",
      value: "₹24.5L",
      change: "+15.8%",
      icon: Wallet,
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "Attendance",
      value: "94.8%",
      change: "+4.3%",
      icon: CalendarCheck,
      color: "bg-green-50 text-green-600",
    },
  ];

  const modules = [
    { name: "Admissions", icon: ClipboardList },
    { name: "Students", icon: Users },
    { name: "Courses", icon: BookOpen },
    { name: "Faculty", icon: GraduationCap },
    { name: "Fees", icon: Wallet },
    { name: "Attendance", icon: CalendarCheck },
  ];

  const activities = [
    { name: "New admission registered", time: "10:45 AM", color: "bg-blue-500" },
    { name: "Fee payment received", time: "10:20 AM", color: "bg-green-500" },
    { name: "Faculty attendance marked", time: "09:55 AM", color: "bg-orange-500" },
  ];

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#f8f9fc] px-5 py-6 sm:px-9 sm:py-7 lg:px-12">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-indigo-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-orange-100/40 blur-3xl" />

      {/* Main Content */}
      <section className="relative z-10 grid flex-1 items-center gap-8 py-7 lg:grid-cols-[0.78fr_1.35fr] lg:gap-10">
        {/* Left Promotional Content */}
        <div>
          <div className="mb-5 inline-flex items-center">
              <img
                src="https://avsitechnologies.in/AVSI_LOGO.png"
                alt="AVSI Technologies"
                className="h-11 w-auto object-contain"
              />

            </div>

          <h1 className="text-4xl font-black leading-[1.12] tracking-tight text-[#232466] sm:text-5xl xl:text-[58px]">
            One Platform.
            <br />
            <span className="text-[#EF5622]">Complete</span>
            <br />
            College Control.
          </h1>

          <p className="mt-5 max-w-md text-sm leading-7 text-slate-500 sm:text-[15px]">
            Transform your institution with an integrated College ERP
            system. Manage academic, administrative, and operational
            activities through one intelligent platform.
          </p>

          {/* Features */}
          <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-3">
            {modules.map((module) => (
              <div key={module.name} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="shrink-0 text-[#EF5622]" />
                <span className="text-xs font-semibold text-slate-700">
                  {module.name}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 overflow-hidden rounded-2xl bg-[#232466] shadow-xl shadow-indigo-200/60">
            <div className="p-5 sm:p-6">

              <h3 className=" text-2xl font-black text-white">
                Book Your FREE Demo
              </h3>

              <p className="mt-2 text-xs leading-5 text-indigo-100">
                Discover how AVSI College ERP can simplify your
                institution's everyday management.
              </p>

              <div className="mt-4 flex items-center gap-2 text-sm font-bold text-white">
                Let's connect with our team
                <ChevronRight size={17} className="text-orange-300" />
              </div>
            </div>

            <div className="h-1 bg-gradient-to-r from-[#EF5622] via-orange-300 to-transparent" />
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative min-w-0">
          <div className="absolute -right-6 -top-8 h-44 w-44 rounded-full bg-orange-100/70 blur-3xl" />
          <div className="absolute -bottom-8 -left-8 h-48 w-48 rounded-full bg-indigo-100 blur-3xl" />

          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-300/60">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 sm:px-5">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#232466] text-white">
                  <GraduationCap size={17} />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-[#232466]">
                    College ERP
                  </p>
                  <p className="text-[9px] text-slate-400">
                    Management Portal
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <Search size={15} />
                <Bell size={15} />
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-100 text-[10px] font-bold text-[#EF5622]">
                  AD
                </div>
              </div>
            </div>

            <div className="flex min-h-[390px]">
              {/* Sidebar */}
              <aside className="hidden w-36 shrink-0 border-r border-slate-100 bg-slate-50/70 p-3 sm:block">
                <p className="mb-3 px-2 text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  Main Menu
                </p>

                <div className="space-y-1">
                  {[
                    "Dashboard",
                    "Admissions",
                    "Students",
                    "Courses",
                    "Departments",
                    "Attendance",
                    "Examinations",
                    "Fees & Payments",
                    "Library",
                    "Visitor",
                    "Reports",
                    "Settings",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className={`rounded-lg px-2 py-2 text-[10px] font-semibold ${
                        index === 0
                          ? "bg-[#232466] text-white shadow-md shadow-indigo-100"
                          : "text-slate-500"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </aside>

              {/* Dashboard Body */}
              <div className="min-w-0 flex-1 bg-[#fafbff] p-3 sm:p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-extrabold text-[#232466]">
                      Dashboard Overview
                    </h3>
                    <p className="mt-1 text-[9px] text-slate-400">
                      Welcome back, Administrator!
                    </p>
                  </div>
                  <span className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-[9px] font-semibold text-slate-500">
                    2026–27
                  </span>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {stats.map((stat) => {
                    const Icon = stat.icon;

                    return (
                      <div
                        key={stat.title}
                        className="rounded-xl border border-slate-100 bg-white p-2.5 shadow-sm sm:p-3"
                      >
                        <div className={`mb-2 flex h-7 w-7 items-center justify-center rounded-lg ${stat.color}`}>
                          <Icon size={15} />
                        </div>
                        <p className="text-[9px] text-slate-400">
                          {stat.title}
                        </p>
                        <p className="mt-1 text-base font-black text-[#232466]">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-[8px] font-bold text-green-600">
                          {stat.change} this year
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Chart and Activities */}
                <div className="mt-3 grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
                  <div className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-[11px] font-bold text-[#232466]">
                        Student Admissions
                      </p>
                      <TrendingUp size={15} className="text-green-500" />
                    </div>

                    <div className="flex h-28 items-end justify-around gap-2 border-b border-slate-100 px-2">
                      {[42, 65, 50, 78, 60, 90, 72, 100, 83, 94, 75, 110].map(
                        (height, index) => (
                          <div
                            key={index}
                            className="w-full max-w-4 rounded-t-sm bg-[#7778C2]"
                            style={{ height: `${height / 1.15}px` }}
                          />
                        )
                      )}
                    </div>

                    <div className="mt-2 flex justify-between text-[8px] text-slate-400">
                      <span>Jan</span>
                      <span>Mar</span>
                      <span>May</span>
                      <span>Jul</span>
                      <span>Sep</span>
                      <span>Dec</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm">
                    <p className="mb-4 text-[11px] font-bold text-[#232466]">
                      Recent Activities
                    </p>

                    <div className="space-y-4">
                      {activities.map((activity) => (
                        <div key={activity.name} className="flex gap-2">
                          <div className={`mt-1 h-2 w-2 shrink-0 rounded-full ${activity.color}`} />
                          <div>
                            <p className="text-[9px] font-semibold leading-4 text-slate-600">
                              {activity.name}
                            </p>
                            <p className="mt-1 text-[8px] text-slate-400">
                              {activity.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick Access */}
                <div className="mt-3 rounded-xl border border-slate-100 bg-white p-3 shadow-sm">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-[11px] font-bold text-[#232466]">
                      Quick Access
                    </p>
                    <LayoutDashboard size={14} className="text-slate-400" />
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {modules.map((module) => {
                      const Icon = module.icon;

                      return (
                        <div
                          key={module.name}
                          className="flex items-center gap-1.5 rounded-lg bg-slate-50 p-2"
                        >
                          <Icon size={12} className="text-[#EF5622]" />
                          <span className="text-[8px] font-semibold text-slate-600">
                            {module.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Bottom */}
            <div className="flex items-center justify-between border-t border-slate-100 bg-white px-4 py-2">
              <span className="text-[9px] font-semibold text-slate-400">
                Powered by AVSI Technologies
              </span>
              <span className="flex items-center gap-1 text-[9px] font-bold text-green-600">
                <ShieldCheck size={12} />
                Secure Platform
              </span>
            </div>
          </div>

          {/* Floating Dashboard Label */}
          <div className="absolute -bottom-5 right-3 flex items-center gap-2 rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-xl sm:right-7">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-50 text-green-600">
              <CheckCircle2 size={18} />
            </div>
            <div>
              <p className="text-[10px] font-extrabold text-[#232466]">
                Everything Connected
              </p>
              <p className="text-[9px] text-slate-400">
                One platform. Complete control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Contact Footer */}
      <footer className="relative z-10 mt-3 rounded-2xl bg-white px-4 py-4 shadow-sm ring-1 ring-slate-200 sm:px-6">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs font-black tracking-wide text-[#232466]">
              READY TO UPGRADE YOUR COLLEGE?
            </p>
            <p className="mt-1 text-[10px] text-slate-500">
              Connect with AVSI Technologies for your FREE ERP demo.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <a
              href="tel:+917709683131"
              className="flex items-center gap-2 text-[10px] font-semibold text-slate-600 hover:text-[#EF5622]"
            >
              <Phone size={14} className="text-[#EF5622]" />
              +91 77096 83131
            </a>

            <a
              href="https://wa.me/919511609437"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-[10px] font-semibold text-slate-600 hover:text-[#EF5622]"
            >
              <Phone size={14} className="text-[#EF5622]" />
              +91 95116 09437
            </a>

            <a
              href="mailto:info@avsi.in"
              className="flex items-center gap-2 text-[10px] font-semibold text-slate-600 hover:text-[#EF5622]"
            >
              <Mail size={14} className="text-[#EF5622]" />
              info@avsi.in
            </a>

            <a
              href="https://avsitechnologies.in/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-[10px] font-semibold text-slate-600 hover:text-[#EF5622]"
            >
              <Globe size={14} className="text-[#EF5622]" />
              avsitechnologies.in
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
