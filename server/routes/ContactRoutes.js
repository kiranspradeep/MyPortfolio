// server/routes/ContactRoutes.js
import express from "express";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "All fields required" });
    }

    // Later: save to MongoDB or send email via nodemailer
    console.log("📩 New contact form submission:", { name, email, message });

    res.status(200).json({ success: true, message: "Message received!" });
  } catch (err) {
    res.status(500).json({ success: false, error: "Server error" });
  }
});

export default router;
