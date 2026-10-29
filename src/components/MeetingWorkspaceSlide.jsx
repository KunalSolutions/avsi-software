import {
  Video,
  Users,
  MonitorUp,
  CalendarDays,
  MessageSquare,
  ShieldCheck,
  Mic,
  ScreenShare,
  Clock3,
  VideoOff,
  PhoneOff,
  Send,
  Maximize2,
} from "lucide-react";

import ERPHeader from "./erp/ERPHeader";
import ERPBenefits from "./erp/ERPBenefits";
import ERPDashboardLayout from "./erp/ERPDashboardLayout";

const participants = [
  {
    name: "Rahul Sharma",
    role: "Host",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Neha Shah",
    role: "Joined",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Amit Patel",
    role: "Joined",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Priya Mehta",
    role: "Joined",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=500&q=80",
  },
];

const meetingFeatures = [
  {
    icon: Video,
    title: "One-to-One & Group Calls",
    description:
      "Conduct face-to-face video calls with individual employees, teams, clients, and business partners.",
  },
  {
    icon: MonitorUp,
    title: "Screen Sharing",
    description:
      "Share your screen, presentations, quotations, reports, and business documents during calls.",
  },
  {
    icon: Users,
    title: "Participant Management",
    description:
      "Manage meeting members, share meeting codes, and approve joining requests.",
  },
  {
    icon: CalendarDays,
    title: "Meeting Scheduling",
    description:
      "Plan team discussions, client calls, and project review meetings.",
  },
  {
    icon: MessageSquare,
    title: "In-Meeting Chat",
    description:
      "Exchange messages and share meeting-related information while collaborating.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Meeting Access",
    description:
      "Control who can join meetings with meeting codes and participant approval.",
  },
];

function MeetingControl({ icon: Icon, label, danger = false, active = false }) {
  return (
    <div className="flex min-w-0 flex-col items-center gap-1.5">
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-lg ${
          danger
            ? "bg-red-500 text-white"
            : active
              ? "bg-emerald-500/20 text-emerald-300"
              : "bg-white/10 text-white"
        }`}
      >
        <Icon size={15} />
      </div>
      <span className="text-center text-[9px] text-slate-300">{label}</span>
    </div>
  );
}

function ParticipantTile({ person }) {
  return (
    <div className="relative min-h-[105px] overflow-hidden rounded-lg bg-slate-700 sm:min-h-[125px]">
      <img
        src={person.image}
        alt={person.name}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-2 pb-2 pt-7">
        <div className="flex items-center gap-1.5">
          <Mic size={11} className="text-white" />
          <span className="truncate text-[10px] font-medium text-white">
            {person.name}
          </span>
        </div>
      </div>

      {person.role === "Host" && (
        <span className="absolute left-2 top-2 rounded bg-black/50 px-2 py-1 text-[9px] text-white">
          Host
        </span>
      )}
    </div>
  );
}

function MeetingPreview() {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_12px_35px_-20px_rgba(35,36,102,0.3)]">
      <div className="overflow-hidden bg-[#0b1530]">
        <div className="flex items-center justify-between gap-2 border-b border-white/10 px-3 py-3 sm:px-4">
          <div className="flex min-w-0 items-center gap-3">
            <span className="shrink-0 text-sm font-bold text-white">
              AVSI<span className="text-violet-400">ERP</span>
            </span>
            <div className="min-w-0">
              <p className="truncate text-xs font-semibold text-white">
                Team Meeting
              </p>
              <p className="mt-0.5 flex items-center gap-1 text-[9px] text-slate-400">
                <Clock3 size={10} />
                12:34 · Meeting in progress
              </p>
            </div>
          </div>
          <Maximize2 size={15} className="shrink-0 text-slate-300" />
        </div>

        <div className="grid grid-cols-1 gap-2 p-2 sm:grid-cols-[minmax(0,1fr)_145px] sm:p-3 lg:grid-cols-[minmax(0,1fr)_155px]">
          <div className="grid grid-cols-2 gap-2">
            {participants.map((person) => (
              <ParticipantTile key={person.name} person={person} />
            ))}
          </div>

          <div className="hidden min-w-0 flex-col gap-2 sm:flex">
            <div className="rounded-lg border border-white/10 bg-white/[0.05] p-2.5">
              <div className="mb-3 flex items-center justify-between gap-1">
                <h3 className="text-[11px] font-semibold text-white">
                  Participants (4)
                </h3>
                <Users size={13} className="text-slate-400" />
              </div>

              <div className="space-y-3">
                {participants.map((person) => (
                  <div
                    key={person.name}
                    className="flex min-w-0 items-center gap-2"
                  >
                    <img
                      src={person.image}
                      alt=""
                      className="h-6 w-6 shrink-0 rounded-full object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[9px] font-medium text-white">
                        {person.name}
                      </p>
                      <p className="text-[9px] text-slate-400">
                        {person.role}
                      </p>
                    </div>
                    <Mic size={11} className="shrink-0 text-slate-400" />
                  </div>
                ))}
              </div>

              <div className="mt-3 rounded-md bg-indigo-600 px-2 py-2 text-center text-[9px] font-semibold text-white">
                + Invite Participants
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/[0.05] p-2.5">
              <div className="mb-3 flex items-center gap-2 text-[11px] font-semibold text-white">
                <MessageSquare size={13} />
                Meeting Chat
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-[9px] text-slate-400">
                    Amit Patel · 10:24 AM
                  </p>
                  <p className="mt-1 text-[10px] leading-4 text-slate-200">
                    Can you share the presentation?
                  </p>
                </div>
                <div>
                  <p className="text-[9px] text-slate-400">
                    Neha Shah · 10:25 AM
                  </p>
                  <p className="mt-1 text-[10px] leading-4 text-slate-200">
                    Sure, sharing it now.
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-md bg-white/10 p-2">
                  <MessageSquare
                    size={14}
                    className="shrink-0 text-indigo-300"
                  />
                  <span className="truncate text-[9px] text-slate-200">
                    ERP_Presentation.pdf
                  </span>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between gap-2 rounded-full bg-white/10 px-2.5 py-2">
                <span className="truncate text-[9px] text-slate-400">
                  Type a message...
                </span>
                <Send size={12} className="shrink-0 text-indigo-300" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-around gap-1 border-t border-white/10 px-1 py-3 sm:px-2">
          <MeetingControl icon={Mic} label="Mute" />
          <MeetingControl icon={VideoOff} label="Stop Video" />
          <MeetingControl
            icon={ScreenShare}
            label="Share Screen"
            active
          />
          <MeetingControl icon={Users} label="Participants" />
          <MeetingControl icon={MessageSquare} label="Chat" />
          <MeetingControl icon={PhoneOff} label="Leave" danger />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 p-3">
        {[
          { icon: Video, label: "Video & Audio" },
          { icon: ScreenShare, label: "Screen Sharing" },
          { icon: ShieldCheck, label: "Join Approval" },
        ].map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex min-w-0 flex-col items-center gap-2 rounded-lg bg-[#F1F1FA] p-3 text-center"
          >
            <Icon size={18} className="text-[#232466]" />
            <span className="text-[9px] font-medium text-slate-600">
              {label}
            </span>
          </div>
        ))}
      </div>

      <p className="px-3 pb-3 text-center text-[10px] text-slate-400">
        Illustrative meeting interface · Sample participants and messages
      </p>
    </div>
  );
}

export default function MeetingWorkspaceSlide() {
  return (
    <section className="h-screen min-h-0 overflow-y-auto bg-white px-4 py-4 sm:px-6 lg:overflow-hidden lg:px-8 lg:py-4">
      <div className="mx-auto flex min-h-full w-full max-w-[1500px] flex-col">
        <ERPHeader title="Meeting & Video Conferencing" />

        <ERPDashboardLayout dashboard={<MeetingPreview />}>
          <ERPBenefits
            heading="Connect Teams."
            highlight="Work Together."
            description="Conduct secure online meetings with employees, clients, and business partners through a centralized video conferencing workspace."
            benefits={meetingFeatures}
          />
        </ERPDashboardLayout>
      </div>
    </section>
  );
}