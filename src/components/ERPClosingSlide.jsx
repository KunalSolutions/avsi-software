

import { Globe, Mail, Phone, ArrowUpRight } from "lucide-react";

export default function ERPClosingSlide() {
  return (
    <section className="relative mx-auto flex aspect-[16/9] w-full max-w-[1440px] flex-col overflow-hidden bg-white px-[5%] py-[4%] font-sans text-[#232466]">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold tracking-wide">
            Contact US
          </span>
        </div>

        <img
          src="https://avsitechnologies.in/AVSI_LOGO.png"
          alt="AVSI Technologies"
          className="w-28 object-contain sm:w-36"
        />
      </header>

      <div className="my-6 h-px bg-slate-200" />

      <div className="grid min-h-0 flex-1 grid-cols-5 items-center gap-8">
        <div className="col-span-3">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#EF5622] sm:text-sm">
            Your Business. Your ERP.
          </p>

          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
            Let's Build
            <br />
            Your <span className="text-[#EF5622]">ERP</span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base lg:text-lg">
            A business management system designed around your workflows,
            goals, and future growth.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center bg-[#232466] text-white">
              <ArrowUpRight size={21} />
            </div>
            <p className="text-sm font-bold sm:text-base">
              Let's turn your business vision into reality.
            </p>
          </div>
        </div>

        <div className="col-span-2 border-l-4 border-[#EF5622] bg-[#F5F6FA] p-5 sm:p-7 lg:p-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#EF5622]">
            Get in Touch
          </p>
          <h2 className="mb-6 text-2xl font-extrabold sm:text-3xl">
            Contact Us
          </h2>

          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <Globe className="mt-1 shrink-0 text-[#EF5622]" size={20} />
              <div>
                <p className="text-xs text-slate-500">Website</p>
                <p className="break-all text-sm font-semibold">
                  avsitechnologies.in
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="mt-1 shrink-0 text-[#EF5622]" size={20} />
              <div>
                <p className="text-xs text-slate-500">Email</p>
                <p className="break-all text-sm font-semibold">
                  info@avsi.in
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="mt-1 shrink-0 text-[#EF5622]" size={20} />
              <div>
                <p className="text-xs text-slate-500">Phone</p>
                <p className="text-sm font-semibold">+91 77096 83131</p>
                <p className="mt-1 text-sm font-semibold">+91 95116 09437</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
