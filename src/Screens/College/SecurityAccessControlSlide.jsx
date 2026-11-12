
import {
    ShieldCheck,
    LockKeyhole,
    UserCheck,
    KeyRound,
    ClipboardCheck,
} from "lucide-react";

const features = [
    {
        icon: LockKeyhole,
        title: "Secure Login",
        description: "Provide individual login access to authorized users.",
    },
    {
        icon: UserCheck,
        title: "Role-Based Access",
        description: "Control system access according to assigned user roles.",
    },
    {
        icon: KeyRound,
        title: "Access Permissions",
        description: "Restrict access to relevant modules and activities.",
    },
    {
        icon: ClipboardCheck,
        title: "Activity Monitoring",
        description: "Maintain visibility into important system activities.",
    },
];

const permissions = [
    { role: "Admin", access: "Full System Access" },
    { role: "Management", access: "Management Modules" },
    { role: "Faculty", access: "Academic Modules" },
    { role: "Student", access: "Student Portal" },
];

const SecurityAccessControlSlide = () => {
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
                    System Protection
                </p>
                <h1 className="text-4xl font-bold tracking-tight">
                    Security & Access Control
                </h1>
                <p className="mt-3 max-w-3xl text-base leading-7 text-gray-500">
                    Manage secure system access through individual user
                    accounts, role-based permissions, and controlled
                    access to college ERP modules.
                </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8">
                {/* Security Preview */}
                <div className="rounded-2xl bg-[#232466] p-7 text-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-white/60">
                                Access Management
                            </p>
                            <h2 className="mt-1 text-2xl font-bold">
                                Role Permissions
                            </h2>
                        </div>
                        <div className="rounded-xl bg-white/10 p-3">
                            <ShieldCheck size={26} />
                        </div>
                    </div>

                    <div className="mt-7 space-y-3">
                        {permissions.map((permission) => (
                            <div
                                key={permission.role}
                                className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/10 p-4"
                            >
                                <div>
                                    <p className="font-semibold">
                                        {permission.role}
                                    </p>
                                    <p className="mt-1 text-xs text-white/50">
                                        {permission.access}
                                    </p>
                                </div>
                                <ShieldCheck
                                    size={20}
                                    className="shrink-0 text-green-300"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex items-center gap-3 rounded-xl bg-white/10 p-4">
                        <LockKeyhole size={20} className="text-[#EF5622]" />
                        <span className="text-sm text-white/80">
                            Controlled access to ERP modules
                        </span>
                    </div>

                    <p className="mt-4 text-xs text-white/40">
                        Illustrative permission structure
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

export default SecurityAccessControlSlide;
