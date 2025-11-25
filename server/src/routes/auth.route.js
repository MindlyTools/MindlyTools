import express from "express";
import admin from "../config/firebase.js";
import User from "../models/User.js";

const router = express.Router();

/**
 * Google Login Route
 * Frontend sends Firebase ID token in Authorization header
 * Backend verifies token and checks whether username exists
 */
router.post("/google", async (req, res) => {
  try {
    const header = req.headers.authorization;
    if (!header) return res.status(401).json({ error: "Missing token" });

    const token = header.split(" ")[1];
    const decoded = await admin.auth().verifyIdToken(token);

    let user = await User.findOne({ where: { uid: decoded.uid } });

    // User does not exist → create with null username
    if (!user) {
      user = await User.create({
        uid: decoded.uid,
        email: decoded.email,
        name: decoded.name || decoded.displayName || null,
        picture: decoded.picture || decoded.photoURL || null,
        username: null
      });

      return res.json({ newUser: true, needsUsername: true });
    }

    // User exists but has no username → choose username page
    if (!user.username) {
      return res.json({ needsUsername: true });
    }

    // Login successful
    return res.json({
      success: true,
      user
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Auth failed" });
  }
});

/**
 * Set Username Route
 * Frontend sends: { uid, username }
 * Saves username for new users
 */
router.post("/set-username", async (req, res) => {
  try {
    const { uid, username } = req.body;

    if (!uid || !username)
      return res.status(400).json({ error: "Missing uid or username" });

    // Username must be unique
    const exists = await User.findOne({ where: { username } });
    if (exists)
      return res.status(400).json({ error: "Username already taken" });

    const user = await User.findOne({ where: { uid } });
    if (!user)
      return res.status(404).json({ error: "User not found" });

    user.username = username;
    await user.save();

    return res.json({ success: true, user });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to save username" });
  }
});

/**
 * Protected route: GET /api/auth/me
 * Returns logged-in user
 */
router.get("/me", async (req, res) => {
  try {
    const header = req.headers.authorization;
    if (!header) return res.status(401).json({ error: "Missing token" });

    const token = header.split(" ")[1];
    const decoded = await admin.auth().verifyIdToken(token);

    const user = await User.findOne({ where: { uid: decoded.uid } });
    if (!user) return res.status(404).json({ error: "User not found" });

    return res.json({ authenticated: true, user });

  } catch (err) {
    console.error(err);
    return res.status(401).json({ error: "Invalid token" });
  }
});

export default router;
