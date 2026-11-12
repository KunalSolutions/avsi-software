// import { toJpeg } from "html-to-image";
// import { Download } from "lucide-react";
// import { useState } from "react";

// export default function SlideImageExport({ targetId, filename }) {
//   const [loading, setLoading] = useState(false);

//   const downloadImage = async () => {
//     const element = document.getElementById(targetId);
//     if (!element || loading) return;

//     try {
//       setLoading(true);
//       await document.fonts.ready;

//       const images = [...element.querySelectorAll("img")];

//       await Promise.all(
//         images.map((img) => img.decode().catch(() => {}))
//       );

//       const dataUrl = await toJpeg(element, {
//         quality: 1,
//         pixelRatio: 2,
//         backgroundColor: "#ffffff",
//         cacheBust: true,
//         filter: (node) => {
//           if (
//             node.tagName === "IMG" &&
//             node.src.includes("i.pravatar.cc")
//           ) {
//             return false;
//           }
//           return true;
//         },
//       });

//       const link = document.createElement("a");
//       link.download = `${filename || targetId}.jpg`;
//       link.href = dataUrl;
//       link.click();
//     } catch (error) {
//       console.error("Image export failed:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <button
//       onClick={downloadImage}
//       disabled={loading}
//       className="flex items-center gap-2 rounded-lg bg-[#232466] px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
//     >
//       <Download size={16} />
//       {loading ? "Generating..." : "Download JPG"}
//     </button>
//   );
// }


// import { toJpeg } from "html-to-image";
// import { Download, FileText } from "lucide-react";
// import { useState } from "react";
// import { jsPDF } from "jspdf";

// export default function SlideImageExport({ targetId, filename }) {
//   const [loading, setLoading] = useState(false);
//   const [format, setFormat] = useState("");

//   const generateImage = async () => {
//     const element = document.getElementById(targetId);
//     if (!element) throw new Error("Slide element not found");

//     await document.fonts.ready;

//     const images = [...element.querySelectorAll("img")];

//     await Promise.all(
//       images.map((img) => img.decode().catch(() => {}))
//     );

//     const dataUrl = await toJpeg(element, {
//       quality: 1,
//       pixelRatio: 2,
//       backgroundColor: "#ffffff",
//       cacheBust: true,
//       filter: (node) => {
//         if (
//           node.tagName === "IMG" &&
//           node.src.includes("i.pravatar.cc")
//         ) {
//           return false;
//         }
//         return true;
//       },
//     });

//     return { dataUrl, element };
//   };

//   const downloadImage = async () => {
//     if (loading) return;

//     try {
//       setLoading(true);
//       setFormat("jpg");

//       const { dataUrl } = await generateImage();

//       const link = document.createElement("a");
//       link.download = `${filename || targetId}.jpg`;
//       link.href = dataUrl;
//       link.click();
//     } catch (error) {
//       console.error("Image export failed:", error);
//     } finally {
//       setLoading(false);
//       setFormat("");
//     }
//   };

//   const downloadPDF = async () => {
//     if (loading) return;

//     try {
//       setLoading(true);
//       setFormat("pdf");

//       const { dataUrl, element } = await generateImage();

//       const { width, height } = element.getBoundingClientRect();

//       // Custom PDF page matching the slide dimensions
//       const pageWidth = width * 0.75;
//       const pageHeight = height * 0.75;

//       const pdf = new jsPDF({
//         orientation: width > height ? "landscape" : "portrait",
//         unit: "pt",
//         format: [pageWidth, pageHeight],
//         compress: true,
//       });

//       // Add the complete slide image to one PDF page
//       pdf.addImage(
//         dataUrl,
//         "JPEG",
//         0,
//         0,
//         pageWidth,
//         pageHeight
//       );

//       pdf.save(`${filename || targetId}.pdf`);
//     } catch (error) {
//       console.error("PDF export failed:", error);
//     } finally {
//       setLoading(false);
//       setFormat("");
//     }
//   };

//   return (
//     <div className="flex items-center gap-2">
//       <button
//         onClick={downloadImage}
//         disabled={loading}
//         className="flex items-center gap-2 rounded-lg bg-[#232466] px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
//       >
//         <Download size={16} />
//         {loading && format === "jpg" ? "Generating..." : "Download JPG"}
//       </button>

//       <button
//         onClick={downloadPDF}
//         disabled={loading}
//         className="flex items-center gap-2 rounded-lg bg-[#EF5622] px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
//       >
//         <FileText size={16} />
//         {loading && format === "pdf" ? "Generating..." : "Download PDF"}
//       </button>
//     </div>
//   );
// }


import { toJpeg } from "html-to-image";
import { Download, FileText } from "lucide-react";
import { useState } from "react";
import { jsPDF } from "jspdf";

export default function SlideImageExport({
  targetId,
  targetIds,
  filename,
  allSlides = false,
}) {
  const [loading, setLoading] = useState(false);
  const [format, setFormat] = useState("");

  const generateImage = async (id) => {
    const element = document.getElementById(id);

    if (!element) {
      throw new Error(`Slide not found: ${id}`);
    }

    await document.fonts.ready;

    const images = [...element.querySelectorAll("img")];

    await Promise.all(
      images.map((img) => img.decode().catch(() => {}))
    );

    const dataUrl = await toJpeg(element, {
      quality: 1,
      pixelRatio: 2,
      backgroundColor: "#ffffff",
      cacheBust: true,
      filter: (node) => {
        if (
          node.tagName === "IMG" &&
          node.src.includes("i.pravatar.cc")
        ) {
          return false;
        }

        return true;
      },
    });

    const { width, height } = element.getBoundingClientRect();

    return { dataUrl, width, height };
  };

  const downloadImage = async () => {
    if (loading || !targetId) return;

    try {
      setLoading(true);
      setFormat("jpg");

      const { dataUrl } = await generateImage(targetId);

      const link = document.createElement("a");
      link.download = `${filename || targetId}.jpg`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Image export failed:", error);
    } finally {
      setLoading(false);
      setFormat("");
    }
  };

  const downloadPDF = async () => {
    if (loading) return;

    try {
      setLoading(true);
      setFormat("pdf");

      const ids = targetIds?.length ? targetIds : [targetId];

      let pdf = null;

      for (let i = 0; i < ids.length; i++) {
        const { dataUrl, width, height } = await generateImage(ids[i]);

        const pageWidth = width * 0.75;
        const pageHeight = height * 0.75;

        if (!pdf) {
          pdf = new jsPDF({
            orientation: width > height ? "landscape" : "portrait",
            unit: "pt",
            format: [pageWidth, pageHeight],
            compress: true,
          });
        } else {
          pdf.addPage(
            [pageWidth, pageHeight],
            width > height ? "landscape" : "portrait"
          );
        }

        pdf.addImage(
          dataUrl,
          "JPEG",
          0,
          0,
          pageWidth,
          pageHeight
        );
      }

      pdf.save(`${filename || targetId || "presentation"}.pdf`);
    } catch (error) {
      console.error("PDF export failed:", error);
    } finally {
      setLoading(false);
      setFormat("");
    }
  };

  return (
    <div className="flex items-center gap-2">
      {!allSlides && (
        <button
          onClick={downloadImage}
          disabled={loading}
          className="flex items-center gap-2 rounded-lg bg-[#232466] px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
        >
          <Download size={16} />
          {loading && format === "jpg"
            ? "Generating..."
            : "Download JPG"}
        </button>
      )}

      <button
        onClick={downloadPDF}
        disabled={loading}
        className="flex items-center gap-2 rounded-lg bg-[#EF5622] px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
      >
        <FileText size={16} />
        {loading && format === "pdf"
          ? "Generating PDF..."
          : allSlides
            ? "Download All PDF"
            : "Download PDF"}
      </button>
    </div>
  );
}
