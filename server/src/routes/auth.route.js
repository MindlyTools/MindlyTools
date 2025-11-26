import express from "express";
import admin from "../config/firebase.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();
const db = admin.database();

/**
 * POST /api/auth/google
 * Verifies Firebase token + stores/loads user profile
 */
router.post("/google", async (req, res) => {
  try {
    const header = req.headers.authorization;
    if (!header) return res.status(401).json({ error: "Missing token" });

    const token = header.split(" ")[1];
    const decoded = await admin.auth().verifyIdToken(token);

    const uid = decoded.uid;
    const userRef = db.ref(`users/${uid}`);
    const snapshot = await userRef.once("value");
    const user = snapshot.val();

    // FIRST LOGIN → create user profile
    if (!user) {
      await userRef.set({
        email: decoded.email,
        name: decoded.name || decoded.displayName || null,
        picture: decoded.picture || decoded.photoURL || null,
        username: null,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      });

      return res.json({ needsUsername: true });
    }

    // USER EXISTS BUT NEEDS USERNAME
    if (!user.username) {
      return res.json({ needsUsername: true });
    }

    // USER EXISTS + PROFILE COMPLETE
    return res.json({
      success: true,
      user: { uid, ...user }
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Auth failed" });
  }
});


/**
 * POST /api/auth/set-username
 * Securely saves username (cannot spoof UID)
 */
router.post("/set-username", verifyToken, async (req, res) => {
  try {
    const { username } = req.body;

    if (!username) {
      return res.status(400).json({ error: "Username is required" });
    }

    const uid = req.uid; // Comes from middleware

    // Fetch all users to ensure username is unique
    const usersSnapshot = await admin.database().ref("users").once("value");
    const allUsers = usersSnapshot.val() || {};

    for (const key in allUsers) {
      if (allUsers[key].username === username) {
        return res.status(400).json({ error: "Username already taken" });
      }
    }

    // Save username
    await admin.database().ref(`users/${uid}/username`).set(username);

    return res.json({ success: true });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to set username" });
  }
});

export default router;
