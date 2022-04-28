import React, { useState } from "react";
import "./contact.css";

// const INITIAL_LIST = ["Learn React", "Learn Firebase", "Learn GraphQL"];*/
export default function Contact() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  // const [value, setValue] = useState("");
  // const [list, setList] = useState(INITIAL_LIST);
  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);
  // const handleSubmit = (event) => {
  // if (value) {
  // setList(list.concat(value));
  // }
  // setValue("");
  // event.preventDefault();
  // };
  return (
    <form name="contact" method="post" data-netlify="true" onSubmit="submit">
      <input type="hidden" name="form-name" value="contact" />
      <h2>Lets us improve the cat fight experience</h2>
      <h3>Name :</h3>
      <input
        name="name"
        className="input-contact"
        id="fullName"
        type="text"
        value={fullName}
        onChange={handleFullNameChange}
      />
      <h4>Email :</h4>
      <input
        name="email"
        className="input-contact"
        id="email"
        type="email"
        value={email}
        onChange={handleEmailChange}
      />
      <h5>Message :</h5>
      <input
        name="message"
        className="input-contact"
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
