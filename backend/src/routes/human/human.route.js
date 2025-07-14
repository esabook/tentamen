import express from "express";
import { getAllHumans, updateHuman, deleteHuman, archiveHuman, addHuman } from './human.controller.js';
import { authProtect } from "../auth/auth.middleware.js"

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Human
 *   description: Human (person) management endpoints
 */

/**
 * @swagger
 * /human/all:
 *   get:
 *     summary: Get all humans (with pagination)
 *     tags: [Human]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: size
 *         schema:
 *           type: integer
 *         description: Page size
 *     responses:
 *       200:
 *         description: List of humans
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /human/add:
 *   post:
 *     summary: Create a new human
 *     tags: [Human]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - identity
 *               - identity_tipe
 *             properties:
 *               identity:
 *                 type: string
 *               identity_tipe:
 *                 type: string
 *               full_name:
 *                 type: string
 *               birth_date:
 *                 type: string
 *               contact:
 *                 type: string
 *               contact_other:
 *                 type: string
 *               profile_image:
 *                 type: string
 *     responses:
 *       201:
 *         description: Human created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /human/update/{id}:
 *   post:
 *     summary: Update human data by ID
 *     tags: [Human]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Human ID (MongoDB _id)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               full_name:
 *                 type: string
 *               birth_date:
 *                 type: string
 *               contact:
 *                 type: string
 *               contact_other:
 *                 type: string
 *               profile_image:
 *                 type: string
 *     responses:
 *       200:
 *         description: Human updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Human not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /human/delete/{id}:
 *   post:
 *     summary: Delete human data by ID
 *     tags: [Human]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Human ID (MongoDB _id)
 *     responses:
 *       200:
 *         description: Human deleted
 *       404:
 *         description: Human not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /human/archive/{id}:
 *   post:
 *     summary: Archive human data (set archived=true) by ID
 *     tags: [Human]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Human ID (MongoDB _id)
 *     responses:
 *       200:
 *         description: Human archived
 *       404:
 *         description: Human not found
 *       500:
 *         description: Server error
 */

/**
 * /all?page=1&size=10
 * /add
 * /update/:id
 * /archive/:id
 * /delete/:id
 */

router.get("/all", authProtect, getAllHumans);
router.post("/add", authProtect, addHuman);
router.post("/update/:id", authProtect, updateHuman);
router.post("/delete/:id", authProtect, deleteHuman);
router.post("/archive/:id", authProtect, archiveHuman);

export default router;