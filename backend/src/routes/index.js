import express from "express";

import authRoutes from "./auth.route.js"
import profileRoutes from "./profile.route.js"

const router = express.Router();

/**
 * TODO:
 * /auth
 * /profile
 * 
 * /role
 * /permission
 * 
 * /soal
 * /ujian
 * /guru
 * /siswa
 * 
 */
router.use("/auth", authRoutes);
router.use("/profile", profileRoutes);


export default router;