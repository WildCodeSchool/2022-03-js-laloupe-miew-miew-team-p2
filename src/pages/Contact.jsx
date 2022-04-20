import React, { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");

  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  return (
    <form>
      <h2>Contact Us</h2>
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
    </form>
  );
}
