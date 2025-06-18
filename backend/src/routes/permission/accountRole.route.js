import express from "express";
import { getAllAccountRoles, addAccountRole, updateAccountRole, deleteAccountRole } from "./accountRole.controller.js";
import { authProtect } from "../auth/auth.middleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: AccountRole
 *   description: Account-role assignment endpoints
 */

/**
 * @swagger
 * /accountRole/all:
 *   get:
 *     summary: Get all account-role assignments (with pagination)
 *     tags: [AccountRole]
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
 *         description: List of account-role assignments
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /accountRole/add:
 *   post:
 *     summary: Assign a role to an account
 *     tags: [AccountRole]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - accountId
 *               - roleId
 *             properties:
 *               accountId:
 *                 type: string
 *               roleId:
 *                 type: string
 *     responses:
 *       200:
 *         description: AccountRole added
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /accountRole/update:
 *   post:
 *     summary: Update account-role assignment
 *     tags: [AccountRole]
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
 *               accountId:
 *                 type: string
 *               roleId:
 *                 type: string
 *     responses:
 *       200:
 *         description: AccountRole updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: AccountRole not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /accountRole/delete:
 *   post:
 *     summary: Delete account-role assignment
 *     tags: [AccountRole]
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
 *         description: AccountRole deleted
 *       400:
 *         description: Invalid input
 *       404:
 *         description: AccountRole not found
 *       500:
 *         description: Server error
 */

router.get("/all", authProtect, getAllAccountRoles);
router.post("/add", authProtect, addAccountRole);
router.post("/update", authProtect, updateAccountRole);
router.post("/delete", authProtect, deleteAccountRole);

export default router;