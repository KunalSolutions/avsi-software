
import {
    Building2,
    Workflow,
    MonitorSmartphone,
    Settings,
    Headset,
} from "lucide-react";

const benefits = [
    {
        icon: Workflow,
        title: "Centralized Management",
        description: "Manage academic and administrative activities in one system.",
    },
    {
        icon: MonitorSmartphone,
        title: "Easy Accessibility",
        description: "Access relevant information through a simple interface.",
    },
    {
        icon: Settings,
        title: "Flexible Solution",
        description: "Adapt modules and workflows to college requirements.",
    },
    {
        icon: Headset,
        title: "Dedicated Support",
        description: "Get assistance for implementation and system usage.",
    },
];

const WhyChooseAVSICollegeERPSlide = () => {
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
                    Your College. One Connected System.
                </p>
                <h1 className="text-4xl font-bold tracking-tight">
                    Why Choose AVSI College ERP?
                </h1>
                <p className="mt-3 max-w-3xl text-base leading-7 text-gray-500">
                    Simplify college operations with a centralized,
                    configurable ERP solution designed to bring academic
                    and administrative workflows together.
                </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8">
                {/* AVSI Highlight Panel */}
                <div className="relative overflow-hidden rounded-2xl bg-[#232466] p-8 text-white">
                    <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/5" />
                    <div className="relative">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EF5622]">
                            <Building2 size={29} />
                        </div>

                        <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-white/50">
                            AVSI Technologies
                        </p>

                        <h2 className="mt-3 text-3xl font-bold leading-tight">
                            Smarter College
                            <br />
                            Management.
                        </h2>

                        <p className="mt-4 max-w-sm text-sm leading-7 text-white/65">
                            A unified platform to organize student records,
                            academic processes, administration, and
                            day-to-day college operations.
                        </p>

                        <div className="mt-8 border-t border-white/15 pt-6">
                            <p className="text-sm font-semibold text-[#EF5622]">
                                One Platform. Connected Operations.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-2 gap-4">
                    {benefits.map((benefit) => {
                        const Icon = benefit.icon;

                        return (
                            <div
                                key={benefit.title}
                                className="rounded-2xl border border-gray-100 bg-[#F8F9FC] p-5"
                            >
                                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#EF5622]/10 text-[#EF5622]">
                                    <Icon size={22} />
                                </div>
                                <h3 className="text-base font-bold">
                                    {benefit.title}
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-gray-500">
                                    {benefit.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="mt-7 flex items-center justify-between rounded-xl border border-gray-100 px-6 py-4">
                <p className="text-sm font-semibold">
                    AVSI Technologies
                </p>
                <p className="text-sm text-gray-500">
                    College ERP Management System
                </p>
                <p className="text-sm font-semibold text-[#EF5622]">
                    Ready for a Demo?
                </p>
            </div>
        </div>
    );
};

export default WhyChooseAVSICollegeERPSlide;
