import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ message: "Unauthorised - no valid token" });
        }

        const decoded = jwt.verify(token, "YVeWStaOGFUqzedXXXqJRwxFsQW8cvFxDg9DsZjc5U0=");
        if (!decoded) {
            return res.status(401).json({ message: "Unauthorised - invalid token" });
        }

        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error!" });
    }
}

export default protectRoute;