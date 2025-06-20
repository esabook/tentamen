// /**
//  * @swagger
//  * tags:
//  *   name: AccountProfile
//  *   description: Account profile endpoints
//  */

// /**
//  * @swagger
//  * /profile/update:
//  *   post:
//  *     summary: Update account profile
//  *     tags: [AccountProfile]
//  *     security:
//  *       - cookieAuth: []
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               full_name:
//  *                 type: string
//  *               profile_pic:
//  *                 type: string
//  *     responses:
//  *       200:
//  *         description: Profile updated successfully
//  *       400:
//  *         description: Invalid input
//  *       404:
//  *         description: Account not found
//  *       500:
//  *         description: Server error
//  */

// /**
//  * @swagger
//  * /profile/delete:
//  *   post:
//  *     summary: Delete account profile
//  *     tags: [AccountProfile]
//  *     security:
//  *       - cookieAuth: []
//  *     responses:
//  *       200:
//  *         description: Profile deleted successfully
//  *       404:
//  *         description: Account not found
//  *       500:
//  *         description: Server error
//  */

// /**
//  * @swagger
//  * /profile/deactivate:
//  *   post:
//  *     summary: Deactivate account profile (set isActive to false)
//  *     tags: [AccountProfile]
//  *     security:
//  *       - cookieAuth: []
//  *     responses:
//  *       200:
//  *         description: Profile deactivated successfully
//  *       404:
//  *         description: Account not found
//  *       500:
//  *         description: Server error
//  */

// import express from "express";

// import { authProtect } from "../auth/auth.middleware.js"
// import { profileUpdate, profileDelete, profileDeactivate } from "./profile.controller.js"

// const router = express.Router();

// router.post("/update", authProtect, profileUpdate)
// router.post("/delete", authProtect, profileDelete)
// router.post("/deactivate", authProtect, profileDeactivate)

// export default router;