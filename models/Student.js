const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    street: {
      type: String,
      require: true,
    },
    postNumber: {
      type: Number,
      require: true,
    },
    street: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
