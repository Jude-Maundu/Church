import React, { useEffect, useState } from "react";
import axios from "axios";
import { jsPDF } from "jspdf";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const res = await axios.get("https://schoolbackend-kbhx.onrender.com/api/courses/");
        console.log("API Response:", res.data);

        // 🧠 Handle different response formats safely
        const data = Array.isArray(res.data)
          ? res.data
          : res.data.courses || res.data.announcements || [];

        setAnnouncements(data);
      } catch (error) {
        console.error("Error fetching announcements:", error);
        setAnnouncements([]); // fallback
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  const downloadStyledPDF = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    let y = 25;

    // 🕊️ Header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("Church Announcements", pageWidth / 2, y, { align: "center" });

    y += 10;
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(
      "Stay updated with the latest news from St John the Evangelist Parish.",
      pageWidth / 2,
      y,
      { align: "center" }
    );

    y += 15;

    // 🎨 Loop through announcements
    announcements.forEach((ann, index) => {
      if (y > 250) {
        doc.addPage();
        y = 20;
      }

      doc.setFillColor(245, 245, 245);
      doc.roundedRect(15, y, 180, 40, 3, 3, "F");

      doc.setTextColor(33, 37, 41);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text(`${index + 1}. ${ann.title || "Untitled"}`, 20, y + 10);

      doc.setFont("helvetica", "italic");
      doc.setTextColor(100, 100, 100);
      doc.setFontSize(11);
      doc.text(`📅 ${ann.date || "No date"}`, 20, y + 18);

      doc.setTextColor(33, 37, 41);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      doc.text(ann.description || "No description available.", 20, y + 28, {
        maxWidth: 170,
      });

      y += 50;
    });

    doc.save("Church_Announcements.pdf");
  };

  return (
    <section
      id="announcements"
      className="py-5"
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/images/church-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="text-center mb-5 mt-5">
          <h2 className="fw-bold display-5 text-dark">Church Announcements</h2>
          <p className="lead text-dark">
            Stay updated with all the latest news and announcements from St John the Evangelist Parish.
          </p>

          {/* PDF Download Button */}
          <button
            className="btn btn-dark mt-3 px-4 py-2 rounded-pill"
            onClick={downloadStyledPDF}
            disabled={loading || announcements.length === 0}
          >
            <i className="fa-solid fa-download me-2"></i> Download Styled PDF
          </button>
        </div>

        {/* 🌀 Content Display */}
        {loading ? (
          <div className="text-center text-muted">Loading announcements...</div>
        ) : announcements.length === 0 ? (
          <div className="text-center text-muted fs-5">
            No announcements available at the moment. Please check back later.
          </div>
        ) : (
          <div className="row g-4">
            {announcements.map((ann, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="p-4 rounded-4 shadow-lg h-100 bg-white bg-opacity-75">
                  <h4 className="fw-bold text-dark mb-2">{ann.title || "Untitled"}</h4>
                  <p className="text-muted mb-3">
                    <i className="fa-solid fa-calendar me-2"></i>
                    {ann.date || "No date provided"}
                  </p>
                  <p className="text-dark">
                    {ann.description || "No description available."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Announcements;
