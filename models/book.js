const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxLength: [100, "Title cannot exceed 100 characters"],
  },
  author: {
    type: String,
    required: [true, "Author is required"],
    trim: true,
  },
  year: {
    type: Number,
    required: [true, "Year is required"],
    min: [1900, "Year must be after 1900"],
    max: [new Date().getFullYear(), "Year cannot be in the future"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
