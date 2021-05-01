const express = require("express");
const app = express.Router();
const cors = require("cors");

const Student = require("../models/Student");
app.use(cors());

app.post("/add", async (req, res) => {
  const student = new Student({
    name: req.body.name,
    email: req.body.email,
    street: req.body.street,
    postNumber: Number(req.body.postNumber),
    state: req.body.state,
  });

  try {
    const newStudent = await student.save();
    res.json(newStudent);
  } catch (error) {
    res.json({ message: error });
  }
});

app.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(400).json(err);
  }
});

app.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const students = await Student(id);
    res.status(200).json(students);
  } catch (error) {
    res.status(400).json(err);
  }
});

app.put("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const student = await Student.findById(id);
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json("Can't update");
  }
});

app.delete("/:id", (req, res) => {
  const id = req.params.id;
  try {
    Student.findByIdAndDelete(id).then(() => res.json("Deleted"));
  } catch (error) {
    res.json(error);
  }
});

module.exports = app;
