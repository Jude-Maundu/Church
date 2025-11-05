import React, { createContext, useCallback, useEffect, useMemo, useState } from "react";

const defaultContent = {
  home: {
    heroTitle: "Welcome to St John the Evangelist Parish",
    heroSubtitle: "A place of worship, community, and growth.",
    gallery: ["/DSC_0176-scaled.jpg", "/Untitled.jpeg", "/evangeist-logoz.jpg", "/logo192.png"],
    massSchedule: {
      sunday: "7:00 AM, 9:00 AM & 10:00 AM",
      weekdays: "6:00 PM",
      thursdays: "6:00 PM",
    },
  },
  contact: {
    address: "Langata South Rd",
    email: "info@stjohntheevangelistchurch.co.ke",
    phonePrimary: "020-3882000",
    phoneSecondary: "0797828903",
  },
  assistant: {
    facts: {},
  },
  pages: {
    announcements: { title: "Church Announcements", intro: "Stay updated with all the latest news and announcements from St John the Evangelist Parish." },
    news: { title: "News & Events", intro: "Stay up to date with the latest happenings and upcoming events at St John the Evangelist Parish." },
    dailyReadings: { title: "DAILY READINGS", ctaLabel: "Click Here", ctaUrl: "https://www.vaticannews.va/en/word-of-the-day.html" },
    churchHistory: { title: "Our Parish History", subtitle: "A Journey of Faith, Community, and Growth" },
  },
};

export const ContentContext = createContext({ content: defaultContent, save: () => {}, reset: () => {}, savePage: () => {}, getText: () => "" });

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState(defaultContent);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("siteContentOverrides");
      if (stored) {
        const overrides = JSON.parse(stored);
        setContent((c) => ({ ...c, ...overrides }));
      }
    } catch {}
  }, []);

  const save = useCallback((path, value) => {
    setContent((prev) => {
      const next = JSON.parse(JSON.stringify(prev));
      const keys = path.split(".");
      let cur = next;
      for (let i = 0; i < keys.length - 1; i++) {
        cur[keys[i]] = cur[keys[i]] || {};
        cur = cur[keys[i]];
      }
      cur[keys[keys.length - 1]] = value;
      try { localStorage.setItem("siteContentOverrides", JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const savePage = useCallback((pageId, key, value) => {
    setContent((prev) => {
      const next = JSON.parse(JSON.stringify(prev));
      next.pages = next.pages || {};
      next.pages[pageId] = next.pages[pageId] || {};
      next.pages[pageId][key] = value;
      try { localStorage.setItem("siteContentOverrides", JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const getText = useCallback((pageId, key, fallback) => {
    return content?.pages?.[pageId]?.[key] ?? fallback;
  }, [content]);

  const reset = useCallback(() => {
    try { localStorage.removeItem("siteContentOverrides"); } catch {}
    setContent(defaultContent);
  }, []);

  const value = useMemo(() => ({ content, save, reset, savePage, getText }), [content, save, reset, savePage, getText]);

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
};


