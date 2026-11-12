
import {
    BarChart3,
    FileText,
    Users,
    GraduationCap,
    IndianRupee,
} from "lucide-react";

const features = [
    {
        icon: FileText,
        title: "Academic Reports",
        description: "Generate admission, course, and academic performance reports.",
    },
    {
        icon: Users,
        title: "Student Reports",
        description: "Access student details, attendance, and enrollment records.",
    },
    {
        icon: IndianRupee,
        title: "Fee Reports",
        description: "Review fee collections, pending payments, and transactions.",
    },
    {
        icon: BarChart3,
        title: "Data Analytics",
        description: "Understand college operations through organized data summaries.",
    },
];

const reportData = [
    { label: "Admissions", value: "245", width: "85%" },
    { label: "Active Students", value: "820", width: "95%" },
    { label: "Fee Collection", value: "₹42.5L", width: "72%" },
    { label: "Attendance", value: "92%", width: "92%" },
];

const ReportsAnalyticsSlide = () => {
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
                    Insights & Performance
                </p>
                <h1 className="text-4xl font-bold tracking-tight">
                    Reports & Analytics
                </h1>
                <p className="mt-3 max-w-3xl text-base leading-7 text-gray-500">
                    Access meaningful college data through organized reports
                    and analytics for academic, administrative, and financial
                    activities.
                </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8">
                {/* Analytics Preview */}
                <div className="rounded-2xl bg-[#232466] p-7 text-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-white/60">
                                College Overview
                            </p>
                            <h2 className="mt-1 text-2xl font-bold">
                                Performance Summary
                            </h2>
                        </div>
                        <div className="rounded-xl bg-white/10 p-3">
                            <BarChart3 size={26} />
                        </div>
                    </div>

                    <div className="mt-8 space-y-6">
                        {reportData.map((item) => (
                            <div key={item.label}>
                                <div className="mb-2 flex items-center justify-between">
                                    <span className="text-sm text-white/70">
                                        {item.label}
                                    </span>
                                    <span className="text-sm font-semibold">
                                        {item.value}
                                    </span>
                                </div>
                                <div className="h-2 overflow-hidden rounded-full bg-white/15">
                                    <div
                                        className="h-full rounded-full bg-[#EF5622]"
                                        style={{ width: item.width }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 p-4">
                        <FileText size={21} className="text-[#EF5622]" />
                        <div>
                            <p className="text-sm font-semibold">
                                Report Generation
                            </p>
                            <p className="mt-1 text-xs text-white/50">
                                Organized reports for college administration
                            </p>
                        </div>
                    </div>

                    <p className="mt-4 text-xs text-white/40">
                        Illustrative analytics data
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

export default ReportsAnalyticsSlide;
