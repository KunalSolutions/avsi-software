
import {
  Wallet,
  IndianRupee,
  ReceiptText,
  Clock,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: IndianRupee,
    title: "Course Fee Structure",
    description: "Manage fees according to selected courses.",
  },
  {
    icon: ReceiptText,
    title: "Payment Records",
    description: "Record student payments and maintain receipts.",
  },
  {
    icon: Clock,
    title: "Pending Fee Tracking",
    description: "Identify outstanding balances and pending payments.",
  },
  {
    icon: CheckCircle2,
    title: "Payment Status",
    description: "Track fees as Pending, Partial or Paid.",
  },
];

export default function FeeManagementSlide() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white px-12 py-10 text-[#232466]">
      <div className="flex items-center justify-between">
        <img
          src="https://avsitechnologies.in/AVSI_LOGO.png"
          alt="AVSI Technologies"
          className="h-10 object-contain"
        />
        <span className="text-xs font-semibold tracking-[0.2em] text-[#EF5622]">
          FEE MANAGEMENT
        </span>
      </div>

      <div className="mt-12">
        <p className="text-sm font-bold uppercase tracking-widest text-[#EF5622]">
          College Financial Administration
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          Simplify Fee Collection,
          <span className="block text-[#EF5622]">Track Every Payment.</span>
        </h1>
        <p className="mt-3 max-w-2xl text-base text-gray-500">
          Manage course fees, record student payments and monitor outstanding
          balances with clear payment records.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-[1fr_1.15fr] gap-8">
        <div className="rounded-2xl bg-[#232466] p-7 text-white">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
            <Wallet size={25} className="text-[#EF5622]" />
          </div>

          <h2 className="mt-6 text-2xl font-bold">Student Fee Summary</h2>
          <p className="mt-2 text-sm text-white/65">
            Illustrative payment record
          </p>

          <div className="mt-6 rounded-xl bg-white/10 p-5">
            <p className="text-xs text-white/60">Total Course Fees</p>
            <p className="mt-1 text-3xl font-bold">₹60,000</p>

            <div className="mt-5 grid grid-cols-2 gap-4 border-t border-white/15 pt-4">
              <div>
                <p className="text-xs text-white/60">Paid Amount</p>
                <p className="mt-1 text-lg font-bold text-green-300">₹40,000</p>
              </div>
              <div>
                <p className="text-xs text-white/60">Pending Amount</p>
                <p className="mt-1 text-lg font-bold text-orange-300">₹20,000</p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs">
            <span className="text-white/60">Payment Status</span>
            <span className="rounded-full bg-orange-400/15 px-3 py-1 font-semibold text-orange-200">
              Partial
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-xl border border-gray-100 bg-[#FAFAFC] p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#232466]/10 text-[#232466]">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-sm font-bold">{feature.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
