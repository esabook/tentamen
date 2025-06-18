import express from "express";
import { getAllInstitutions, addInstitution, updateInstitution, deleteInstitution } from './institution.controller.js';
import { authProtect } from "../auth/auth.middleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Institution
 *   description: Institution management endpoints
 */

/**
 * @swagger
 * /institution/all:
 *   get:
 *     summary: Get all institutions (with pagination)
 *     tags: [Institution]
 *     security:
 *       - cookieAuth: []
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
 *         description: List of institutions
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /institution/add:
 *   post:
 *     summary: Add a new institution
 *     tags: [Institution]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               ...: # Tambahkan field lain sesuai model
 *                 type: string
 *     responses:
 *       200:
 *         description: Institution added
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /institution/update:
 *   post:
 *     summary: Update institution data
 *     tags: [Institution]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               ...: # Tambahkan field lain sesuai model
 *                 type: string
 *     responses:
 *       200:
 *         description: Institution updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Institution not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /institution/delete:
 *   post:
 *     summary: Delete institution data
 *     tags: [Institution]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *     responses:
 *       200:
 *         description: Institution deleted
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Institution not found
 *       500:
 *         description: Server error
 */

/**
 * /all?page=1&size=10
 * /add
 * /update
 * /delete
 */

router.get("/all", authProtect, getAllInstitutions);
router.post("/add", authProtect, addInstitution);
router.post("/update", authProtect, updateInstitution);
router.post("/delete", authProtect, deleteInstitution);

export default router;

