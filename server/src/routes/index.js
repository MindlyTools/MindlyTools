import express from "express";
import authRoutes from "./auth.route.js";
import shoppingRoutes from "./shopping.route.js";
import userRoutes from "./user.route.js";
import habitsRoutes from "./habits.route.js";




const router = express.Router();

router.use("/auth", authRoutes);
router.use("/shopping", shoppingRoutes);
router.use("/user", userRoutes);
router.use("/habits", habitsRoutes);


export default router;
