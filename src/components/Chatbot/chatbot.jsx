import { useState, useEffect } from "react";
import './chatbot.css';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋 How can I help you with your matchmaking journey?" }
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    setMessages([...messages, { sender: "user", text: message }]);
    const userMessage = message;
    setMessage("");

    // Simple AI responses for matrimony app
    setTimeout(() => {
      let botResponse = "I'm here to help with your matchmaking journey! How can I assist you today?";

      const lowerMsg = userMessage.toLowerCase();
      if (lowerMsg.includes("profile") || lowerMsg.includes("create")) {
        botResponse = "Creating a profile is the first step! Make sure to fill in all details accurately for better matches. Need help with that?";
      } else if (lowerMsg.includes("match") || lowerMsg.includes("find")) {
        botResponse = "Our matching algorithm considers compatibility factors. The more complete your profile, the better your matches!";
      } else if (lowerMsg.includes("help") || lowerMsg.includes("support")) {
        botResponse = "I'm here to help! You can ask about profiles, matches, verification, or any questions about using the platform.";
      } else if (lowerMsg.includes("login") || lowerMsg.includes("register") || lowerMsg.includes("account")) {
        botResponse = "You can login with your existing account or register for a new one. Both options are available on the login page. New users will go through mobile and Aadhar verification.";
      } else if (lowerMsg.includes("existing") || lowerMsg.includes("already have")) {
        botResponse = "If you already have an account, use the Login tab on the login page with your email and password.";
      } else if (lowerMsg.includes("new user") || lowerMsg.includes("first time")) {
        botResponse = "For new users, select the Register tab and fill in your details. You'll then verify your mobile number and Aadhar.";
      } else if (lowerMsg.includes("payment") || lowerMsg.includes("premium")) {
        botResponse = "We offer premium features for better visibility. Contact support for pricing details.";
      } else if (lowerMsg.includes("aadhar") || lowerMsg.includes("verification")) {
        botResponse = "Aadhar verification requires your last 4 digits and registered mobile number. We'll send an OTP to verify your identity securely.";
      } else if (lowerMsg.includes("mobile") || lowerMsg.includes("phone")) {
        botResponse = "Mobile verification is the first step. After that, you'll verify your Aadhar number for complete profile verification.";
      }

      setMessages(prev => [...prev, { sender: "bot", text: botResponse }]);
    }, 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      {/* Help Button */}
      <button
        className="help-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fas fa-question-circle help-icon"></i>
        Need help?
      </button>

      {/* Chat Popup */}
      <div className={`chat-popup ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <div className="header-info">
            <div className="header-icon">🤖</div>
            <div>
              <div>AI Assistant</div>
              <div className="header-status">
                <div className="status-dot"></div>
                Online
              </div>
            </div>
          </div>
          <button
            className="close-button"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
        </div>

        <div className="chat-body">
          {messages.map((msg, i) => (
            <div key={i} className={`message ${msg.sender}`}>
              <div className="message-content">
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <div className="chat-footer">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            autoFocus
          />
          <button onClick={sendMessage} disabled={!message.trim()}>
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
