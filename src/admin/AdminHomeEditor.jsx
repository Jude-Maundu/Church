import React, { useContext, useState } from "react";
import { ContentContext } from "../ContentContext";

const AdminHomeEditor = () => {
  const { content, save } = useContext(ContentContext);
  const [heroTitle, setHeroTitle] = useState(content?.home?.heroTitle || "");
  const [heroSubtitle, setHeroSubtitle] = useState(content?.home?.heroSubtitle || "");
  const [galleryText, setGalleryText] = useState((content?.home?.gallery || []).join("\n"));
  const [sunday, setSunday] = useState(content?.home?.massSchedule?.sunday || "");
  const [weekdays, setWeekdays] = useState(content?.home?.massSchedule?.weekdays || "");
  const [thursdays, setThursdays] = useState(content?.home?.massSchedule?.thursdays || "");

  const handleSave = () => {
    const gallery = galleryText
      .split(/\n|,/)
      .map((s) => s.trim())
      .filter(Boolean);
    save("home.heroTitle", heroTitle);
    save("home.heroSubtitle", heroSubtitle);
    save("home.gallery", gallery);
    save("home.massSchedule", { sunday, weekdays, thursdays });
    alert("Home content saved.");
  };

  return (
    <div>
      <h2 className="mb-3">Home Editor</h2>
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Hero Title</label>
          <input className="form-control" value={heroTitle} onChange={(e) => setHeroTitle(e.target.value)} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Hero Subtitle</label>
          <input className="form-control" value={heroSubtitle} onChange={(e) => setHeroSubtitle(e.target.value)} />
        </div>
        <div className="col-12">
          <label className="form-label">Gallery (one URL per line)</label>
          <textarea className="form-control" rows={6} value={galleryText} onChange={(e) => setGalleryText(e.target.value)} />
        </div>
        <div className="col-md-4">
          <label className="form-label">Sunday</label>
          <input className="form-control" value={sunday} onChange={(e) => setSunday(e.target.value)} />
        </div>
        <div className="col-md-4">
          <label className="form-label">Weekdays</label>
          <input className="form-control" value={weekdays} onChange={(e) => setWeekdays(e.target.value)} />
        </div>
        <div className="col-md-4">
          <label className="form-label">Thursdays</label>
          <input className="form-control" value={thursdays} onChange={(e) => setThursdays(e.target.value)} />
        </div>
      </div>
      <button className="btn btn-dark mt-3" onClick={handleSave}>Save</button>
    </div>
  );
};

export default AdminHomeEditor;


