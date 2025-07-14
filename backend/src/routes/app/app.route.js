import express from "express";
import { authProtect } from "../auth/auth.middleware.js";
import { initPermission, initRole, initModule } from "./app.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: App/Initialization
 *     description: |
 *       Endpoint untuk setup awal aplikasi, seperti membuat role dan permission default.
 *       Biasanya hanya dijalankan sekali atau untuk pemeliharaan sistem.
 */

/**
 * @swagger
 * /app/initRole:
 *   post:
 *     summary: Inisialisasi role default dan penetapan permission untuk Guru
 *     tags: [App/Initialization]
 *     security:
 *       - bearerAuth: []
 *     description: |
 *       Menginisialisasi sistem dengan serangkaian peran pengguna yang telah ditentukan (Admin, Operator, Guru, Siswa, Wali Siswa).
 *       Operasi ini idempoten; menggunakan `upsert` untuk hanya membuat peran yang belum ada.
 *       Endpoint ini juga menetapkan serangkaian permission default ke peran "Guru".
 *       Biasanya digunakan untuk penyiapan sistem dan harus dibatasi hanya untuk administrator.
 *     responses:
 *       200:
 *         description: Role dan permission Guru berhasil diinisialisasi.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Roles initialization and default Guru permissions assignment complete.
 *                 createdCount:
 *                   type: integer
 *                   description: Jumlah role baru yang dibuat.
 *                   example: 5
 *                 matchedCount:
 *                   type: integer
 *                   description: Jumlah role yang sudah ada dan cocok (tidak diubah).
 *                   example: 0
 *                 guruPermissionsAssigned:
 *                   type: integer
 *                   description: Jumlah permission yang ditetapkan ke peran Guru.
 *                   example: 23
 *       401:
 *         description: Unauthorized, pengguna belum login.
 *       403:
 *         description: Forbidden, pengguna tidak memiliki hak untuk melakukan tindakan ini.
 *       500:
 *         description: Terjadi kesalahan server saat inisialisasi.
 */
router.post('/initRole', authProtect, initRole);

/**
 * @swagger
 * /app/initPermission:
 *   post:
 *     summary: Inisialisasi permission default
 *     tags: [App/Initialization]
 *     security:
 *       - bearerAuth: []
 *     description: |
 *       Menginisialisasi sistem dengan serangkaian permission yang telah ditentukan, dikategorikan berdasarkan modul aplikasi.
 *       Operasi ini idempoten; menggunakan `upsert` untuk hanya membuat permission yang belum ada.
 *       Endpoint ini biasanya digunakan untuk penyiapan sistem dan harus dibatasi hanya untuk administrator.
 *     responses:
 *       200:
 *         description: Permission berhasil diinisialisasi.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Permissions initialization complete.
 *                 createdCount:
 *                   type: integer
 *                   description: Jumlah permission baru yang dibuat.
 *                   example: 29
 *                 matchedCount:
 *                   type: integer
 *                   description: Jumlah permission yang sudah ada dan cocok (tidak diubah).
 *                   example: 0
 *       401:
 *         description: Unauthorized, pengguna belum login.
 *       403:
 *         description: Forbidden, pengguna tidak memiliki hak untuk melakukan tindakan ini.
 *       500:
 *         description: Terjadi kesalahan server saat inisialisasi.
 */
router.post('/initPermission', authProtect, initPermission);
/**
 * @swagger
 * /app/initModule:
 *   post:
 *     summary: Inisialisasi template module
 *     tags: [App/Initialization]
 *     security:
 *       - bearerAuth: []
 *     description: |
 *       Menginisialisasi sistem dengan serangkaian kategori dan tag yang telah ditentukan, dikategorikan berdasarkan modul aplikasi.
 *       Operasi ini idempoten; menggunakan `upsert` untuk hanya membuat data yang belum ada.
 *       Endpoint ini biasanya digunakan untuk penyiapan sistem dan harus dibatasi hanya untuk administrator.
 *     responses:
 *       200:
 *         description: Kategori dan Tag berhasil diinisialisasi.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Kategori dan Tag initialization complete.
 *                 createdCount:
 *                   type: integer
 *                   description: Jumlah Kategori dan Tag baru yang dibuat.
 *                   example: 29
 *                 matchedCount:
 *                   type: integer
 *                   description: Jumlah Kategori dan Tag yang sudah ada dan cocok (tidak diubah).
 *                   example: 0
 *       401:
 *         description: Unauthorized, pengguna belum login.
 *       403:
 *         description: Forbidden, pengguna tidak memiliki hak untuk melakukan tindakan ini.
 *       500:
 *         description: Terjadi kesalahan server saat inisialisasi.
 */
router.post('/initModule', authProtect, initModule);

export default router;
