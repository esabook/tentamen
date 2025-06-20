import jwt from "jsonwebtoken"

export const generateJwtToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "3d",
    });

    res.cookie("jwt", {
        maxAge: 3 * 24 * 60 * 60 * 1000, //ms
        httpOnly: true, //prevent XSS cross-site scripting attacks
        // sameSite: "strict", //CSRF
        secure: process.env.NODE_ENV !== "development"
    });

    return token;
};