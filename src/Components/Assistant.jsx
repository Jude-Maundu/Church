import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { ContentContext } from "../ContentContext";
import "./Assistant.css";

const getSpeechRecognition = () => {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) return null;
  const rec = new SR();
  rec.lang = "en-US";
  rec.interimResults = false;
  rec.continuous = false;
  return rec;
};

const speak = (text) => {
  try {
    const synth = window.speechSynthesis;
    if (!synth) return;
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 1;
    utter.pitch = 1;
    synth.cancel();
    synth.speak(utter);
  } catch {}
};

const Assistant = () => {
  const [open, setOpen] = useState(false);
  const [listening, setListening] = useState(false);
  const [history, setHistory] = useState([]); // {role: 'user'|'assistant', text}
  const [input, setInput] = useState("");
  const recognitionRef = useRef(null);
  const MicSupported = !!(window.SpeechRecognition || window.webkitSpeechRecognition);

  // Lightweight knowledge base (site-specific facts and actions)
  const { content } = useContext(ContentContext);
  const knowledge = useMemo(() => ({
    facts: {
      "mass schedule": "Sunday: 7:00 AM, 9:00 AM & 10:00 AM. Weekdays: 6:00 PM. Thursdays (Adoration): 6:00 PM.",
      "contact": "Email: info@stjohntheevangelistchurch.co.ke, Phone: 020-3882000 / 0797828903, Address: Langata South Rd.",
      "youtube": "Visit our YouTube Channel at https://youtube.com/@stjohntheevangelistparishk3514",
      "parish name": "St. John the Evangelist Parish",
      ...(content?.assistant?.facts || {}),
    },
    routes: {
      // core
      home: "/",
      about: "/#about",
      contact: "/contact",
      announcements: "/announcements",
      news: "/news",
      events: "/news",
      // jumuias
      "jumuias st anne": "/jumuias/st-anne",
      "jumuias st augustine": "/jumuias/st-augustine",
      "jumuias st claire": "/jumuias/st-claire",
      "jumuias st francis": "/jumuias/st-francis",
      "jumuias st michael": "/jumuias/st-michael",
      "jumuias st mary": "/jumuias/st-mary",
      "jumuias st josemaria": "/jumuias/st-josemaria",
      "jumuias st jude": "/jumuias/st-jude",
      "jumuias st monica": "/jumuias/st-monica",
      "jumuias st theresa": "/jumuias/st-theresa",
      "jumuias st padre pio": "/jumuias/st-padrepio",
      // choirs
      "choir upendo": "/choirs/upendo",
      "choir blessed voices": "/choirs/blessed-voices",
      "choir singers for christ": "/choirs/singers-for-christ",
      // church groups
      "group altar servers": "/church-groups/altar-servers",
      "group cma": "/church-groups/cma",
      "group cwa": "/church-groups/cwa",
      "group lay carmelites": "/church-groups/lay-carmelites",
      "group lay incarnate": "/church-groups/lay-incarnate",
      "group lay spiritans": "/church-groups/lay-spiritans",
      "group self help": "/church-groups/self-help",
      "group widows association": "/church-groups/widows-association",
      // sacraments
      "sacrament marriage requirements": "/sacraments/marriage-requirements",
      "sacrament anointing of the sick": "/sacraments/anointing-of-the-sick",
      "sacrament confession": "/sacraments/confession",
      "sacrament confirmation": "/sacraments/confirmation",
      "sacrament eucharist": "/sacraments/eucharist",
      "sacrament holy orders": "/sacraments/holy-orders",
      "sacrament baptism": "/sacraments/baptism",
      // church
      "church history": "/church/history",
    },
    // Aliases to improve matching
    aliases: [
      { keys: ["events", "news", "news and events"], routeKey: "events" },
      { keys: ["announcements", "announcement", "notices"], routeKey: "announcements" },
      { keys: ["contact", "contacts", "get in touch"], routeKey: "contact" },
      { keys: ["about", "about us"], routeKey: "about" },
      { keys: ["home", "homepage"], routeKey: "home" },
      // groups
      { keys: ["cma", "catholic men"], routeKey: "group cma" },
      { keys: ["cwa", "catholic women"], routeKey: "group cwa" },
      { keys: ["altar server", "altar servers"], routeKey: "group altar servers" },
      // sacraments short
      { keys: ["baptism"], routeKey: "sacrament baptism" },
      { keys: ["confirmation"], routeKey: "sacrament confirmation" },
      { keys: ["confession", "reconciliation"], routeKey: "sacrament confession" },
      { keys: ["eucharist", "holy communion"], routeKey: "sacrament eucharist" },
      { keys: ["holy orders"], routeKey: "sacrament holy orders" },
      { keys: ["anointing of the sick", "anointing"], routeKey: "sacrament anointing of the sick" },
      { keys: ["marriage requirements", "marriage"], routeKey: "sacrament marriage requirements" },
      // church
      { keys: ["church history", "history"], routeKey: "church history" },
      // choirs
      { keys: ["upendo choir", "upendo"], routeKey: "choir upendo" },
      { keys: ["blessed voices"], routeKey: "choir blessed voices" },
      { keys: ["singers for christ"], routeKey: "choir singers for christ" },
      // jumuias shortcuts
      { keys: ["st anne"], routeKey: "jumuias st anne" },
      { keys: ["st augustine"], routeKey: "jumuias st augustine" },
      { keys: ["st claire", "st clare"], routeKey: "jumuias st claire" },
      { keys: ["st francis"], routeKey: "jumuias st francis" },
      { keys: ["st michael"], routeKey: "jumuias st michael" },
      { keys: ["st mary"], routeKey: "jumuias st mary" },
      { keys: ["st josemaria"], routeKey: "jumuias st josemaria" },
      { keys: ["st jude"], routeKey: "jumuias st jude" },
      { keys: ["st monica"], routeKey: "jumuias st monica" },
      { keys: ["st theresa"], routeKey: "jumuias st theresa" },
      { keys: ["st padre pio", "padre pio"], routeKey: "jumuias st padre pio" },
    ],
    help: "You can ask: 'What time is mass?', 'Go to events', 'Contact details', 'Open YouTube', or 'Tell me about the parish'.",
  }), []);

  useEffect(() => {
    recognitionRef.current = getSpeechRecognition();
    if (recognitionRef.current) {
      recognitionRef.current.onresult = (e) => {
        const transcript = Array.from(e.results)
          .map((r) => r[0]?.transcript || "")
          .join(" ")
          .trim();
        if (transcript) {
          handleUserInput(transcript);
        }
      };
      recognitionRef.current.onend = () => setListening(false);
      recognitionRef.current.onerror = () => setListening(false);
    }
  }, []);

  const startListening = () => {
    if (!recognitionRef.current) return;
    setListening(true);
    try { recognitionRef.current.start(); } catch {}
  };

  const stopListening = () => {
    if (!recognitionRef.current) return;
    try { recognitionRef.current.stop(); } catch {}
    setListening(false);
  };

  const addAssistantReply = (text) => {
    setHistory((h) => [...h, { role: "assistant", text }]);
    speak(text);
  };

  const navigateTo = (path) => {
    if (!path) return false;
    // HashRouter navigation support
    if (path.startsWith("/#")) {
      window.location.href = path;
    } else if (path === "/") {
      window.location.hash = "#/";
    } else if (path.startsWith("/")) {
      window.location.hash = `#${path}`;
    } else if (path.startsWith("#")) {
      window.location.hash = path;
    } else {
      window.location.hash = `#/${path}`;
    }
    // close assistant after navigation
    setOpen(false);
    return true;
  };

  // Basic NLU with keyword intents
  const handleUserInput = (raw) => {
    const text = raw.toLowerCase();
    setHistory((h) => [...h, { role: "user", text: raw }]);

    // Navigation intents
    // Generic route matcher for phrases like "go to ..." or "open ..."
    if (/(go|take|open).*(to )?(.+)/.test(text)) {
      const target = text.replace(/^(.*?(go|take|open)( to)?)/, "").trim();
      // Try alias list first
      for (const a of knowledge.aliases) {
        if (a.keys.some(k => target.includes(k))) {
          const route = knowledge.routes[a.routeKey];
          return addAssistantReply(navigateTo(route) ? `Opening ${a.keys[0]}.` : "Couldn't navigate.");
        }
      }
      // Try direct key includes
      const matchKey = Object.keys(knowledge.routes).find(k => target.includes(k));
      if (matchKey) {
        const route = knowledge.routes[matchKey];
        return addAssistantReply(navigateTo(route) ? `Opening ${matchKey}.` : "Couldn't navigate.");
      }
    }

    // Explicit common navigations
    if (/(go|take).*home/.test(text)) return addAssistantReply(navigateTo(knowledge.routes.home) ? "Taking you home." : "Couldn't navigate.");
    if (/(go|take).*(about)/.test(text)) return addAssistantReply(navigateTo(knowledge.routes.about) ? "Opening About section." : "Couldn't navigate.");
    if (/(go|take).*(contact)/.test(text)) return addAssistantReply(navigateTo(knowledge.routes.contact) ? "Opening Contact page." : "Couldn't navigate.");
    if (/(go|take).*(event|news)/.test(text)) return addAssistantReply(navigateTo(knowledge.routes.events) ? "Opening Events page." : "Couldn't navigate.");
    if (/(go|take).*(announcement)/.test(text)) return addAssistantReply(navigateTo(knowledge.routes.announcements) ? "Opening Announcements." : "Couldn't navigate.");

    // Facts
    if (/mass|schedule|time.*mass/.test(text)) return addAssistantReply(knowledge.facts["mass schedule"]);
    if (/contact|email|phone|address/.test(text)) return addAssistantReply(knowledge.facts["contact"]);
    if (/youtube|video|channel/.test(text)) return addAssistantReply(knowledge.facts["youtube"]);
    if (/who.*(are|is).*we|parish|name/.test(text)) return addAssistantReply(`${knowledge.facts["parish name"]}. ${knowledge.help}`);

    // Commands
    if (/open.*youtube|play.*(mass|video)/.test(text)) {
      window.open("https://youtube.com/@stjohntheevangelistparishk3514", "_blank");
      return addAssistantReply("Opening our YouTube channel in a new tab.");
    }

    if (/(help|what can you do)/.test(text)) return addAssistantReply(knowledge.help);

    // Fallback
    return addAssistantReply("Sorry, I didn't catch that. " + knowledge.help);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const val = input.trim();
    setInput("");
    handleUserInput(val);
  };

  return (
    <div className={`assistant ${open ? "open" : ""}`}>
      {/* Toggle Button */}
      {!open && (
        <button className="assistant-toggle" onClick={() => setOpen(true)} aria-label="Open assistant">
          <i className="fa-solid fa-robot"></i>
        </button>
      )}

      {open && (
        <div className="assistant-panel shadow-lg">
          <div className="assistant-header">
            <div className="d-flex align-items-center gap-2">
              <i className="fa-solid fa-robot"></i>
              <span>Parish Assistant</span>
            </div>
            <button className="assistant-close" onClick={() => setOpen(false)} aria-label="Close assistant">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div className="assistant-body">
            {history.length === 0 ? (
              <div className="assistant-empty text-muted">
                Ask me about mass times, contact info, or say "Go to events".
              </div>
            ) : (
              history.map((m, idx) => (
                <div key={idx} className={`assistant-msg ${m.role}`}>
                  <div className="bubble">{m.text}</div>
                </div>
              ))
            )}
          </div>

          <div className="assistant-footer">
            <form onSubmit={handleSubmit} className="assistant-input">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                aria-label="Assistant input"
              />
              {MicSupported && (
                <button
                  type="button"
                  className={`mic ${listening ? "listening" : ""}`}
                  onClick={listening ? stopListening : startListening}
                  title={listening ? "Stop listening" : "Start listening"}
                >
                  <i className="fa-solid fa-microphone"></i>
                </button>
              )}
              <button type="submit" className="send" aria-label="Send">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assistant;


