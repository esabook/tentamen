import express from "express";
import { getAllRoles, addRole, updateRole, deleteRole } from "./role.controller.js";
import { authProtect } from "../auth/auth.middleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Role
 *   description: Role management endpoints
 */

/**
 * @swagger
 * /role/all:
 *   get:
 *     summary: Get all roles (with pagination)
 *     tags: [Role]
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
 *         description: List of roles
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /role/add:
 *   post:
 *     summary: Add a new role
 *     tags: [Role]
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
 *         description: Role added
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /role/update:
 *   post:
 *     summary: Update role data
 *     tags: [Role]
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
 *         description: Role updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Role not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /role/delete:
 *   post:
 *     summary: Delete role data
 *     tags: [Role]
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
 *         description: Role deleted
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Role not found
 *       500:
 *         description: Server error
 */

/**
 * /all?page=1&size=10
 * /add
 * /update
 * /delete
 */

router.get("/all", authProtect, getAllRoles);
router.post("/add", authProtect, addRole);
router.post("/update", authProtect, updateRole);
router.post("/delete", authProtect, deleteRole);

export default router;