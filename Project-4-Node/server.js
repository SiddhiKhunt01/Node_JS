const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const Book = require("./models/book");

const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/bookstore", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Home Page - List all books
app.get("/", async (req, res) => {
  const books = await Book.find();
  res.render("index", { books });
});

// Add Book Form
app.get("/books/new", (req, res) => {
  res.render("addBook");
});

// Create Book
app.post("/books", async (req, res) => {
  const { title, author, price, publishedYear } = req.body;
  await Book.create({ title, author, price, publishedYear });
  res.redirect("/");
});

// Edit Book Form
app.get("/books/edit/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.render("editBook", { book });
});

// Update Book
app.put("/books/:id", async (req, res) => {
  const { title, author, price, publishedYear} = req.body;
  await Book.findByIdAndUpdate(req.params.id, { title, author, price, publishedYear });
  res.redirect("/");
});

// Delete Book
app.delete("/books/:id", async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

app.listen(3000, () => console.log("Server started on http://localhost:3000"));
