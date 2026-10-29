export default function ERPBenefits({
  heading,
  highlight,
  description,
  benefits,
}) {
  return (
    <div className="flex min-w-0 flex-col justify-center lg:py-1">
      <div className="mb-4">
        <h2 className="mt-2.5 text-lg font-bold leading-tight text-slate-900 sm:text-xl lg:text-2xl">
          {heading}
          <span className="block text-[#232466]">{highlight}</span>
        </h2>

        <p className="mt-1.5 text-xs leading-relaxed text-slate-500 sm:text-sm">
          {description}
        </p>
      </div>

      <div className="space-y-2.5">
        {benefits.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="flex items-start gap-2.5">
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                  index % 2 === 0
                    ? "bg-[#F1F1FA] text-[#232466]"
                    : "bg-[#FFF0E9] text-[#EF5622]"
                }`}
              >
                <Icon size={16} strokeWidth={1.8} />
              </div>

              <div className="min-w-0 flex-1 border-b border-slate-100 pb-2">
                <h3 className="text-xs font-bold text-slate-800 sm:text-sm">
                  {item.title}
                </h3>

                <p className="mt-0.5 text-[10px] leading-relaxed text-slate-500 sm:text-xs">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}