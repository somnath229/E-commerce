import React, { useState, useRef, useEffect } from "react";
import "../style/Chatbot.css";
import logoChat from "../chatbotlogo.png";

const logo = {
  name: "Hedy Lamarr",
  imageUrl: logoChat,
  imageSize: 90,
};
const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [chatShow, setChatShow] = useState(false);
   const chatEndRef = useRef(null);

  const predefinedQA = {
    hello: "Hi there! How can I help you?",
    "how are you": "I'm just a bot, but I'm doing great! How about you?",
    "what is your name": "I'm a sales chatbot.",
    "what can you do":
      "I can help you find products and assist with your shopping experience.",
  };
  const questions = Object.keys(predefinedQA);

  const sendMessage = (question) => {
    const userMessage = input.toLowerCase() || question;
    setMessages([...messages, { text: userMessage, user: true }]);

    setTimeout(() => {
      const botReply =
        predefinedQA[userMessage] || "I'm sorry, I don't understand that.";
      setMessages([
        ...messages,
        { text: userMessage, user: true },
        { text: botReply, user: false },
      ]);
      setInput("");
    }, 1000);
  };
useEffect(() => {
  chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages]); 
  return (
    <div className="container">
      <div>
        <button
          onClick={() => setChatShow((prev) => !prev)}
          className={`arrow ${chatShow ? "chat-toggler1" : "chat-toggler2"}`}>
          {" "}
          <h1>🗨️</h1>
        </button>
      </div>
      <div className={`chatbot flex ${chatShow ? "chat-show" : "chat-hide"}`}>
        <div className="logoC flex">
          <img
            src={logo.imageUrl}
            style={{
              width: logo.imageSize,
              height: logo.imageSize,
            }}
          />
          {/* <button className="arrow">
            <h1>X</h1>
          </button> */}
        </div>
        <div className="chat-window">
          <div className="chat-body flex">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={msg.user ? "user-message" : "bot-message"}>
                {msg.text}
              </div>
            ))}
            <div ref={chatEndRef}></div>
          </div>
        </div>
        <div className="question-buttons flex">
          {questions.map((question, index) => (
            <button key={index} onClick={() => sendMessage(question)}>
              {question}
            </button>
          ))}
        </div>
        <div className="input flex">
          <input
            className="input-area"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="button"
            placeholder="Message...">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
