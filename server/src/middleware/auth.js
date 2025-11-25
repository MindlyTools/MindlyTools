import admin from "../config/firebase.js";
import User from "../models/User.js";

const auth = async (req, res, next) => {
  const header = req.headers.authorization;

  if (!header)
    return res.status(401).json({ error: "Missing Authorization header" });

  const token = header.split(" ")[1];

  try {
    const decoded = await admin.auth().verifyIdToken(token);

    const [user] = await User.findOrCreate({
      where: { uid: decoded.uid },
      defaults: {
        email: decoded.email,
        name: decoded.name || decoded.displayName || null,
        picture: decoded.picture || decoded.photoURL || null
      },
    });

    req.user = user;
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};

export default auth;
