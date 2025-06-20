import express from "express";
import { authProtect } from "../auth/auth.middleware.js";
import {
  getProfile,
  updateProfile,
  deleteAccount,
  changePassword,
  forgotPassword,
} from "./account.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Account
 *   description: Account management endpoints
 */

/**
 * @swagger
 * /account/profile:
 *   get:
 *     summary: Get current account profile
 *     tags: [Account]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Account profile
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /account/update:
 *   patch:
 *     summary: Update account profile
 *     tags: [Account]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               full_name:
 *                 type: string
 *               email:
 *                 type: string
 *               profilePic:
 *                 type: string
 *     responses:
 *       200:
 *         description: Updated account
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /account/delete:
 *   delete:
 *     summary: Delete current account
 *     tags: [Account]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Account deleted
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /account/change-password:
 *   post:
 *     summary: Change account password
 *     tags: [Account]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - oldPassword
 *               - newPassword
 *             properties:
 *               oldPassword:
 *                 type: string
 *               newPassword:
 *                 type: string
 *     responses:
 *       200:
 *         description: Password changed
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /account/forgot-password:
 *   post:
 *     summary: Request password reset (not implemented)
 *     tags: [Account]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       501:
 *         description: Not implemented
 */

// Get profile
router.get("/profile", authProtect, getProfile);
// Update profile
router.patch("/update", authProtect, updateProfile);
// Delete account
router.delete("/delete", authProtect, deleteAccount);
// Change password
router.post("/change-password", authProtect, changePassword);
// Forgot password
router.post("/forgot-password", forgotPassword);

export default router;
