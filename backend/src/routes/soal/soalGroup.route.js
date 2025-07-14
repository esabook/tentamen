import express from "express";
import { getAllSoalBundles, addSoalBundle, updateSoalBundle, archiveSoalBundle, deleteSoalBundle } from "./soalGroup.controller.js";
import { authProtect } from "../auth/auth.middleware.js";

/**
 * @swagger
 * tags:
 *   name: SoalGroup
 *   description: Soal group (bundle) management endpoints
 */

/**
 * @swagger
 * /soalGroup/all:
 *   get:
 *     summary: Get all soal groups (bundles) with pagination
 *     tags: [SoalGroup]
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
 *         description: List of soal groups
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /soalGroup/add:
 *   post:
 *     summary: Add a new soal group (bundle)
 *     tags: [SoalGroup]
 *     security:
 *       - bearerAuth: []
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
 *         description: Soal group added
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /soalGroup/update/{id}:
 *   post:
 *     summary: Update soal group (bundle) by ID
 *     tags: [SoalGroup]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Soal group ID
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
 *         description: Soal group updated
 *       404:
 *         description: Soal group not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /soalGroup/archive/{id}:
 *   post:
 *     summary: Archive soal group (set archived=true) by ID
 *     tags: [SoalGroup]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Soal group ID
 *     responses:
 *       200:
 *         description: Soal group archived
 *       404:
 *         description: Soal group not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /soalGroup/delete/{id}:
 *   post:
 *     summary: Delete soal group by ID
 *     tags: [SoalGroup]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Soal group ID
 *     responses:
 *       200:
 *         description: Soal group deleted
 *       404:
 *         description: Soal group not found
 *       500:
 *         description: Server error
 */

const router = express.Router();

router.get("/all", authProtect, getAllSoalBundles);
router.post("/add", authProtect, addSoalBundle);
router.post("/update/:id", authProtect, updateSoalBundle);
router.post("/archive/:id", authProtect, archiveSoalBundle);
router.post("/delete/:id", authProtect, deleteSoalBundle);

export default router;