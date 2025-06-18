import express from "express";
import { getUjianResult, getLiveLeaderboard, updatePesertaScore } from "./ujianResult.controller.js";
import { authProtect } from "../auth/auth.middleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: UjianResult
 *     description: |
 *       Hasil ujian & live leaderboard endpoints.
 *       
 *       ## Live Leaderboard via Socket.io
 *       - Path: `/api/ujianResult/leaderboard/ws`
 *       - Connect: `const socket = io('http://localhost:PORT', { path: '/api/ujianResult/leaderboard/ws' })`
 *       - Subscribe: `socket.emit('subscribeLeaderboard', { ujianId })`
 *       - Unsubscribe: `socket.emit('unsubscribeLeaderboard', { ujianId })`
 *       - Event: `leaderboard` (akan dikirim otomatis setiap update)
 *         - Payload: `{ leaderboard: Array, last_updated: Date }`
 *       - Hanya peserta/pengawas yang berhak yang sebaiknya subscribe.
 *       
 *       > Dokumentasi ini hanya untuk socket.io leaderboard, bukan REST API.
 */

/**
 * @swagger
 * /ujianResult/{ujianId}:
 *   get:
 *     summary: Get ujian result detail
 *     tags: [UjianResult]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: ujianId
 *         required: true
 *         schema:
 *           type: string
 *         description: Ujian ID
 *     responses:
 *       200:
 *         description: Ujian result detail
 *       404:
 *         description: UjianResult not found
 *       500:
 *         description: Server error
 */
router.get('/:ujianId', authProtect, getUjianResult);

/**
 * @swagger
 * /ujianResult/{ujianId}/leaderboard:
 *   get:
 *     summary: Get live leaderboard for ujian
 *     tags: [UjianResult]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: ujianId
 *         required: true
 *         schema:
 *           type: string
 *         description: Ujian ID
 *     responses:
 *       200:
 *         description: Leaderboard data
 *       404:
 *         description: UjianResult not found
 *       500:
 *         description: Server error
 */
router.get('/:ujianId/leaderboard', authProtect, getLiveLeaderboard);

/**
 * @swagger
 * /ujianResult/{ujianId}/score:
 *   patch:
 *     summary: Update peserta score (for live leaderboard)
 *     tags: [UjianResult]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: ujianId
 *         required: true
 *         schema:
 *           type: string
 *         description: Ujian ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - account_id
 *               - skor
 *             properties:
 *               account_id:
 *                 type: string
 *               skor:
 *                 type: number
 *               jawaban:
 *                 type: array
 *                 items:
 *                   type: object
 *               waktu_submit:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Score updated, leaderboard updated
 *       404:
 *         description: UjianResult not found
 *       500:
 *         description: Server error
 */
router.patch('/:ujianId/score', authProtect, updatePesertaScore);

export default router;
