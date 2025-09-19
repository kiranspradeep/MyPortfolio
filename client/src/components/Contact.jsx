// Contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // feedback message

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("⚠️ " + (data.error || "Something went wrong"));
      }
    } catch (err) {
      setStatus("❌ Server error. Try again later.");
    }

    setTimeout(() => setStatus(""), 4000); // clear after 4s
  };

  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Contact Me</h2>
      <motion.form onSubmit={handleSubmit}>
        <motion.input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <motion.input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <motion.textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <motion.button type="submit">Send</motion.button>
      </motion.form>
      {status && <p className="status-message">{status}</p>}
    </motion.div>
  );
}
