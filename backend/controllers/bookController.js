import Book from "../models/Book.js";

// ✅ GET all books
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ POST add new book
export const addBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();

    res.status(201).json({
      message: "Book added successfully",
      data: newBook
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};