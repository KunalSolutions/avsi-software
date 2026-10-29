import {
  MessageCircle, Video, FileSpreadsheet, Calculator,
  AlertTriangle, Clock, Users, Files, TrendingDown,
  CircleAlert, ArrowRight,
} from "lucide-react";

const tools = [
  { name: "WhatsApp", desc: "Team communication", icon: MessageCircle, color: "text-green-600 bg-green-50" },
  { name: "Zoom", desc: "Online meetings", icon: Video, color: "text-blue-600 bg-blue-50" },
  { name: "Excel", desc: "Manual records", icon: FileSpreadsheet, color: "text-emerald-700 bg-emerald-50" },
  { name: "Tally", desc: "Accounting", icon: Calculator, color: "text-orange-600 bg-orange-50" },
];

const problems = [
  { title: "Scattered Data", desc: "Information stored across different apps and files.", icon: Files, value: "Multiple sources" },
  { title: "Poor Task Tracking", desc: "Pending work and deadlines are easily missed.", icon: Clock, value: "Limited visibility" },
  { title: "Manual Work", desc: "Repeated data entry across multiple systems.", icon: TrendingDown, value: "Time consuming" },
  { title: "Communication Gaps", desc: "Updates get lost between chats, calls and emails.", icon: Users, value: "Disconnected teams" },
];

export default function BusinessProblems() {
  return (
    <section className="h-screen overflow-y-auto bg-slate-50 px-5 py-5 sm:px-8 lg:overflow-hidden">
      <div className="mx-auto flex min-h-full max-w-[1400px] flex-col">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#EF5622]">
              Business Challenges
            </p>
            <h1 className="mt-1 text-2xl font-bold text-[#232466] sm:text-3xl">
              Business Problems
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              When business operations depend on disconnected tools.
            </p>
          </div>
          <div className="hidden items-center gap-2 rounded-lg border border-red-100 bg-red-50 px-3 py-2 text-xs font-semibold text-red-600 sm:flex">
            <CircleAlert size={16} /> Disconnected Operations
          </div>
        </div>


        <div className="mt-auto flex flex-col gap-2 rounded-xl bg-[#232466] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-orange-300">
              The opportunity
            </p>
            <h2 className="mt-1 text-base font-bold text-white sm:text-lg">
              Too Many Tools. Scattered Data. Less Control.
            </h2>
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            Discover the AVSI Solution
            <ArrowRight size={18} className="text-orange-400" />
          </div>
        </div>
      </div>
    </section>
  );
}