
import {
    LayoutDashboard,
    Users,
    GraduationCap,
    Wallet,
    CalendarCheck,
} from "lucide-react";

const features = [
    {
        icon: Users,
        title: "Student Overview",
        description: "Get a quick view of student strength and admissions.",
    },
    {
        icon: GraduationCap,
        title: "Academic Summary",
        description: "Access courses, faculty, and academic information.",
    },
    {
        icon: Wallet,
        title: "Fee Overview",
        description: "Monitor fee collection and pending payment summaries.",
    },
    {
        icon: CalendarCheck,
        title: "Daily Activities",
        description: "Review attendance and important college activities.",
    },
];

const stats = [
    { label: "Total Students", value: "820", icon: Users },
    { label: "Faculty Members", value: "48", icon: GraduationCap },
    { label: "Active Courses", value: "12", icon: LayoutDashboard },
    { label: "Attendance", value: "92%", icon: CalendarCheck },
];

const activities = [
    { title: "New admission registered", time: "10:30 AM" },
    { title: "Faculty attendance updated", time: "11:15 AM" },
    { title: "Fee payment recorded", time: "12:05 PM" },
];

const DashboardOverviewSlide = () => {
    return (
        <div className="min-h-screen w-full overflow-hidden bg-white px-12 py-10 text-[#232466]">
            <div className="flex items-center justify-between">
                <img
                    src="https://avsitechnologies.in/AVSI_LOGO.png"
                    alt="AVSI Technologies"
                    className="h-12 object-contain"
                />
                <p className="text-sm font-semibold tracking-widest text-gray-400">
                    COLLEGE ERP MANAGEMENT SYSTEM
                </p>
            </div>

            <div className="mt-12">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#EF5622]">
                    Centralized College Operations
                </p>
                <h1 className="text-4xl font-bold tracking-tight">
                    Dashboard & Overview
                </h1>
                <p className="mt-3 max-w-3xl text-base leading-7 text-gray-500">
                    Get a consolidated view of college activities, key
                    statistics, and recent updates through a centralized
                    dashboard.
                </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8">
                {/* Dashboard Preview */}
                <div className="rounded-2xl bg-[#232466] p-7 text-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-white/60">
                                Administration Panel
                            </p>
                            <h2 className="mt-1 text-2xl font-bold">
                                College Dashboard
                            </h2>
                        </div>
                        <div className="rounded-xl bg-white/10 p-3">
                            <LayoutDashboard size={26} />
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                        {stats.map((stat) => {
                            const Icon = stat.icon;

                            return (
                                <div
                                    key={stat.label}
                                    className="rounded-xl border border-white/10 bg-white/10 p-4"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-white/60">
                                            {stat.label}
                                        </span>
                                        <Icon size={17} className="text-[#EF5622]" />
                                    </div>
                                    <p className="mt-3 text-2xl font-bold">
                                        {stat.value}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-5">
                        <p className="mb-3 text-sm font-semibold">
                            Recent Activities
                        </p>

                        <div className="space-y-2">
                            {activities.map((activity) => (
                                <div
                                    key={activity.title}
                                    className="flex items-center justify-between gap-3 rounded-lg bg-white/10 px-3 py-2.5"
                                >
                                    <span className="text-xs text-white/80">
                                        {activity.title}
                                    </span>
                                    <span className="shrink-0 text-xs text-white/40">
                                        {activity.time}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="mt-4 text-xs text-white/40">
                        Illustrative dashboard data
                    </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4">
                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.title}
                                className="rounded-2xl border border-gray-100 bg-[#F8F9FC] p-5"
                            >
                                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#EF5622]/10 text-[#EF5622]">
                                    <Icon size={22} />
                                </div>
                                <h3 className="text-base font-bold">
                                    {feature.title}
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-gray-500">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default DashboardOverviewSlide;
