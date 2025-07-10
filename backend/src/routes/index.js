import express from "express";

import authRoutes from "./auth/auth.route.js"
import accountRoutes from "./account/account.route.js"
import roleRoutes from "./permission/role.route.js"
import permissionRoutes from "./permission/permission.route.js"
import soalRoutes from "./soal/soal.route.js"
import soalTagRoutes from "./soal/soalTag.route.js"
import soalCategoryRoutes from "./soal/soalCategory.route.js"
import humanRoutes from "./human/human.route.js"
import ujianRoutes from "./ujian/ujian.route.js"
import ujianResultRoutes from "./ujian/ujianResult.route.js"
import appRoutes from "./app/app.route.js"


const router = express.Router();

router.use("/app", appRoutes);
router.use("/auth", authRoutes);
router.use("/account", accountRoutes);
router.use("/role", roleRoutes);
router.use("/permission", permissionRoutes);
router.use("/soal", soalRoutes);
router.use("/soal/tag", soalTagRoutes);
router.use("/soal/category", soalCategoryRoutes);
router.use("/human", humanRoutes);
router.use("/ujian", ujianRoutes);
router.use("/ujian/result", ujianResultRoutes);


export default router;