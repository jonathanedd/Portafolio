import React from "react";
import "../contact/contact.css";
import { AiTwotoneMail } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiTwotoneMail className="contact_icon" />
            <h4>Email</h4>
            <h5>jhoeduardonez@gmail.com</h5>
            <a href="mailto:jhoeduardonez@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <FaFacebookMessenger className="contact_icon"/>
            <h4>Messenger</h4>
            <h5>jhoeduardonez@gmail.com</h5>
            <a
              href="https://m.me/profile.php?id=100004466837706"
              target="_blank"
            >
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <RiWhatsappFill className="contact_icon"/>
            <h4>Whatsapp</h4>
            <h5>+573172899381</h5>
            <a
              href="https://web.whatsapp.com/send?phone+573172899381"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder="your full name" required />
          <input type="text" name='email' placeholder="your email" required />
          <textarea name="message"  rows="7" placeholder="Your message"></textarea>
        </form>
      </div>
    </section>
  );
};

export default Contact;
