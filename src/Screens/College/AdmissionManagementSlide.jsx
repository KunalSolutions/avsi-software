
import {
  ClipboardList,
  FileCheck,
  SearchCheck,
  CheckCircle2,
  UserPlus,
  GraduationCap,
  Clock3,
  XCircle,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Application Received",
    description: "Register student details and create an admission record.",
    icon: UserPlus,
  },
  {
    number: "02",
    title: "Application Review",
    description: "Review submitted information and verify eligibility.",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "Document Verification",
    description: "Check and update the status of required documents.",
    icon: FileCheck,
  },
  {
    number: "04",
    title: "Admission Confirmation",
    description: "Approve the application and confirm student admission.",
    icon: GraduationCap,
  },
];

const statusItems = [
  { label: "Pending", icon: Clock3, color: "text-amber-600", bg: "bg-amber-50" },
  { label: "Under Review", icon: SearchCheck, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Approved", icon: CheckCircle2, color: "text-green-600", bg: "bg-green-50" },
  { label: "Rejected", icon: XCircle, color: "text-red-500", bg: "bg-red-50" },
];

export default function AdmissionManagementSlide() {
  return (
    <div className="relative aspect-video w-full overflow-hidden bg-white px-12 py-9 text-[#232466]">
      <div className="flex items-center justify-between">
        <img
          src="https://avsitechnologies.in/AVSI_LOGO.png"
          alt="AVSI Technologies"
          className="h-10 object-contain"
        />
        <span className="text-xs font-semibold tracking-[0.2em] text-[#EF5622]">
          ADMISSION MANAGEMENT
        </span>
      </div>

      <div className="mt-8">
        <p className="text-sm font-bold uppercase tracking-widest text-[#EF5622]">
          Simplified Admission Process
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Manage Admissions from
          <span className="block text-[#EF5622]">Application to Enrollment.</span>
        </h1>
        <p className="mt-3 max-w-3xl text-base text-gray-500">
          Handle student applications, verify documents and track admission
          progress through one organised system.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-[1.5fr_1fr] gap-7">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <ClipboardList size={18} className="text-[#EF5622]" />
            <h2 className="text-base font-bold">Admission Workflow</h2>
          </div>

          <div className="space-y-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="flex items-center gap-4 rounded-xl border border-gray-100 bg-[#FAFAFC] p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#232466]/10 text-[#232466]">
                    <Icon size={21} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#EF5622]">
                        STEP {step.number}
                      </span>
                      <h3 className="text-sm font-bold">{step.title}</h3>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      {step.description}
                    </p>
                  </div>

                  {index < steps.length - 1 && (
                    <ArrowRight size={17} className="shrink-0 text-gray-300" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-2">
            <FileCheck size={18} className="text-[#EF5622]" />
            <h2 className="text-base font-bold">Admission Tracking</h2>
          </div>

          <div className="rounded-xl border border-gray-100 bg-[#FAFAFC] p-5">
            <h3 className="text-sm font-bold">Application Status</h3>
            <p className="mt-1 text-xs text-gray-500">
              Track every application with clear status updates.
            </p>

            <div className="mt-5 space-y-3">
              {statusItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-lg bg-white p-3"
                  >
                    <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${item.bg} ${item.color}`}>
                      <Icon size={18} />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 rounded-xl bg-[#232466] p-5 text-white">
            <div className="flex items-center gap-2">
              <GraduationCap size={21} className="text-[#EF5622]" />
              <h3 className="text-sm font-bold">Student Enrollment</h3>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-white/75">
              Once admission is confirmed, the student record can be used
              across other college management modules.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
