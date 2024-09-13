import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = ({ title }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1r9qyyx",
        "template_olucgmg",
        form.current,
        "ygNyvuGy1WrEg5acp"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Повідомлення надіслано!");
        },
        (error) => {
          console.log(error.text);
          alert("Сталася помилка при надсиланні повідомлення.");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="hidden" name="user_title" value={title} />
      <label>Ім'я</label>
      <input type="text" name="user_name" required />
      <label>Phone</label>
      <input type="phone" name="user_phone" required />
      <label>Email</label>
      <input type="email" name="user_email" required />
      <label>Повідомлення</label>
      <textarea name="message" required />
      <input type="submit" value="Надіслати" />
    </form>
  );
};

export default ContactForm;
