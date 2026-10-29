import {
  MessageCircle,
  Users,
  Paperclip,
  Search,
  CheckCheck,
  Phone,
  Video,
  Smile,
  Send,
  MoreVertical,
  Image,
  FileText,
  ShieldCheck,
  CircleCheck,
  Bell,
} from "lucide-react";

import ERPHeader from "./erp/ERPHeader";
import ERPBenefits from "./erp/ERPBenefits";
import ERPDashboardLayout from "./erp/ERPDashboardLayout";

const conversations = [
  {
    name: "Rahul Sharma",
    message: "The quotation is ready.",
    time: "10:42",
    unread: 2,
    online: true,
    initials: "RS",
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Sales Team",
    message: "Amit: Client meeting at 3 PM",
    time: "10:35",
    unread: 3,
    online: false,
    initials: "ST",
    color: "bg-violet-100 text-violet-700",
  },
  {
    name: "Neha Shah",
    message: "Thanks, received the file.",
    time: "10:20",
    unread: 0,
    online: true,
    initials: "NS",
    color: "bg-orange-100 text-orange-700",
  },
  {
    name: "Project Team",
    message: "Priya: Project update shared",
    time: "09:58",
    unread: 0,
    online: false,
    initials: "PT",
    color: "bg-emerald-100 text-emerald-700",
  },
];

const chatFeatures = [
  {
    icon: MessageCircle,
    title: "Instant Messaging",
    description:
      "Send and receive messages with employees, customers, and business partners.",
  },
  {
    icon: Users,
    title: "Group Conversations",
    description:
      "Create team groups for sales, projects, departments, and client discussions.",
  },
  {
    icon: Paperclip,
    title: "File & Image Sharing",
    description:
      "Share quotations, invoices, documents, images, and other business files.",
  },
  {
    icon: CheckCheck,
    title: "Read Receipts",
    description:
      "Check message delivery and read status to keep communication on track.",
  },
  {
    icon: Search,
    title: "Chat Search",
    description:
      "Find conversations and quickly locate important business messages.",
  },
  {
    icon: ShieldCheck,
    title: "Business Communication",
    description:
      "Keep team conversations and work-related discussions organized in one place.",
  },
];

function ChatAvatar({ initials, color, online = false, small = false }) {
  return (
    <div className="relative shrink-0">
      <div
        className={`flex items-center justify-center rounded-full font-bold ${
          small ? "h-8 w-8 text-[10px]" : "h-10 w-10 text-xs"
        } ${color}`}
      >
        {initials}
      </div>
      {online && (
        <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500" />
      )}
    </div>
  );
}

function ChatPreview() {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_12px_35px_-20px_rgba(35,36,102,0.3)]">
      <div className="grid min-h-[480px] grid-cols-1 sm:grid-cols-[minmax(155px,0.8fr)_minmax(0,1.5fr)]">
        <aside className="hidden min-w-0 border-r border-slate-200 sm:block">
          <div className="flex items-center justify-between gap-2 border-b border-slate-100 p-3">
            <div className="flex items-center gap-2">
              <MessageCircle size={20} className="text-[#232466]" />
              <h2 className="text-sm font-bold text-slate-900">WorkChat</h2>
            </div>
            <MoreVertical size={16} className="text-slate-400" />
          </div>

          <div className="p-3">
            <div className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2">
              <Search size={13} className="shrink-0 text-slate-400" />
              <span className="truncate text-[10px] text-slate-500">
                Search conversations
              </span>
            </div>
          </div>

          <div className="space-y-1 px-2 pb-2">
            {conversations.map((chat, index) => (
              <div
                key={chat.name}
                className={`flex min-w-0 items-center gap-2 rounded-lg p-2 ${
                  index === 0 ? "bg-[#F1F1FA]" : ""
                }`}
              >
                <ChatAvatar
                  initials={chat.initials}
                  color={chat.color}
                  online={chat.online}
                  small
                />

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <p className="truncate text-[10px] font-semibold text-slate-800">
                      {chat.name}
                    </p>
                    <span className="shrink-0 text-[8px] text-slate-400">
                      {chat.time}
                    </span>
                  </div>
                  <p className="mt-1 truncate text-[9px] text-slate-500">
                    {chat.message}
                  </p>
                </div>

                {chat.unread > 0 && (
                  <span className="flex h-4 min-w-4 shrink-0 items-center justify-center rounded-full bg-[#232466] px-1 text-[8px] font-bold text-white">
                    {chat.unread}
                  </span>
                )}
              </div>
            ))}
          </div>
        </aside>

        <div className="flex min-w-0 flex-col bg-[#f7f8fc]">
          <div className="flex items-center justify-between gap-2 border-b border-slate-200 bg-white px-3 py-3 sm:px-4">
            <div className="flex min-w-0 items-center gap-2">
              <ChatAvatar
                initials="RS"
                color="bg-blue-100 text-blue-700"
                online
                small
              />
              <div className="min-w-0">
                <h3 className="truncate text-xs font-bold text-slate-900">
                  Rahul Sharma
                </h3>
                <p className="mt-0.5 text-[9px] text-emerald-600">
                  Online
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-3 text-[#232466]">
              <Phone size={16} />
              <Video size={17} />
              <Search size={16} />
              <MoreVertical size={16} />
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-3 p-3 sm:p-4">
            <div className="self-center rounded-full bg-white px-3 py-1 text-[9px] text-slate-400 shadow-sm">
              TODAY
            </div>

            <div className="flex items-end gap-2">
              <ChatAvatar
                initials="RS"
                color="bg-blue-100 text-blue-700"
                small
              />
              <div className="max-w-[85%] rounded-xl rounded-bl-sm bg-white p-3 shadow-sm">
                <p className="text-[11px] leading-5 text-slate-700">
                  Hi! The client quotation is ready for review.
                </p>
                <p className="mt-1 text-right text-[8px] text-slate-400">
                  10:40 AM
                </p>
              </div>
            </div>

            <div className="max-w-[85%] self-end rounded-xl rounded-br-sm bg-[#e4e5fa] p-3">
              <p className="text-[11px] leading-5 text-slate-700">
                Great! Please share the quotation file here.
              </p>
              <p className="mt-1 flex items-center justify-end gap-1 text-[8px] text-slate-500">
                10:41 AM
                <CheckCheck size={12} className="text-blue-600" />
              </p>
            </div>

            <div className="flex items-end gap-2">
              <ChatAvatar
                initials="RS"
                color="bg-blue-100 text-blue-700"
                small
              />
              <div className="max-w-[90%] rounded-xl rounded-bl-sm bg-white p-3 shadow-sm">
                <p className="mb-2 text-[11px] text-slate-700">
                  Here is the latest quotation.
                </p>
                <div className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 p-2">
                  <div className="rounded-md bg-red-50 p-2 text-red-500">
                    <FileText size={19} />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-[10px] font-semibold text-slate-700">
                      Client_Quotation.pdf
                    </p>
                    <p className="mt-1 text-[9px] text-slate-400">
                      PDF Document · 2.4 MB
                    </p>
                  </div>
                </div>
                <p className="mt-1 text-right text-[8px] text-slate-400">
                  10:42 AM
                </p>
              </div>
            </div>

            <div className="max-w-[85%] self-end rounded-xl rounded-br-sm bg-[#e4e5fa] p-3">
              <p className="text-[11px] leading-5 text-slate-700">
                Received, thank you!
              </p>
              <p className="mt-1 flex items-center justify-end gap-1 text-[8px] text-slate-500">
                10:43 AM
                <CheckCheck size={12} className="text-blue-600" />
              </p>
            </div>
          </div>

          <div className="border-t border-slate-200 bg-white p-3">
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2.5">
              <Smile size={17} className="shrink-0 text-slate-400" />
              <Paperclip size={16} className="shrink-0 text-slate-400" />
              <Image size={16} className="shrink-0 text-slate-400" />
              <span className="min-w-0 flex-1 truncate text-[10px] text-slate-400">
                Type a message...
              </span>
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#232466] text-white">
                <Send size={13} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 border-t border-slate-100 bg-white p-3">
        {[
          { icon: Users, label: "Team & Group Chats" },
          { icon: Paperclip, label: "File Sharing" },
          { icon: CheckCheck, label: "Read Receipts" },
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
        Illustrative interface · Sample conversations and messages
      </p>
    </div>
  );
}

export default function WorkChatSlide() {
  return (
    <section className="h-screen min-h-0 overflow-y-auto bg-white px-4 py-4 sm:px-6 lg:overflow-hidden lg:px-8 lg:py-4">
      <div className="mx-auto flex min-h-full w-full max-w-[1500px] flex-col">
        <ERPHeader title="WorkChat — Business Messaging" />

        <ERPDashboardLayout dashboard={<ChatPreview />}>
          <ERPBenefits
            heading="Stay Connected."
            highlight="Work Smarter."
            description="A WhatsApp-style business messaging workspace to connect employees, manage team discussions, and share important business information in real time."
            benefits={chatFeatures}
          />
        </ERPDashboardLayout>
      </div>
    </section>
  );
}