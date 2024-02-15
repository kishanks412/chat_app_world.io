import React, { useEffect, useMemo, useRef, useState } from "react";
import { io } from "socket.io-client";

const App = () => {

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  
  const socket = useMemo(
    () =>
      io(`${BACKEND_URL}`, {
        withCredentials: true,
      }),
    []
  );

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", { message });
    setMessage("");
  };

  useEffect(() => {
    socket.on("connect", () => {
      // console.log("connected", socket.id);
    });

    socket.on("receive-message", (data) => {
      // console.log(data);
      setMessages((messages) => [...messages, data]);
    });

  

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="container mx-auto max-w-4xl mt-[5%] p-6 bg-gray-200 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-6 text-center text-blue-600">
        Welcome to WorldCup.io
      </h2>

      <div className="overflow-auto max-h-80 min-h-80 border-4 border-gray-400 rounded-lg p-4 ">
        {messages.length === 0 ? (
          <div className="h-full flex justify-center items-center">
            <p className="text-2xl text-gray-500">Let's start chat</p>
          </div>
        ) : (
          <>
            {messages.map((m, i) => (
              <p key={i} className="text-lg">
                {m}
              </p>
            ))}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      <form onSubmit={handleSubmit} className="mt-6">
        <div className="flex items-center">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-gray-400 rounded-l-md px-4 py-3 mr-2 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
