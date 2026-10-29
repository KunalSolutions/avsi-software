export default function ERPDashboardLayout({ dashboard, children }) {
  return (
    <div className="grid min-w-0 flex-1 grid-cols-1 items-start gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
      <div className="min-w-0">{dashboard}</div>
      <div className="min-w-0">{children}</div>
    </div>
  );
}