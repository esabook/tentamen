import express from "express";
import { getAllUserRoles, addUserRole, updateUserRole, deleteUserRole } from "./userRole.controller.js";
import { authProtect } from "../auth/auth.middleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: UserRole
 *   description: User-role assignment endpoints
 */

/**
 * @swagger
 * /userRole/all:
 *   get:
 *     summary: Get all user-role assignments (with pagination)
 *     tags: [UserRole]
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
 *         description: List of user-role assignments
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /userRole/add:
 *   post:
 *     summary: Assign a role to a user
 *     tags: [UserRole]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - roleId
 *             properties:
 *               userId:
 *                 type: string
 *               roleId:
 *                 type: string
 *     responses:
 *       200:
 *         description: UserRole added
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /userRole/update:
 *   post:
 *     summary: Update user-role assignment
 *     tags: [UserRole]
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
 *               userId:
 *                 type: string
 *               roleId:
 *                 type: string
 *     responses:
 *       200:
 *         description: UserRole updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: UserRole not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /userRole/delete:
 *   post:
 *     summary: Delete user-role assignment
 *     tags: [UserRole]
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
 *         description: UserRole deleted
 *       400:
 *         description: Invalid input
 *       404:
 *         description: UserRole not found
 *       500:
 *         description: Server error
 */

/**
 * /all?page=1&size=10
 * /add
 * /update
 * /delete
 */

router.get("/all", authProtect, getAllUserRoles);
router.post("/add", authProtect, addUserRole);
router.post("/update", authProtect, updateUserRole);
router.post("/delete", authProtect, deleteUserRole);

export default router;