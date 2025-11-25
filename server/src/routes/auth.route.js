import express from "express";
import admin from "../config/firebase.js";

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

    // USER EXISTS BUT NO USERNAME
    if (!user.username) {
      return res.json({ needsUsername: true });
    }

    // USER EXISTS + COMPLETE PROFILE
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
 * Save username to Firebase
 */
router.post("/set-username", async (req, res) => {
  try {
    const { uid, username } = req.body;

    if (!uid || !username) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const usersSnapshot = await admin.database().ref("users").once("value");
    const allUsers = usersSnapshot.val() || {};

    // ensure username is unique
    for (const key in allUsers) {
      if (allUsers[key].username === username) {
        return res.status(400).json({ error: "Username already taken" });
      }
    }

    await admin.database().ref(`users/${uid}/username`).set(username);

    res.json({ success: true });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to set username" });
  }
});

export default router;
