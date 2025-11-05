import React, { useContext, useState } from "react";
import { ContentContext } from "../ContentContext";

const PAGES = [
  { id: 'announcements', fields: [{ key: 'title', label: 'Title' }, { key: 'intro', label: 'Intro' }] },
  { id: 'news', fields: [{ key: 'title', label: 'Title' }, { key: 'intro', label: 'Intro' }] },
  { id: 'dailyReadings', fields: [{ key: 'title', label: 'Title' }, { key: 'ctaLabel', label: 'Button Label' }, { key: 'ctaUrl', label: 'Button URL' }] },
  { id: 'churchHistory', fields: [{ key: 'title', label: 'Title' }, { key: 'subtitle', label: 'Subtitle' }] },
];

const AdminPageEditor = () => {
  const { content, savePage } = useContext(ContentContext);
  const [pageId, setPageId] = useState('announcements');

  const fields = PAGES.find(p => p.id === pageId)?.fields || [];

  const handleSave = () => {
    alert('Page content saved.');
  };

  return (
    <div>
      <h2 className="mb-3">Pages Editor</h2>
      <div className="row g-3">
        <div className="col-md-4">
          <label className="form-label">Select Page</label>
          <select className="form-select" value={pageId} onChange={(e) => setPageId(e.target.value)}>
            {PAGES.map(p => (
              <option key={p.id} value={p.id}>{p.id}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="row g-3 mt-1">
        {fields.map(f => (
          <div key={f.key} className="col-md-6">
            <label className="form-label">{f.label}</label>
            <input
              className="form-control"
              value={content?.pages?.[pageId]?.[f.key] || ''}
              onChange={(e) => savePage(pageId, f.key, e.target.value)}
            />
          </div>
        ))}
      </div>

      {/* Announcements: PDF upload manager */}
      {pageId === 'announcements' && (
        <div className="mt-4">
          <h5 className="mb-2">Attach PDF documents</h5>
          <input
            type="file"
            accept="application/pdf"
            className="form-control"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              const reader = new FileReader();
              reader.onload = (ev) => {
                const dataUrl = ev.target?.result;
                if (!dataUrl || typeof dataUrl !== 'string') return;
                const prev = content?.pages?.announcements?.pdfs || [];
                const next = [
                  { name: file.name, dataUrl, uploadedAt: new Date().toISOString() },
                  ...prev,
                ];
                savePage('announcements', 'pdfs', next);
              };
              reader.readAsDataURL(file);
              // reset input so same file can be re-selected
              e.target.value = '';
            }}
          />
          <div className="mt-3">
            {(content?.pages?.announcements?.pdfs || []).length === 0 ? (
              <p className="text-muted">No PDFs uploaded yet.</p>
            ) : (
              <div className="list-group">
                {(content?.pages?.announcements?.pdfs || []).map((p, idx) => (
                  <div key={idx} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <i className="fa-regular fa-file-pdf me-2 text-danger"></i>
                      <strong>{p.name}</strong>
                      <span className="text-muted ms-2" style={{fontSize: '0.9rem'}}>
                        {new Date(p.uploadedAt).toLocaleString()}
                      </span>
                    </div>
                    <div className="d-flex gap-2">
                      <a href={p.dataUrl} download={p.name} className="btn btn-sm btn-outline-secondary">Download</a>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => {
                          const list = (content?.pages?.announcements?.pdfs || []).filter((_, i) => i !== idx);
                          savePage('announcements', 'pdfs', list);
                        }}
                      >Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <p className="text-muted mt-2" style={{fontSize: '0.9rem'}}>
            Note: Files are stored locally in your browser (no server upload). Large PDFs may exceed browser storage limits.
          </p>
        </div>
      )}

      <button className="btn btn-dark mt-3" onClick={handleSave}>Save</button>
    </div>
  );
};

export default AdminPageEditor;


