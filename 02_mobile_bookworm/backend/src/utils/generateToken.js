import jwt from "jsonwebtoken";

const generateToken = (userEmail) => {
    return jwt.sign({ userEmail }, process.env.JWT_SECRET, { expiresIn: "15d" });
};

export default generateToken;
