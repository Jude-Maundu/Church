import React, { useContext, useState } from "react";
import { ContentContext } from "../ContentContext";

const AdminAssistantEditor = () => {
  const { content, save } = useContext(ContentContext);
  const [factsText, setFactsText] = useState(() => {
    const facts = content?.assistant?.facts || {};
    return Object.entries(facts).map(([k, v]) => `${k}: ${v}`).join("\n");
  });

  const handleSave = () => {
    const entries = factsText
      .split(/\n/)
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const idx = line.indexOf(":");
        if (idx === -1) return null;
        const key = line.slice(0, idx).trim();
        const val = line.slice(idx + 1).trim();
        if (!key || !val) return null;
        return [key, val];
      })
      .filter(Boolean);
    const facts = Object.fromEntries(entries);
    save("assistant.facts", facts);
    alert("Assistant facts saved.");
  };

  return (
    <div>
      <h2 className="mb-3">Assistant Knowledge</h2>
      <p className="text-muted">Add custom Q&A facts. One per line as "key: value". Examples: "mass schedule: Sunday 7,9,10..."</p>
      <textarea className="form-control" rows={10} value={factsText} onChange={(e) => setFactsText(e.target.value)} />
      <button className="btn btn-dark mt-3" onClick={handleSave}>Save</button>
    </div>
  );
};

export default AdminAssistantEditor;


