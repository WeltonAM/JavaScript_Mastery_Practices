import Book from "./book.mongo.js";
import cloudinary from "../lib/cloudinary.js";

export const deleteBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) return res.status(404).json({ message: "Book not found" });

        if (book.user.toString() !== req.user._id.toString()) return res.status(401).json({ message: "Unauthorized" });

        if (book.image && book.image.includes("cloudinary")) {
            try {
                const publicId = book.image.split('/').pop().split('.')[0];
                await cloudinary.uploader.destroy(publicId);
            } catch (cloudinaryError) {
                console.log("Error deleting image from cloudinary: ", cloudinaryError);
            }
        }

        await book.deleteOne();

        res.json({ message: "Book deleted successfully" });
    } catch (error) {
        console.error(`Error deleting book: ${error}`);
        res.status(500).json({ message: error.message });
    }
};
