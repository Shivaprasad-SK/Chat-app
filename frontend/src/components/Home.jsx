import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import io from "socket.io-client";
const socket = io("https://chatappbackend-azx4.onrender.com");

function Home() {
  // const [count, setCount] = useState(0);
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null);
  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
      // setCount((prevCount) => prevCount + 1);
      console.log("Message received: " + msg);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handlSend = () => {
    const input = document.getElementById("msg");
    const text = input.value.trim();
    if (text === "") {
      return;
    }
    setMessages((prevMessages) => [...prevMessages, text]);
    socket.emit("message", text);

    input.value = "";
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handlSend();
    }
  };

  return (
    <div className="container">
      <div className="msgsContainer">
        {messages.map((msg, index) => (
          <p className="msgs" key={index}>
            {msg}
          </p>
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="inputcontainer">
        <input
          className="input"
          id="msg"
          name="msg"
          type="text"
          placeholder="Type your message here..."
          onKeyDown={handleKeyDown}
        />
        <button onClick={handlSend}>Send</button>
      </div>
    </div>
  );
}

export default Home;
