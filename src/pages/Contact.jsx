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
      <h2>Lets us improve the cat fight experience</h2>
      <h3>Name :</h3>
      <input
        className="my_inpput"
        id="fullName"
        type="text"
        value={fullName}
        onChange={handleFullNameChange}
      />
      <h4>Email :</h4>
      <input
        id="email"
        type="email"
        value={email}
        onChange={handleEmailChange}
      />
      <h5>Message :</h5>
      <input
        id="message"
        type="message"
        value={message}
        onChange={handleMessageChange}
      />
      <button id="btn" type="submit">
        SUBMIT
      </button>
    </form>
  );
}
