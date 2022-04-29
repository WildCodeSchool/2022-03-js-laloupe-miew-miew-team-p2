/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
import Footer from "@components/Footer";
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
    <form className="my-form">
      <input type="hidden" name="form-name" value="contact" />
      <h1 className="my-title">Lets us improve the cat fight experience</h1>
      <label htmlFor="name" className="my-label">
        Name :
      </label>
      <input
        name="name"
        className="input-contact"
        placeholder="Your name"
        id="fullName"
        type="text"
        value={fullName}
        onChange={handleFullNameChange}
        required
      />
      <label htmlFor="email" className="my-label">
        Email :
      </label>
      <input
        name="email"
        placeholder="Your email adress"
        className="input-contact"
        id="email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <label htmlFor="message " className="my-label">
        Message :
      </label>
      <textarea
        name="message"
        className="textarea-contact"
        id="message"
        type="message"
        placeholder="Write your message here..."
        value={message}
        onChange={handleMessageChange}
        required
      />
      <button id="btn" type="submit">
        SUBMIT
      </button>
      <Footer />
    </form>
  );
}
