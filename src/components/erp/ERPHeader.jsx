export default function ERPHeader({ title }) {
  return (
    <header className="mb-4 flex shrink-0 items-center justify-between gap-4">
      <div className="min-w-0">
        <h1 className="mt-1.5 text-xl font-bold tracking-tight text-[#232466] sm:text-2xl lg:text-3xl">
          {title}
        </h1>
      </div>

      <img
        src="https://avsitechnologies.in/AVSI_LOGO.png"
        alt="AVSI Technologies"
        className="hidden h-auto w-20 shrink-0 object-contain sm:block lg:w-28"
      />
    </header>
  );
}