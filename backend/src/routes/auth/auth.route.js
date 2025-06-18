// auth.route.js

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication endpoints
 */

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Register a new account
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - full_name
 *               - email
 *               - password
 *             properties:
 *               full_name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Account registered
 *       400:
 *         description: Invalid input or already registered
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /auth/signin:
 *   post:
 *     summary: Login and receive JWT (set as cookie)
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login success
 *       400:
 *         description: Invalid credentials
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /auth/logout:
 *   get:
 *     summary: Logout account (clear JWT cookie)
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Logout success
 */

import express from "express";
import { signOut, signUp, signIn } from './auth.controller.js';

const router = express.Router();

router.post("/signup", signUp); // Register new account
router.post("/signin", signIn); // Login account
router.get("/logout", signOut); // Logout account

export default router;