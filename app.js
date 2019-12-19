const express = require("express"),
      port = process.env.PORT || 3001,
      mongoose = require("mongoose"),
      cors = require('cors'),
      bodyParser = require("body-parser"),
      router = express(),
      passport = require("passport"),
      localStategy = require("passport-local"),
      passportLocalMongoose = require("passport-local-mongoose")

mongoose.connect("mongodb://localhost/quiz", { useUnifiedTopology: true, useNewUrlParser: true });

router.use(bodyParser.json({ extended: true }));
router.use(cors());

//import all routes
const teacherRoute = require("./routes/teacher.route")
const batchRoute = require("./routes/batch.route");
const subjectRoute = require("./routes/subject.route");
const studentRoute = require("./routes/student.route");

// Get all Routes (localhost:3001/api/admin/teacher)
router.use('/api', teacherRoute);
router.use('/api', batchRoute);
router.use('/api', subjectRoute);
router.use('/api', studentRoute);

router.get("/login", (req, res) => {
    res.send("Hello World");
});

router.get("*", (req, res) => {
    res.send("What are you doing with your life?");
});


router.listen(port, () => {
    console.log("Running...");
});