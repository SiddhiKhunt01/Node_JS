const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let tasks = [
    { id: 1, title: "Learn Node.js" },
    { id: 2, title: "Build a To-Do App" },
];


app.get("/", (req, res) => {
    res.render("index", { tasks });
});


app.post("/add", (req, res) => {
    const newTask = { id: Date.now(), title: req.body.title };
    tasks.push(newTask);
    res.redirect("/");
});


app.get("/delete/:id", (req, res) => {
    tasks = tasks.filter(task => task.id != req.params.id);
    res.redirect("/");
});


app.get("/edit/:id", (req, res) => {
    const task = tasks.find(task => task.id == req.params.id);
    res.render("edit", { task });
});


app.post("/update/:id", (req, res) => {
    tasks = tasks.map(task =>
        task.id == req.params.id ? { id: task.id, title: req.body.title } : task
    );
    res.redirect("/");
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
