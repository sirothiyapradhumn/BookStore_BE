const express = require('express');
const { getAllBooks, getBookById, addNewBook, updateBookById, deleteBook } = require('../controllers/book-controller');

//create express router
const router = express.Router();


//all routes that are related to books only
router.get("/get", getAllBooks);
router.get("/get/:id", getBookById);
router.post("/add", addNewBook);
router.put("/update/:id", updateBookById);
router.delete("/delete/:id", deleteBook);

module.exports = router;