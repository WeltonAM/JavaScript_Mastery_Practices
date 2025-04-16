import jwt from "jsonwebtoken";
import User from "../user/user.mongo.js";

const userMiddleware = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");

        if (!token) return res.status(401).json({ message: "No authentication token, access denied!" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findOne({ email: decoded.userEmail });

        if (!user) return res.status(401).json({ message: "No authentication token, access denied!" });

        req.user = user;

        next();
    } catch (error) {
        console.log("Authentication error: ", error.message);
        res.status(401).json({ message: "No authentication token, access denied!" });
    }
};

export default userMiddleware;