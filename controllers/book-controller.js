const Book = require('../models/book.js');

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    if (books.length > 0) {
      res.status(200).json({
        success: true,
        message: "Books retrieved successfully",
        data: books,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No books found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server error",
      error: error.message,
    });
  }
};

const getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book retrieved successfully",
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server error",
      error: error.message,
    });
  }
};

const addNewBook = async (req, res) => {
  const { body } = req;
  try {
    const newBook = await Book.create(body);
    if (newBook) {
      res.status(201).json({
        success: true,
        message: "Book successfully added",
        data: newBook,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server error",
      error: error.message,
    });
  }
};

const updateBookById = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const book = await Book.findByIdAndUpdate(id, body, { new: true });
    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book is not found with this ID",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server error",
      error: error.message,
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);

    if (!book) {
      res.status(404).json({
        success: false,
        message: "Book is not found with this ID",
      });
    }

    res.status(200).json({
      success: true,
      data: book,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  addNewBook,
  updateBookById,
  deleteBook,
};