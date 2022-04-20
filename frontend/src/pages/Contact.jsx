import React, { useState } from "react";
import "./contact.css";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");

  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  return (
    <form>
      <h2>Let s us improve the cat fight experience</h2>
      <label htmlFor="fullName">
        Name :
        <input
          id="fullName"
          type="text"
          value={fullName}
          onChange={handleFullNameChange}
        />
      </label>
      <br />
      <label htmlFor="email">
        Email :
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <label htmlFor="message">
        Message :
        <input
          id="message"
          type="message"
          value={message}
          onChange={handleMessageChange}
        />
      </label>
      <div>
        <h3>The Meow Team Copyright 2022</h3>
        <h4> No cats were harmed during the developpement of this game</h4>
      </div>
    </form>
  );
}
