
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";

import ERPCoverSlide from "../components/ERPCoverSlide";
import BusinessChallenges from "../components/BusinessChallenges";
import ERPSolution from "../components/ERPSolution";
import ERPModules from "../components/ERPModules";
import KeyBusinessBenefits from "../components/KeyBusinessBenefits";
import ERPComparison from "../components/ERPComparison";
import ERPDashboardSlide from "../components/ERPDashboardSlide";
import ERPImplementationProcess from "../components/ERPImplementationProcess";
import ERPClosingSlide from "../components/ERPClosingSlide";
import AboutUs from "../components/AboutUs";
import inventoryFeatures from "../components/ProductInventorySlide";
import CustomerManagementSlide from "../components/CustomerManagementSlide";
import VendorManagementSlide from "../components/VendorManagementSlide";
import EmployeeManagementSlide from "../components/EmployeeManagementSlide";
import SalesQuotationSlide from "../components/SalesQuotationSlide";
import ReportingSlide from "../components/ReportingSlide";
import BusinessTrackingSlide from "../components/BusinessTrackingSlide";
import MeetingWorkspaceSlide from "../components/MeetingWorkspaceSlide";
import WorkChatSlide from "../components/WorkChatSlide";
import AMCRenewalsSlide from "../components/AMCRenewalsSlide";
import TaskProjectManagementSlide from "../components/TaskProjectManagementSlide";
import ExpenseManagementSlide from "../components/ExpenseManagementSlide";
import CustomizedWorkspaceSlide from "../components/CustomizedWorkspaceSlide";

import { ArrowLeft, ChevronLeft, ChevronRight, Presentation } from "lucide-react";

const slides = [
  { title: "Cover", component: ERPCoverSlide },
  { title: "About us", component: AboutUs },
  { title: "Business Challenges", component: BusinessChallenges },
  { title: "Our ERP Solution", component: ERPSolution },

  { title: "ERP Dashboard", component: ERPDashboardSlide },
  { title: "inventoryFeatures", component: inventoryFeatures },
  { title: "CustomerManagementSlide", component: CustomerManagementSlide },
  { title: "VendorManagementSlide", component: VendorManagementSlide },
  { title: "EmployeeManagementSlide", component: EmployeeManagementSlide },
  { title: "SalesQuotationSlide", component: SalesQuotationSlide },
  { title: "ReportingSlide", component: ReportingSlide },
  { title: "BusinessTrackingSlide", component: BusinessTrackingSlide },
  { title: "MeetingWorkspaceSlide", component: MeetingWorkspaceSlide },
  { title: "WorkChatSlide", component: WorkChatSlide },

  { title: "AMCRenewalsSlide", component: AMCRenewalsSlide },
  { title: "TaskProjectManagementSlide", component: TaskProjectManagementSlide },
  { title: "ExpenseManagementSlide", component: ExpenseManagementSlide },
  { title: "CustomizedWorkspaceSlide", component: CustomizedWorkspaceSlide },

  { title: "ERP Comparison", component: ERPComparison },
  // { title: "ERP Modules & Capabilities", component: ERPModules },
  // { title: "Key Business Benefits", component: KeyBusinessBenefits },
  // { title: "Our Implementation Process", component: ERPImplementationProcess },
  { title: "Let's Build Your ERP", component: ERPClosingSlide },
];

export default function CorporateERP() {
  const navigate = useNavigate();
  const [presentationMode, setPresentationMode] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index) => {
      if (
        index < 0 ||
        index >= slides.length ||
        index === currentSlide ||
        isAnimating
      ) {
        return;
      }

      setDirection(index > currentSlide ? 1 : -1);
      setIsAnimating(true);
      setCurrentSlide(index);
      window.setTimeout(() => setIsAnimating(false), 650);
    },
    [currentSlide, isAnimating]
  );

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const previousSlide = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  const startPresentation = async () => {
    setCurrentSlide(0);
    setDirection(1);
    setIsAnimating(false);
    setPresentationMode(true);

    try {
      await document.documentElement.requestFullscreen();
    } catch {
      // Presentation works without fullscreen.
    }
  };

  const exitPresentation = useCallback(async () => {
    setPresentationMode(false);

    if (document.fullscreenElement) {
      try {
        await document.exitFullscreen();
      } catch {}
    }
  }, []);

  useEffect(() => {
    if (!presentationMode) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        if (!document.fullscreenElement) setPresentationMode(false);
        return;
      }

      if (event.key === "Enter" || event.key === "ArrowRight") {
        event.preventDefault();
        nextSlide();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        previousSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [presentationMode, nextSlide, previousSlide]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setPresentationMode(false);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const SlideComponent = slides[currentSlide].component;

  if (presentationMode) {
    return (
      <main className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-[#e9e9ef]">
        <header className="flex h-12 shrink-0 items-center justify-between bg-white px-5">
          <button
            onClick={exitPresentation}
            className="flex items-center gap-2 text-sm font-medium text-slate-600"
          >
            <ArrowLeft size={18} />
            Exit
          </button>

          <p className="text-sm font-semibold text-[#232466]">
            {slides[currentSlide].title}
          </p>

          <span className="text-xs text-slate-500">
            {currentSlide + 1} / {slides.length}
          </span>
        </header>

        <section className="flex min-h-0 flex-1 items-center justify-center">
          <div
            key={currentSlide}
            className="w-full max-w-[1440px] overflow-hidden bg-white shadow-2xl"
            style={{
              aspectRatio: "16 / 9",
              animation:
                direction === 1
                  ? "pageForward 650ms ease both"
                  : "pageBackward 650ms ease both",
              transformOrigin: direction === 1 ? "left center" : "right center",
              backfaceVisibility: "hidden",
            }}
          >
            <SlideComponent />
          </div>
        </section>

        <footer className="flex h-14 shrink-0 items-center justify-center gap-5 bg-white">
          <button
            onClick={previousSlide}
            disabled={currentSlide === 0 || isAnimating}
            className="rounded-full p-2 text-[#232466] transition hover:bg-slate-100 disabled:opacity-30"
            aria-label="Previous slide"
          >
            <ChevronLeft size={23} />
          </button>

          <div className="flex items-center gap-1.5">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                onClick={() => goToSlide(index)}
                aria-label={`Go to ${slide.title}`}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentSlide
                    ? "w-7 bg-[#EF5622]"
                    : "w-1.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1 || isAnimating}
            className="rounded-full p-2 text-[#232466] transition hover:bg-slate-100 disabled:opacity-30"
            aria-label="Next slide"
          >
            <ChevronRight size={23} />
          </button>
        </footer>

        <style>{`
          @keyframes pageForward {
            from {
              opacity: 0.45;
              transform: perspective(1800px) rotateY(-7deg) translateX(18px);
            }
            to {
              opacity: 1;
              transform: perspective(1800px) rotateY(0deg) translateX(0);
            }
          }

          @keyframes pageBackward {
            from {
              opacity: 0.45;
              transform: perspective(1800px) rotateY(7deg) translateX(-18px);
            }
            to {
              opacity: 1;
              transform: perspective(1800px) rotateY(0deg) translateX(0);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            [style*="pageForward"],
            [style*="pageBackward"] {
              animation: none !important;
            }
          }
        `}</style>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100">
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 sm:px-8">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#232466]"
        >
          <ArrowLeft size={18} />
          Home
        </button>

        <div className="text-center">
          <h1 className="text-sm font-bold text-[#232466] sm:text-base">
            Corporate ERP
          </h1>
          <p className="text-xs text-slate-500">Solution Overview</p>
        </div>

        <button
          onClick={startPresentation}
          className="flex items-center gap-2 rounded-lg bg-[#232466] px-3 py-2 text-xs font-semibold text-white sm:px-5 sm:text-sm"
        >
          <Presentation size={17} />
          <span className="hidden sm:inline">Start Presentation</span>
          <span className="sm:hidden">Present</span>
        </button>
      </header>

      <section className="mx-auto max-w-[1500px] space-y-6 px-3 py-6 sm:px-6 lg:px-10">
        {slides.map(({ title, component: Component }) => (
          <article
            key={title}
            className="overflow-hidden bg-white shadow-sm ring-1 ring-slate-200"
          >
            <Component />
          </article>
        ))}
      </section>

      <button
        onClick={startPresentation}
        className="fixed bottom-5 right-5 z-20 flex items-center gap-2 rounded-full bg-[#EF5622] px-5 py-3 text-sm font-bold text-white shadow-lg hover:bg-orange-600"
      >
        <Presentation size={18} />
        Present
      </button>
    </main>
  );
}
