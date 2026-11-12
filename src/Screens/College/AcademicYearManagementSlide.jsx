
import {
    CalendarDays,
    CalendarCheck,
    BookOpen,
    Users,
    Clock,
} from "lucide-react";

const features = [
    {
        icon: CalendarDays,
        title: "Academic Year Setup",
        description: "Create and manage academic years for the college.",
    },
    {
        icon: CalendarCheck,
        title: "Semester Planning",
        description: "Configure semester dates and academic schedules.",
    },
    {
        icon: BookOpen,
        title: "Academic Structure",
        description: "Organize courses and semesters within each academic year.",
    },
    {
        icon: Clock,
        title: "Year-wise Records",
        description: "Maintain academic information for previous and current years.",
    },
];

const AcademicYearManagementSlide = () => {
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
                    Academic Administration
                </p>
                <h1 className="text-4xl font-bold tracking-tight">
                    Academic Year Management
                </h1>
                <p className="mt-3 max-w-3xl text-base leading-7 text-gray-500">
                    Organize academic years, semester schedules, and course
                    structures while maintaining year-wise academic records.
                </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8">
                {/* Academic Year Preview */}
                <div className="rounded-2xl bg-[#232466] p-7 text-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-white/60">
                                Current Academic Session
                            </p>
                            <h2 className="mt-1 text-3xl font-bold">
                                2026 – 2027
                            </h2>
                        </div>
                        <div className="rounded-xl bg-white/10 p-3">
                            <CalendarDays size={26} />
                        </div>
                    </div>

                    <div className="mt-8 rounded-xl border border-white/10 bg-white/10 p-5">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-white/70">
                                Semester 1
                            </span>
                            <span className="rounded-full bg-green-400/20 px-3 py-1 text-xs text-green-200">
                                Active
                            </span>
                        </div>
                        <p className="mt-3 text-lg font-semibold">
                            June 2026 – October 2026
                        </p>
                        <div className="mt-5 border-t border-white/10 pt-4">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-white/60">
                                    Semester 2
                                </span>
                                <span className="text-white/80">
                                    November 2026 – April 2027
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 flex items-center gap-3 text-sm text-white/70">
                        <CalendarCheck size={18} />
                        Academic calendar and semester planning
                    </div>

                    <p className="mt-4 text-xs text-white/40">
                        Illustrative academic schedule
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

export default AcademicYearManagementSlide;
