import React from "react";
import "../contact/contact.css";
import { AiTwotoneMail } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_8sqtb69",
      "template_61j7hkm",
      form.current,
      "Kw7BPbVgvHBCp_QOI"
    );

    e.target.reset();
  };

  return (
    <section id="contact" className="contact_section">
      <h5 className="small-title">Get in touch</h5>
      <h2 className="big-title">Contact me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiTwotoneMail className="contact_icon" />
            <h4>Email</h4>
            <h5>jhoeduardonez@gmail.com</h5>
            <a href="mailto:jhoeduardonez@gmail.com" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <FaFacebookMessenger className="contact_icon" />
            <h4>Messenger</h4>
            <h5>jhoeduardonez@gmail.com</h5>
            <a
              href="https://m.me/profile.php?id=100004466837706"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <RiWhatsappFill className="contact_icon" />
            <h4>Whatsapp</h4>
            <h5>+573172899381</h5>
            <a
              href="https://web.whatsapp.com/send?phone+573172899381"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="your full name"
            required
          />
          <input type="text" name="email" placeholder="your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
