import React from "react";

const ShareButtons = ({ url, title }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="d-flex justify-content-center gap-3 mt-4">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline-primary rounded-pill"
      >
        <i className="bi bi-facebook"></i> Facebook
      </a>

      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline-info rounded-pill"
      >
        <i className="bi bi-twitter"></i> Twitter
      </a>

      <a
        href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline-success rounded-pill"
      >
        <i className="bi bi-whatsapp"></i> WhatsApp
      </a>
    </div>
  );
};

export default ShareButtons;
