import cloudinary from "../lib/cloudinary.js";
import Book from "./book.mongo.js"

export const registerBook = async (req, res) => {
    try {
        const { title, caption, rating, image } = req.body;

        if (
            !image ||
            !title ||
            !caption ||
            !rating
        ) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const uploadResponse = await cloudinary.uploader.upload(image);
        const imageUrl = uploadResponse.secure_url;

        const newBook = new Book({
            title,
            caption,
            rating,
            image: imageUrl,
            user: req.user._id
        });

        await newBook.save();

        res.status(201).json(newBook);
    } catch (error) {
        console.error(`Error creating book: ${error}`);
        res.status(500).json({ message: error.message });
    }
};
