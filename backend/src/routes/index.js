import express from "express";

import authRoutes from "./auth/auth.route.js"
import profileRoutes from "./profile/profile.route.js"
import roleRoutes from "./permission/role.route.js"
import permissionRoutes from "./permission/permission.route.js"
import soalRoutes from "./soal/soal.route.js"
import soalTagRoutes from "./soal/soalTag.route.js"
import soalCategoryRoutes from "./soal/soalCategory.route.js"
import humanRoutes from "./human/human.route.js"
import ujianRoutes from "./ujian/ujian.route.js"
import ujianResultRoutes from "./ujian/ujianResult.route.js"


/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: Authentication endpoints
 *   - name: Profile
 *     description: Account profile endpoints
 *   - name: Role
 *     description: Role management endpoints
 *   - name: Permission
 *     description: Permission management endpoints
 *   - name: Soal
 *     description: Soal (question) management endpoints
 */

const router = express.Router();

/**
 * TODO:
 * /auth
 * /profile
 * 
 * /role
 * /permission
 * 
 * /soal
 * /ujian
 * /guru
 * /siswa
 * 
 */
router.use("/auth", authRoutes);
router.use("/profile", profileRoutes);
router.use("/role", roleRoutes);
router.use("/permission", permissionRoutes);
router.use("/soal", soalRoutes);
router.use("/soal/tag", soalTagRoutes);
router.use("/soal/category", soalCategoryRoutes);
router.use("/human", humanRoutes);
router.use("/ujian", ujianRoutes);
router.use("/ujianResult", ujianResultRoutes);


export default router;