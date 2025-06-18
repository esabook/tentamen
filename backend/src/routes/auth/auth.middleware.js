import jwt from "jsonwebtoken";
import User from "../../models/db/user.model.js";
import { message500 } from "../../models/response/message500.js";


export const authProtect = async (req, res, next) => {
    try {

        
        const token = req.cookie?.jwt || req.headers.jwt;

        if(!token){
            return res.status(401).json({
                message: "Unauthorized - [2] No Token provided."
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
             return res.status(401).json({
                message: "Unauthorized - Invalid Token."
            });
        }

        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
             return res.status(404).json({
                message: "Active user not found."
            });
        }

        req.user = user

        next();

    } catch (error) {
        console.log("Error in authMiddleware", error)

        return res.status(500).json(message500);
    }
};