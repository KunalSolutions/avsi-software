
import {
    LibraryBig,
    BookOpen,
    Search,
    BookCheck,
    CalendarClock,
} from "lucide-react";

const features = [
    {
        icon: BookOpen,
        title: "Book Management",
        description: "Maintain book details, categories, and availability.",
    },
    {
        icon: Search,
        title: "Book Search",
        description: "Find books quickly using titles and book details.",
    },
    {
        icon: BookCheck,
        title: "Issue & Return",
        description: "Manage book issuing and return transactions.",
    },
    {
        icon: CalendarClock,
        title: "Due Date Tracking",
        description: "Monitor issued books and upcoming return dates.",
    },
];

const books = [
    {
        title: "Computer Fundamentals",
        author: "P. K. Sinha",
        status: "Available",
    },
    {
        title: "Business Economics",
        author: "H. L. Ahuja",
        status: "Issued",
    },
    {
        title: "Database Management",
        author: "R. Elmasri",
        status: "Available",
    },
];

const LibraryManagementSlide = () => {
    return (
        <div className="min-h-screen w-full overflow-hidden bg-white px-12 py-10 text-[#232466]">
            <div className="flex items-center justify-between">
                <img
                    src="https://avsitechnologies.in/AVSI_LOGO.png"
                    alt="AVSI Technologies"
                    className="h-12 object-contain"
                />
                <p className="text-sm font-semibold tracking-widest text-gray-400">
                    COLLEGE ERP MANAGEMENT SYSTEM
                </p>
            </div>

            <div className="mt-12">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#EF5622]">
                    Library Administration
                </p>
                <h1 className="text-4xl font-bold tracking-tight">
                    Library Management
                </h1>
                <p className="mt-3 max-w-3xl text-base leading-7 text-gray-500">
                    Organize library books, manage issue and return records,
                    and track book availability through a centralized
                    library management system.
                </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8">
                {/* Library Preview */}
                <div className="rounded-2xl bg-[#232466] p-7 text-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-white/60">
                                Library Catalogue
                            </p>
                            <h2 className="mt-1 text-2xl font-bold">
                                Book Records
                            </h2>
                        </div>
                        <div className="rounded-xl bg-white/10 p-3">
                            <LibraryBig size={26} />
                        </div>
                    </div>

                    <div className="mt-7 space-y-3">
                        {books.map((book) => (
                            <div
                                key={book.title}
                                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/10 p-4"
                            >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10">
                                    <BookOpen size={21} />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <p className="truncate text-sm font-semibold">
                                        {book.title}
                                    </p>
                                    <p className="mt-1 text-xs text-white/50">
                                        {book.author}
                                    </p>
                                </div>

                                <span
                                    className={`shrink-0 rounded-full px-3 py-1 text-xs ${
                                        book.status === "Available"
                                            ? "bg-green-400/20 text-green-200"
                                            : "bg-orange-400/20 text-orange-200"
                                    }`}
                                >
                                    {book.status}
                                </span>
                            </div>
                        ))}
                    </div>

                    <p className="mt-4 text-xs text-white/40">
                        Illustrative library records
                    </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4">
                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.title}
                                className="rounded-2xl border border-gray-100 bg-[#F8F9FC] p-5"
                            >
                                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#EF5622]/10 text-[#EF5622]">
                                    <Icon size={22} />
                                </div>
                                <h3 className="text-base font-bold">
                                    {feature.title}
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-gray-500">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default LibraryManagementSlide;
