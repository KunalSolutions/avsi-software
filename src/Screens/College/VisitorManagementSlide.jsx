
import {
    Users,
    UserPlus,
    ClipboardList,
    LogIn,
    LogOut,
} from "lucide-react";

const features = [
    {
        icon: UserPlus,
        title: "Visitor Registration",
        description: "Record visitor details and purpose of visit.",
    },
    {
        icon: ClipboardList,
        title: "Visit Records",
        description: "Maintain a centralized record of campus visitors.",
    },
    {
        icon: LogIn,
        title: "Entry Tracking",
        description: "Record visitor check-in time at the security desk.",
    },
    {
        icon: LogOut,
        title: "Exit Tracking",
        description: "Record check-out time when visitors leave campus.",
    },
];

const visitors = [
    {
        name: "Amit Sharma",
        purpose: "Meeting with Principal",
        time: "10:15 AM",
        status: "Checked In",
    },
    {
        name: "Neha Patel",
        purpose: "Admission Enquiry",
        time: "11:30 AM",
        status: "Checked Out",
    },
    {
        name: "Raj Mehta",
        purpose: "Document Submission",
        time: "12:05 PM",
        status: "Checked In",
    },
];

const VisitorManagementSlide = () => {
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
                    Campus Administration
                </p>
                <h1 className="text-4xl font-bold tracking-tight">
                    Visitor Management
                </h1>
                <p className="mt-3 max-w-3xl text-base leading-7 text-gray-500">
                    Manage campus visitors with organized registration,
                    entry tracking, and exit records through a centralized
                    visitor management system.
                </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8">
                {/* Visitor Records Preview */}
                <div className="rounded-2xl bg-[#232466] p-7 text-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-white/60">
                                Security Desk
                            </p>
                            <h2 className="mt-1 text-2xl font-bold">
                                Visitor Records
                            </h2>
                        </div>
                        <div className="rounded-xl bg-white/10 p-3">
                            <Users size={26} />
                        </div>
                    </div>

                    <div className="mt-7 space-y-3">
                        {visitors.map((visitor) => (
                            <div
                                key={visitor.name}
                                className="rounded-xl border border-white/10 bg-white/10 p-4"
                            >
                                <div className="flex items-center justify-between gap-3">
                                    <p className="font-semibold">
                                        {visitor.name}
                                    </p>
                                    <span
                                        className={`rounded-full px-3 py-1 text-xs ${
                                            visitor.status === "Checked In"
                                                ? "bg-green-400/20 text-green-200"
                                                : "bg-white/15 text-white/70"
                                        }`}
                                    >
                                        {visitor.status}
                                    </span>
                                </div>

                                <p className="mt-2 text-sm text-white/60">
                                    {visitor.purpose}
                                </p>

                                <div className="mt-3 flex items-center gap-2 text-xs text-white/50">
                                    <LogIn size={14} />
                                    {visitor.time}
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="mt-4 text-xs text-white/40">
                        Illustrative visitor records
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

export default VisitorManagementSlide;
