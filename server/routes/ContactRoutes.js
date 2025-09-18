import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// POST: Save a contact message
router.post("/", async (req, res) => {
  try {
    const newMessage = new Contact(req.body);
    await newMessage.save();
    res.status(201).json({ message: "Message saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error saving message" });
  }
});

export default router;
