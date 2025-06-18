import express from "express";
import { getAllUjian, addUjian, updateUjian, deleteUjian, startUjian, getUjianById } from "./ujian.controller.js";
import { authProtect } from "../auth/auth.middleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Ujian
 *   description: Ujian (exam) management endpoints
 */

/**
 * @swagger
 * /ujian/all:
 *   get:
 *     summary: Get all ujian (exams) with pagination
 *     tags: [Ujian]
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
 *         description: List of ujian
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /ujian/add:
 *   post:
 *     summary: Add a new ujian (exam)
 *     tags: [Ujian]
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
 *               peserta:
 *                 type: array
 *                 items:
 *                   type: string
 *               pengawas:
 *                 type: string
 *               soal_group:
 *                 type: string
 *               waktu_mulai:
 *                 type: string
 *                 format: date-time
 *               waktu_selesai:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Ujian created
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /ujian/update:
 *   post:
 *     summary: Update ujian data
 *     tags: [Ujian]
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
 *               peserta:
 *                 type: array
 *                 items:
 *                   type: string
 *               pengawas:
 *                 type: string
 *               soal_group:
 *                 type: string
 *               waktu_mulai:
 *                 type: string
 *                 format: date-time
 *               waktu_selesai:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Ujian updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Ujian not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /ujian/delete:
 *   post:
 *     summary: Delete ujian data
 *     tags: [Ujian]
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
 *         description: Ujian deleted
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Ujian not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /ujian/start/{id}:
 *   post:
 *     summary: Generate PIN ujian & start ujian (expired 50 menit)
 *     tags: [Ujian]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Ujian ID
 *     responses:
 *       200:
 *         description: PIN generated, ujian started
 *       404:
 *         description: Ujian not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /ujian/{id}:
 *   get:
 *     summary: Get ujian detail by ID
 *     tags: [Ujian]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Ujian ID
 *     responses:
 *       200:
 *         description: Ujian detail
 *       404:
 *         description: Ujian not found
 *       500:
 *         description: Server error
 */

// Endpoint
router.get("/all", authProtect, getAllUjian);
router.post("/add", authProtect, addUjian);
router.post("/update", authProtect, updateUjian);
router.post("/delete", authProtect, deleteUjian);
router.post("/start/:id", authProtect, startUjian);
router.get("/:id", authProtect, getUjianById);

export default router;
