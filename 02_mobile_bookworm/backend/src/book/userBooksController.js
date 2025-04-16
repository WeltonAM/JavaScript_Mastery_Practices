import Book from "./book.mongo.js";

export const userBooks = async (req, res) => {
    try {
        const books = await Book.find({ user: req.user._id }).sort({ createdAt: -1 });

        res.json(books);
    } catch (error) {
        console.error(`Error fetching user books: ${error}`);
        res.status(500).json({ message: error.message });
    }
};
