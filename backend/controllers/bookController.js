import kc_Book from "../models/Book.js";

// ✅ Get all books
export const kc_getBooks = async (kc_req, kc_res) => {
  try {
    const kc_books = await kc_Book.find();
    kc_res.json(kc_books);
  } catch (kc_error) {
    console.error("Error fetching books:", kc_error);
    kc_res.status(500).json({ message: "Error fetching books" });
  }
};

// ✅ Get book by ID
export const kc_getBookById = async (kc_req, kc_res) => {
  try {
    const { id } = kc_req.params;

    const kc_book = await kc_Book.findById(id);

    if (!kc_book) {
      return kc_res.status(404).json({ message: "Book not found" });
    }

    kc_res.json(kc_book);
  } catch (kc_error) {
    kc_res.status(500).json({ message: "Error fetching book" });
  }
};