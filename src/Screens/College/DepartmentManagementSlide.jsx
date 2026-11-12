
import {
    Building2,
    Users,
    UserRound,
    BookOpen,
    GraduationCap,
} from "lucide-react";

const features = [
    {
        icon: Building2,
        title: "Department Directory",
        description: "Create and manage all college departments in one place.",
    },
    {
        icon: UserRound,
        title: "Department Head",
        description: "Assign and manage department heads for each department.",
    },
    {
        icon: Users,
        title: "Faculty Allocation",
        description: "Organize faculty members according to their departments.",
    },
    {
        icon: BookOpen,
        title: "Course Mapping",
        description: "Connect courses and subjects with their respective departments.",
    },
];

const departments = [
    { name: "Science", head: "Dr. Priya Mehta", faculty: 12, courses: 4 },
    { name: "Commerce", head: "Prof. Amit Shah", faculty: 8, courses: 3 },
    { name: "Arts", head: "Dr. Neha Joshi", faculty: 10, courses: 5 },
];

const DepartmentManagementSlide = () => {
    return (
        <div className="min-h-screen w-full overflow-hidden bg-white px-12 py-10 text-[#232466]">
            {/* Header */}
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

            {/* Heading */}
            <div className="mt-12">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#EF5622]">
                    Academic Administration
                </p>

                <h1 className="text-4xl font-bold tracking-tight">
                    Department Management
                </h1>

                <p className="mt-3 max-w-3xl text-base leading-7 text-gray-500">
                    Manage college departments, assign department heads,
                    organize faculty members, and connect academic courses
                    through one centralized system.
                </p>
            </div>

            {/* Main Content */}
            <div className="mt-10 grid grid-cols-2 gap-8">
                {/* Department Preview */}
                <div className="rounded-2xl bg-[#232466] p-7 text-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-white/60">
                                Department Overview
                            </p>
                            <h2 className="mt-1 text-2xl font-bold">
                                College Departments
                            </h2>
                        </div>

                        <div className="rounded-xl bg-white/10 p-3">
                            <Building2 size={25} />
                        </div>
                    </div>

                    <div className="mt-7 space-y-3">
                        {departments.map((department) => (
                            <div
                                key={department.name}
                                className="rounded-xl border border-white/10 bg-white/10 p-4"
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold">
                                        {department.name}
                                    </h3>
                                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs">
                                        Active
                                    </span>
                                </div>

                                <p className="mt-2 text-sm text-white/60">
                                    Head: {department.head}
                                </p>

                                <div className="mt-3 flex gap-5 text-xs text-white/75">
                                    <span>
                                        {department.faculty} Faculty
                                    </span>
                                    <span>
                                        {department.courses} Courses
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="mt-4 text-xs text-white/40">
                        Illustrative department records
                    </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4">
                    {features.map((feature, index) => {
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

export default DepartmentManagementSlide;
