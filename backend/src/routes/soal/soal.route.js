import express from "express";
import { getAllSoal, addSoal, updateSoal, archiveSoal, deleteSoal } from "./soal.controller.js";
import { authProtect } from "../auth/auth.middleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Soal
 *   description: Soal (question) management endpoints
 */

/**
 * @swagger
 * /soal/all:
 *   get:
 *     summary: Get all soal (questions) with pagination
 *     tags: [Soal]
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
 *         description: List of soal
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /soal/add:
 *   post:
 *     summary: Add a new soal (question)
 *     tags: [Soal]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: query
 *         name: groupId
 *         schema:
 *           type: string
 *         description: Group ID (optional)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *               options:
 *                 type: array
 *                 items:
 *                   type: string
 *               answer:
 *                 type: string
 *               ...: # Tambahkan field lain sesuai model
 *                 type: string
 *     responses:
 *       200:
 *         description: Soal added
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /soal/update/{id}:
 *   post:
 *     summary: Update soal (question) by ID
 *     tags: [Soal]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Soal ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *               options:
 *                 type: array
 *                 items:
 *                   type: string
 *               answer:
 *                 type: string
 *               ...: # Tambahkan field lain sesuai model
 *                 type: string
 *     responses:
 *       200:
 *         description: Soal updated
 *       404:
 *         description: Soal not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /soal/archive/{id}:
 *   post:
 *     summary: Archive soal (set archived=true) by ID
 *     tags: [Soal]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Soal ID
 *     responses:
 *       200:
 *         description: Soal archived
 *       404:
 *         description: Soal not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /soal/delete/{id}:
 *   post:
 *     summary: Delete soal by ID
 *     tags: [Soal]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Soal ID
 *     responses:
 *       200:
 *         description: Soal deleted
 *       404:
 *         description: Soal not found
 *       500:
 *         description: Server error
 */

/**
 * /all?page=1&size=10
 * /add?groupId=:groupId
 * /update/:id
 * /archive/:id
 * /delete/:id
 */

router.get("/all", authProtect, getAllSoal);
router.post("/add", authProtect, addSoal);
router.post("/update/:id", authProtect, updateSoal);
router.post("/archive/:id", authProtect, archiveSoal);
router.post("/delete/:id", authProtect, deleteSoal);

export default router;