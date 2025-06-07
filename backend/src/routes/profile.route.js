import express from "express";

import { authProtect } from "../middleware/auth.middleware.js"
import { profileUpdate } from "../controllers/profile.controller.js"

const router = express.Router();

router.put("/update", authProtect, profileUpdate)

/**
 * TODO
 * /update
 * /delete
 */

export default router;