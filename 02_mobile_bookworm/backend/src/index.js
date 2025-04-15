import express from "express";
import "dotenv/config";
import authRoutes from "./auth/authRoutes.js";
import bookRoutes from "./book/bookRoutes.js";
import { connectDB } from "./database/mongo.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
    console.log(`🔥🔥🔥 Server is running on http://localhost:${PORT}`);
    connectDB();
})