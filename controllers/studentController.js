// Import required modules
const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
// Get the Student model registered with Mongoose
const Student = mongoose.model("Student");

// Render the addOrEdit form for inserting a new student
router.get("/", (req, res) => {
  res.render("student/addOrEdit", {
    viewTitle: "Insert Student",
    _id: "", // Ensure _id is empty for new entry
    student: {} // Ensure student object is empty for new entry
  });
});

// Handle form submission for insert or update
router.post("/", (req, res) => {
  // If _id is empty, insert a new record
  if (req.body._id == "") {
    insertRecord(req, res);
  } else {
    // Otherwise, update the existing record
    updateRecord(req, res);
  }
});

// Function to insert a new student record
async function insertRecord(req, res) {
  try {
    var student = new Student();
    student.fullName = req.body.fullName;
    student.email = req.body.email;
    student.mobile = req.body.mobile;
    student.city = req.body.city;

    // Save the new student record to the database using async/await
    await student.save();
    res.redirect("student/list");
  } catch (err) {
    console.log("Error during record insertion : " + err);
  }
}

// Function to update an existing student record
async function updateRecord(req, res) {
  try {
    await Student.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      {
        new: true, // Return the updated document
      }
    );
    res.redirect("student/list");
  } catch (err) {
    console.log("Error during record update : " + err);
  }
}

// Render the list of students
router.get("/list", async (req, res) => {
  try {
    const docs = await Student.find();
    res.render("student/list", {
      list: docs,
    });
  } catch (err) {
    console.log("Error in retrieving student list : " + err);
  }
});

// Render the edit form for a specific student
router.get("/:id", async (req, res) => {
  try {
    const doc = await Student.findById(req.params.id);
    res.render("student/addOrEdit", {
      viewTitle: "Update Student",
      student: doc,
      _id: doc._id // Pass the _id for the hidden input
    });
  } catch (err) {
    console.log("Error in retrieving student details : " + err);
  }
});

// Handle deletion of a student record
router.get("/delete/:id", async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.redirect("/student/list");
    } catch (err) {
        console.log("Error in student delete : " + err);
    }
});

module.exports = router;
