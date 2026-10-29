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

import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Presentation,
} from "lucide-react";

const slides = [
  { title: "Cover", component: ERPCoverSlide },
  { title: "About us", component: AboutUs },
  { title: "Business Challenges", component: BusinessChallenges },
  { title: "Our ERP Solution", component: ERPSolution },
  { title: "ERP Dashboard", component: ERPDashboardSlide },
  { title: "Inventory Features", component: inventoryFeatures },
  { title: "Customer Management", component: CustomerManagementSlide },
  { title: "Vendor Management", component: VendorManagementSlide },
  { title: "Employee Management", component: EmployeeManagementSlide },
  { title: "Sales & Quotations", component: SalesQuotationSlide },
  { title: "Reporting", component: ReportingSlide },
  { title: "Business Tracking", component: BusinessTrackingSlide },
  { title: "Meeting Workspace", component: MeetingWorkspaceSlide },
  { title: "WorkChat", component: WorkChatSlide },
  { title: "AMC Renewals", component: AMCRenewalsSlide },
  { title: "Task & Project Management", component: TaskProjectManagementSlide },
  { title: "Expense Management", component: ExpenseManagementSlide },
  { title: "Customized Workspace", component: CustomizedWorkspaceSlide },
  { title: "ERP Comparison", component: ERPComparison },
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
      // Presentation remains available without fullscreen.
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
        if (!document.fullscreenElement) {
          setPresentationMode(false);
        }
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
      document.removeEventListener(
        "fullscreenchange",
        handleFullscreenChange
      );
  }, []);

  const SlideComponent = slides[currentSlide].component;

  if (presentationMode) {
    return (
      <main className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-[#e9e9ef]">
        <header className="z-10 flex h-11 shrink-0 items-center justify-between gap-2 bg-white px-3 sm:h-12 sm:px-5">
          <button
            onClick={exitPresentation}
            className="flex shrink-0 items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-[#232466] sm:gap-2 sm:text-sm"
          >
            <ArrowLeft size={18} />
            Exit
          </button>

          <p className="min-w-0 flex-1 truncate text-center text-xs font-semibold text-[#232466] sm:text-sm">
            {slides[currentSlide].title}
          </p>

          <span className="shrink-0 text-[10px] text-slate-500 sm:text-xs">
            {currentSlide + 1}/{slides.length}
          </span>
        </header>

        <section className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto lg:flex lg:items-center lg:justify-center lg:overflow-hidden">
          <div
            key={currentSlide}
            className="relative min-h-[calc(100dvh-6.5rem)] w-full min-w-0 overflow-x-hidden bg-white shadow-2xl sm:min-h-[calc(100dvh-7rem)] lg:min-h-0 lg:aspect-[16/9] lg:max-h-full lg:max-w-[1440px]"
            style={{
              animation: isAnimating
                ? direction === 1
                  ? "pageForward 650ms ease both"
                  : "pageBackward 650ms ease both"
                : "none",
              transformOrigin: direction === 1 ? "left center" : "right center",
              backfaceVisibility: "hidden",
            }}
          >
            <SlideComponent />
          </div>
        </section>

        <footer className="z-10 flex h-12 shrink-0 items-center justify-center gap-2 bg-white px-2 sm:h-14 sm:gap-5 sm:px-4">
          <button
            onClick={previousSlide}
            disabled={currentSlide === 0 || isAnimating}
            className="shrink-0 rounded-full p-2 text-[#232466] transition hover:bg-slate-100 disabled:opacity-30"
            aria-label="Previous slide"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="flex max-w-[65vw] items-center gap-1 overflow-x-auto px-1 py-2 sm:max-w-none sm:gap-1.5">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                onClick={() => goToSlide(index)}
                aria-label={`Go to ${slide.title}`}
                aria-current={index === currentSlide ? "step" : undefined}
                className={`h-1.5 shrink-0 rounded-full transition-all ${
                  index === currentSlide
                    ? "w-5 bg-[#EF5622] sm:w-7"
                    : "w-1.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1 || isAnimating}
            className="shrink-0 rounded-full p-2 text-[#232466] transition hover:bg-slate-100 disabled:opacity-30"
            aria-label="Next slide"
          >
            <ChevronRight size={22} />
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
            * {
              animation: none !important;
              scroll-behavior: auto !important;
            }
          }

          @media (max-width: 1023px) {
            .presentation-slide-content {
              min-width: 0;
              max-width: 100%;
            }
          }
        `}</style>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-100">
      <header className="sticky top-0 z-30 flex min-h-14 items-center justify-between gap-2 border-b border-slate-200 bg-white px-3 py-2 sm:min-h-16 sm:px-8">
        <button
          onClick={() => navigate("/")}
          className="flex shrink-0 items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-[#232466] sm:gap-2 sm:text-sm"
        >
          <ArrowLeft size={18} />
          Home
        </button>

        <div className="min-w-0 text-center">
          <h1 className="truncate text-sm font-bold text-[#232466] sm:text-base">
            Corporate ERP
          </h1>
          <p className="text-[10px] text-slate-500 sm:text-xs">
            Solution Overview
          </p>
        </div>

        <button
          onClick={startPresentation}
          className="flex shrink-0 items-center gap-1.5 rounded-lg bg-[#232466] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#30318a] sm:gap-2 sm:px-5 sm:text-sm"
        >
          <Presentation size={16} />
          <span className="hidden sm:inline">Start Presentation</span>
          <span className="sm:hidden">Present</span>
        </button>
      </header>

      <section className="mx-auto flex w-full max-w-[1500px] flex-col gap-4 px-2 py-4 sm:gap-6 sm:px-6 sm:py-6 lg:px-10">
        {slides.map(({ title, component: Component }) => (
          <article
            key={title}
            className="w-full min-w-0 overflow-hidden bg-white shadow-sm ring-1 ring-slate-200"
          >
            <Component />
          </article>
        ))}
      </section>

      <button
        onClick={startPresentation}
        className="fixed bottom-4 right-4 z-20 flex items-center gap-2 rounded-full bg-[#EF5622] px-4 py-3 text-xs font-bold text-white shadow-lg transition hover:bg-orange-600 sm:bottom-5 sm:right-5 sm:px-5 sm:text-sm"
      >
        <Presentation size={18} />
        Present
      </button>
    </main>
  );
}