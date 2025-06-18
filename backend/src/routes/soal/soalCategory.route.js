import express from "express";
import { getAllSoalCategories, addSoalCategory, updateSoalCategory, deleteSoalCategory } from './soalCategory.controller.js';
import { authProtect } from "../auth/auth.middleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: SoalCategory
 *   description: Soal category management endpoints
 */

/**
 * @swagger
 * /soalCategory/all:
 *   get:
 *     summary: Get all soal categories (with pagination)
 *     tags: [SoalCategory]
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
 *         description: List of soal categories
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /soalCategory/add:
 *   post:
 *     summary: Add a new soal category
 *     tags: [SoalCategory]
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
 *               description:
 *                 type: string
 *               ...: # Tambahkan field lain sesuai model
 *                 type: string
 *     responses:
 *       200:
 *         description: Soal category added
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /soalCategory/update:
 *   post:
 *     summary: Update soal category data
 *     tags: [SoalCategory]
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
 *               description:
 *                 type: string
 *               ...: # Tambahkan field lain sesuai model
 *                 type: string
 *     responses:
 *       200:
 *         description: Soal category updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Soal category not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /soalCategory/delete:
 *   post:
 *     summary: Delete soal category data
 *     tags: [SoalCategory]
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
 *         description: Soal category deleted
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Soal category not found
 *       500:
 *         description: Server error
 */

/**
 * /all?page=1&size=10
 * /add
 * /update
 * /delete
 */

router.get("/all", authProtect, getAllSoalCategories);
router.post("/add", authProtect, addSoalCategory);
router.post("/update", authProtect, updateSoalCategory);
router.post("/delete", authProtect, deleteSoalCategory);

export default router;