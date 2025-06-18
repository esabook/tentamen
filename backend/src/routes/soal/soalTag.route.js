import express from "express";
import { getAllSoalTags, addSoalTag, updateSoalTag, deleteSoalTag } from "./soalTag.controller.js";
import { authProtect } from "../auth/auth.middleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: SoalTag
 *   description: Soal tag management endpoints
 */

/**
 * @swagger
 * /soalTag/all:
 *   get:
 *     summary: Get all soal tags (with pagination)
 *     tags: [SoalTag]
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
 *         description: List of soal tags
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /soalTag/add:
 *   post:
 *     summary: Add a new soal tag
 *     tags: [SoalTag]
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
 *               # Tambahkan field lain sesuai model
 *     responses:
 *       200:
 *         description: Soal tag added
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /soalTag/update:
 *   post:
 *     summary: Update soal tag data
 *     tags: [SoalTag]
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
 *               # Tambahkan field lain sesuai model
 *     responses:
 *       200:
 *         description: Soal tag updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Soal tag not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /soalTag/delete:
 *   post:
 *     summary: Delete soal tag data
 *     tags: [SoalTag]
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
 *         description: Soal tag deleted
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Soal tag not found
 *       500:
 *         description: Server error
 */

/**
 * /all?page=1&size=10
 * /add
 * /update
 * /delete
 */

router.get("/all", authProtect, getAllSoalTags);
router.post("/add", authProtect, addSoalTag);
router.post("/update", authProtect, updateSoalTag);
router.post("/delete", authProtect, deleteSoalTag);

export default router;