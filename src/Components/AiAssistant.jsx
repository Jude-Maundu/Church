import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AiAssistant.css";

const AiAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();
  const recognitionRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (isOpen) {
      // Stop any speaking when chat opens/re-opens
      window.speechSynthesis.cancel();
      if (messages.length > 0) {
        return;
      }
      setMessages([
        {
          text: "Hello! I'm the parish AI assistant. How can I help you today? You can ask me about mass times, our priests, or about the parish.",
          sender: "bot",
        },
      ]);
      setShowSuggestions(true);
    } else {
      // When chat is closed, stop listening and speaking
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      window.speechSynthesis.cancel();
    }
  }, [isOpen]);

  // Setup Speech Recognition
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn("Speech Recognition is not supported by this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      handleVoiceInput(transcript);
    };

    recognitionRef.current = recognition;
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Enhanced AI response logic with navigation
  const getBotResponse = (userInput) => {
    const lowerCaseInput = userInput.toLowerCase();

    // Help Command
    if (lowerCaseInput.includes("help")) {
      const helpText = `Of course! Here's what I can do for you:\n
**You can ask me to navigate:**
• "Go to the home page"
• "Show me the events"
• "Take me to the about page"
• "Open the contact page"
• "Show me the image gallery"\n
**You can ask me for information:**
• "What are the mass times?"
• "Tell me about the priests"
• "Where can I watch the latest mass?"\n
**I can also control the interface:**
• "Open the side menu" or "Close the menu"
• "Scroll down"`;
      return { text: helpText };
    }

    // UI Commands
    if (lowerCaseInput.includes("open menu") || lowerCaseInput.includes("show menu")) {
      return { text: "Opening the side menu for you.", action: "toggleSideMenu" };
    }
    if (lowerCaseInput.includes("close menu")) {
      return { text: "Closing the side menu.", action: "toggleSideMenu" };
    }
    if (lowerCaseInput.includes("scroll down")) {
      return { text: "Scrolling down.", action: "scrollDown" };
    }
    // Navigation and page information
    if (lowerCaseInput.includes("home")) {
      return { text: "Taking you to the home page.", redirect: "/" };
    }
    if (lowerCaseInput.includes("contact")) {
      return { text: "Sure! I'll take you to the Contact Us page.", redirect: "/contact" };
    }
    if (lowerCaseInput.includes("event")) {
      return { text: "Here are the parish events.", redirect: "/events" };
    }
    if (lowerCaseInput.includes("singer") || lowerCaseInput.includes("choir")) {
      return { text: "Taking you to the Singers of Christ page.", redirect: "/singers-of-christ" };
    }
    if (lowerCaseInput.includes("gallery") || lowerCaseInput.includes("photo") || lowerCaseInput.includes("image")) {
      return { text: "Let's go to the Image Gallery. You can find it on the home page.", redirect: "/", scrollTo: "#homeGallery" };
    }
    if (lowerCaseInput.includes("about") && (lowerCaseInput.includes("section") || lowerCaseInput.includes("home"))) {
      return { text: "Here's the About Us section on the home page.", redirect: "/", scrollTo: "#about" };
    }
    if (lowerCaseInput.includes("about")) {
      return { text: "Taking you to the main About Us page.", redirect: "/about" };
    }
    if (lowerCaseInput.includes("reading") || lowerCaseInput.includes("rosary") || lowerCaseInput.includes("devotion")) {
      return { text: "You can find the Daily Spiritual Devotions, including readings and the rosary, on our home page.", redirect: "/", scrollTo: ".readings-section" };
    }

    // General questions
    if (lowerCaseInput.includes("hello") || lowerCaseInput.includes("hi")) {
      return { text: "Hello there! How can I assist you with information about the parish?" };
    }
    if (lowerCaseInput.includes("mass") && lowerCaseInput.includes("time")) {
      return { text: "Mass times are: Sundays at 7:00 AM, 9:00 AM & 10:00 AM, and Weekdays at 6:00 PM. Adoration is on Thursdays at 6:00 PM." };
    }
    if (lowerCaseInput.includes("priest")) {
      return { text: "Our priests are faithful shepherds who guide our parish with wisdom, humility, and devotion to Christ’s mission. You can find more in the 'About Us' section." };
    }
    if (lowerCaseInput.includes("youtube") || lowerCaseInput.includes("watch")) {
      return { text: 'You can watch our latest Masses on our YouTube channel. Search for "stjohntheevangelistparishk3514" on YouTube!' };
    }
    if (lowerCaseInput.includes("thank")) {
        return { text: "You're welcome! Is there anything else I can help you with?" };
    }

    return { text: "I'm sorry, I didn't understand that. You can type 'help' to see a list of things I can do. How can I assist you?" };
  };

  const handleNavigation = (redirect, scrollTo) => {
    if (redirect) {
      navigate(redirect);
      // Use a timeout to ensure the page has changed before scrolling
      if (scrollTo) {
        setTimeout(() => {
          document.querySelector(scrollTo)?.scrollIntoView({ behavior: 'smooth' });
        }, 300); // Adjust delay as needed
      }

      // Close the side menu if it's open
      const offcanvasElement = document.querySelector('.offcanvas.show');
      if (offcanvasElement)
        document.querySelector('.navbar-toggler[data-bs-toggle="offcanvas"]')?.click();
    }
  };

  const handleAction = (action) => {
    if (!action) return;

    switch (action) {
      case "toggleSideMenu":
        // Find and click the Bootstrap offcanvas toggler
        document.querySelector('.navbar-toggler[data-bs-toggle="offcanvas"]')?.click();
        break;
      case "scrollDown":
        window.scrollBy({ top: window.innerHeight * 0.7, behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  const speak = (text) => {
    // Cancel any previous speech before starting a new one
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.pitch = 1.1;
    window.speechSynthesis.speak(utterance);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    addMessage(inputValue, "user");
    setShowSuggestions(false);
    setInputValue("");
    setIsLoading(true);

    // Simulate bot thinking
    setTimeout(() => {
      const botResponseObj = getBotResponse(inputValue);
      addMessage(botResponseObj.text, "bot", botResponseObj);
    }, 1200);
  };

  const addMessage = (text, sender, botResponseObj = null) => {
    setMessages((prev) => [...prev, { text, sender }]);
    setIsLoading(false);

    if (sender === "bot") {
      speak(text);
      if (botResponseObj) {
        handleNavigation(botResponseObj.redirect, botResponseObj.scrollTo);
        handleAction(botResponseObj.action);
      }
    }
  };

  const handleVoiceInput = (transcript) => {
    addMessage(transcript, "user");
    setIsLoading(true);
    setShowSuggestions(false);

    setTimeout(() => {
      const botResponseObj = getBotResponse(transcript);
      addMessage(botResponseObj.text, "bot", botResponseObj);
    }, 1200);
  };

  const handleSuggestionClick = (question) => {
    if (isLoading) return;

    addMessage(question, "user");
    setShowSuggestions(false);
    setIsLoading(true);

    // Simulate bot thinking
    setTimeout(() => {
      const botResponseObj = getBotResponse(question);
      addMessage(botResponseObj.text, "bot", botResponseObj);
      handleNavigation(botResponseObj.redirect, botResponseObj.scrollTo);
    }, 1200);
  };

  const toggleListening = () => {
    if (isListening) recognitionRef.current?.stop();
    else recognitionRef.current?.start();
  };

  const handleClearChat = () => {
    // Stop any ongoing speech or listening
    window.speechSynthesis.cancel();
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
    }

    // Reset to the initial state
    setMessages([
      {
        text: "Hello! I'm the parish AI assistant. How can I help you today? You can ask me about mass times, our priests, or about the parish.",
        sender: "bot",
      },
    ]);
    setShowSuggestions(true);
  };

  const suggestionQuestions = [
    "What are the mass times?",
    "Take me to the gallery",
    "Tell me about the priests",
    "Show me today's readings",
  ];

  return (
    <div className="ai-assistant-container">
      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3 className="fw-bold">Parish Assistant</h3>
            <div className="header-buttons">
              <button onClick={() => handleSuggestionClick("help")} className="help-btn" title="Help">
                <i className="fas fa-question-circle"></i>
              </button>
              <button onClick={handleClearChat} className="clear-btn" title="Clear Chat">
                <i className="fas fa-trash-alt"></i>
              </button>
              <button onClick={toggleChat} className="close-btn">&times;</button>
            </div>
          </div>
          <div className="chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                <p>{msg.text}</p>
              </div>
            ))}
            {showSuggestions && messages.length === 1 && (
              <div className="suggestion-chips">
                {suggestionQuestions.map((q, i) => (
                  <button
                    key={i}
                    className="suggestion-chip"
                    onClick={() => handleSuggestionClick(q)}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
            {isLoading && (
              <div className="chat-message bot">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="chat-footer">
            <form onSubmit={handleSendMessage} className="d-flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask a question..."
                className="form-control"
                disabled={isLoading}
              />
              {recognitionRef.current && (
                <button type="button" className={`btn btn-secondary ms-2 mic-btn ${isListening ? 'listening' : ''}`} onClick={toggleListening} disabled={isLoading}>
                  <i className="fas fa-microphone"></i>
                </button>
              )}
              <button type="submit" className="btn btn-primary ms-2" disabled={isLoading}>
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button onClick={toggleChat} className="chat-toggle-btn">
        <i className={`fas ${isOpen ? "fa-times" : "fa-robot"}`}></i>
      </button>
    </div>
  );
};

export default AiAssistant;