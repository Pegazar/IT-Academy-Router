import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8w8u3bd",
        "template_l4fdswf",
        form.current,
        "6Axc3ehmkbALF8hEG"
      )
      .then(
        (result) => {
          setSuccess(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
        
  };
  return (
    <div className="contact">
      <form ref={form} onSubmit={sendEmail} action="">
        <div className="contact-title">
          <p>Contact</p>
        </div>
        <input type="text" placeholder="Name" name="user_name" />
        <input type="email" placeholder="Email" name="user_email" />
        <textarea name="message" rows="10" placeholder="Message"></textarea>
        <div className="btn">
          <button type="submit">Submit</button>
        </div>
        {success ? <div className="success"><p>Success</p></div> : <></>}
      </form>
    </div>
  );
}
