
import {
  Users,
  UserPlus,
  UserCheck,
  Clock,
  CalendarDays,
  ClipboardCheck,
} from "lucide-react";

import ERPHeader from "./erp/ERPHeader";
import ERPBenefits from "./erp/ERPBenefits";
import ERPDashboardLayout from "./erp/ERPDashboardLayout";

const employeeStats = [
  { label: "Total Employees", value: "64", icon: Users },
  { label: "Present Today", value: "52", icon: UserCheck },
  { label: "On Leave", value: "4", icon: CalendarDays },
];

const employees = [
  { name: "Rahul Sharma", id: "EMP-1001", role: "Technician", status: "Present" },
  { name: "Amit Patel", id: "EMP-1002", role: "Sales Executive", status: "Present" },
  { name: "Sneha Mehta", id: "EMP-1003", role: "Accountant", status: "On Leave" },
  { name: "Vikas Shah", id: "EMP-1004", role: "Project Manager", status: "Present" },
];

const employeeFeatures = [
  {
    icon: UserPlus,
    title: "Manage Employee Records",
    description: "Maintain employee details, contact information, and job roles.",
  },
  {
    icon: Clock,
    title: "Attendance and location Tracking",
    description: "Monitor daily attendance, check-in times, and working hours.",
  },
  {
    icon: CalendarDays,
    title: "Leave Management",
    description: "Manage employee leave requests and leave records.",
  },
  {
    icon: ClipboardCheck,
    title: "Task & Work Tracking",
    description: "Organize employee tasks and monitor work progress.",
  },
  {
    icon: UserCheck,
    title: "Employee Availability",
    description: "View employee attendance and availability at a glance.",
  },
  {
  icon: ClipboardCheck,
  title: "Track Employee Performance",
  description:
    "Monitor assigned tasks, work progress, and employee productivity.",
},
];

function EmployeePreview() {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_12px_35px_-20px_rgba(35,36,102,0.3)]">
      <div className="space-y-4 p-3 sm:p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-bold text-slate-900 sm:text-lg">
              Employee Overview
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              Manage employees and daily attendance
            </p>
          </div>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F1F1FA] text-[#232466]">
            <Users size={20} />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {employeeStats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="min-w-0 rounded-xl border border-slate-200 bg-white p-3"
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                    index === 2
                      ? "bg-orange-50 text-[#EF5622]"
                      : "bg-[#F1F1FA] text-[#232466]"
                  }`}
                >
                  <Icon size={16} />
                </div>
                <p className="mt-3 text-lg font-bold text-slate-900 sm:text-xl">
                  {item.value}
                </p>
                <p className="mt-1 text-[10px] leading-tight text-slate-500 sm:text-xs">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200">
          <div className="flex items-center justify-between gap-2 border-b border-slate-100 px-3 py-3 sm:px-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Employee Directory
              </h3>
              <p className="mt-1 text-[10px] text-slate-500">
                Employee records and status
              </p>
            </div>
            <span className="rounded-lg bg-[#F1F1FA] px-2.5 py-1.5 text-[10px] font-semibold text-[#232466]">
              {employees.length} Employees
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[340px] text-left text-xs">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-3 py-3 font-medium sm:px-4">Employee</th>
                  <th className="px-3 py-3 font-medium">Employee ID</th>
                  <th className="px-3 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td className="whitespace-nowrap px-3 py-3 sm:px-4">
                      <p className="font-semibold text-slate-800">
                        {employee.name}
                      </p>
                      <p className="mt-1 text-[10px] text-slate-400">
                        {employee.role}
                      </p>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 text-slate-500">
                      {employee.id}
                    </td>
                    <td className="px-3 py-3">
                      <span
                        className={`whitespace-nowrap rounded-full px-2 py-1 text-[9px] font-semibold ${
                          employee.status === "Present"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-orange-50 text-orange-700"
                        }`}
                      >
                        {employee.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-xl bg-[#F1F1FA] p-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#232466]">
            <Clock size={18} />
          </div>
          <div>
            <h3 className="text-xs font-bold text-[#232466]">
              Simplified Employee Management
            </h3>
            <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
              Organize employee records, track attendance, and manage daily
              workforce activities.
            </p>
          </div>
        </div>

        <p className="text-center text-[10px] text-slate-400">
          Illustrative dashboard · Sample figures
        </p>
      </div>
    </div>
  );
}

export default function EmployeeManagementSlide() {
  return (
    <section className="h-screen min-h-0 overflow-y-auto bg-white px-4 py-4 sm:px-6 lg:overflow-hidden lg:px-8 lg:py-4">
      <div className="mx-auto flex min-h-full w-full max-w-[1500px] flex-col">
        <ERPHeader title="Employee Management" />

        <ERPDashboardLayout dashboard={<EmployeePreview />}>
          <ERPBenefits
            heading="Manage Employees."
            highlight="Organize Your Workforce."
            description="Maintain employee records, track attendance, and manage daily workforce activities from one place."
            benefits={employeeFeatures}
          />
        </ERPDashboardLayout>
      </div>
    </section>
  );
}
