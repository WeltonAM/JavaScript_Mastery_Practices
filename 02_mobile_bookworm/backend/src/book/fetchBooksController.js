import Book from "./book.mongo.js";

export const fetchBooks = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const skip = (page - 1) * limit;

        const books = await Book.find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .populate("user", "username profileImage");

        const totalCount = await Book.countDocuments();

        res.send({
            books,
            currentPage: page,
            totalBooks: totalCount,
            totalPages: Math.ceil(totalCount / limit),
        });
    } catch (error) {
        console.error(`Error fetching book: ${error}`);
        res.status(500).json({ message: error.message });
    }
};
