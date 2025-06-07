import express from "express";

import { signOut, signUp, signIn } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/logout", signOut);

export default router;