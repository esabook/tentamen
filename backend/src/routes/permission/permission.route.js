import express from "express";
import { getAllPermissions, addPermission, updatePermission, deletePermission } from './permission.controller.js';
import { authProtect } from "../auth/auth.middleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Permission
 *   description: Permission management endpoints
 */

/**
 * @swagger
 * /permission/all:
 *   get:
 *     summary: Get all permissions (with pagination)
 *     tags: [Permission]
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
 *         description: List of permissions
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /permission/add:
 *   post:
 *     summary: Add a new permission
 *     tags: [Permission]
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
 *     responses:
 *       200:
 *         description: Permission added
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /permission/update:
 *   post:
 *     summary: Update permission data
 *     tags: [Permission]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - _id
 *             properties:
 *               _id:
 *                 type: string
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Permission updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Permission not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /permission/delete:
 *   post:
 *     summary: Delete permission data
 *     tags: [Permission]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - _id
 *             properties:
 *               _id:
 *                 type: string
 *     responses:
 *       200:
 *         description: Permission deleted
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Permission not found
 *       500:
 *         description: Server error
 */

/**
 * /all?page=1&size=10
 * /add
 * /update
 * /delete
 */

router.get("/all", authProtect, getAllPermissions);
router.post("/add", authProtect, addPermission);
router.post("/update", authProtect, updatePermission);
router.post("/delete", authProtect, deletePermission);

export default router;