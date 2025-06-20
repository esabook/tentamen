import jwt from "jsonwebtoken";
import Account from "../../models/db/account.model.js";
import { message500 } from "../../models/response/message500.js";


export const authProtect = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

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

        const account = await Account.findById(decoded.userId).select("-password");
        if (!account) {
             return res.status(404).json({
                message: "Active user not found."
            });
        }

        req.account = account

        // save account to redis session if needed
        // await redisClient.set(`session:${account._id}`, JSON.stringify(account), 'EX', 3600); // 1 hour expiration
        // req.session = account; // if you use session middleware
        // req.session.account = account; // if you use session middleware with custom session object
        // req.session.user = account; // if you use session middleware with custom user object 

        next();

    } catch (error) {
        console.log("Error in authMiddleware", error)

        return res.status(500).json(message500);
    }
};