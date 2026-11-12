
import {
    Users,
    ShieldCheck,
    UserCog,
    GraduationCap,
    LockKeyhole,
} from "lucide-react";

const features = [
    {
        icon: UserCog,
        title: "User Management",
        description: "Create, update, and manage college user accounts.",
    },
    {
        icon: ShieldCheck,
        title: "Role Management",
        description: "Assign roles according to staff and student responsibilities.",
    },
    {
        icon: LockKeyhole,
        title: "Access Permissions",
        description: "Control access to modules based on assigned roles.",
    },
    {
        icon: Users,
        title: "Account Status",
        description: "Manage active and inactive user accounts.",
    },
];

const roles = [
    { name: "Admin", description: "System administration", count: 2 },
    { name: "Management", description: "College operations", count: 3 },
    { name: "Receptionist", description: "Admission and enquiries", count: 4 },
    { name: "Faculty", description: "Academic activities", count: 24 },
    { name: "Student", description: "Student portal access", count: 350 },
];

const UserRoleManagementSlide = () => {
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
                    System Administration
                </p>
                <h1 className="text-4xl font-bold tracking-tight">
                    User & Role Management
                </h1>
                <p className="mt-3 max-w-3xl text-base leading-7 text-gray-500">
                    Manage college users, assign appropriate roles, and
                    control access to system modules through centralized
                    user administration.
                </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8">
                {/* User Roles Preview */}
                <div className="rounded-2xl bg-[#232466] p-7 text-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-white/60">
                                Access Administration
                            </p>
                            <h2 className="mt-1 text-2xl font-bold">
                                User Roles
                            </h2>
                        </div>
                        <div className="rounded-xl bg-white/10 p-3">
                            <ShieldCheck size={26} />
                        </div>
                    </div>

                    <div className="mt-6 space-y-2">
                        {roles.map((role) => (
                            <div
                                key={role.name}
                                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/10 px-4 py-3"
                            >
                                <div>
                                    <p className="text-sm font-semibold">
                                        {role.name}
                                    </p>
                                    <p className="mt-1 text-xs text-white/50">
                                        {role.description}
                                    </p>
                                </div>
                                <span className="rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold">
                                    {role.count}
                                </span>
                            </div>
                        ))}
                    </div>

                    <p className="mt-4 text-xs text-white/40">
                        Illustrative user and role records
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

export default UserRoleManagementSlide;
