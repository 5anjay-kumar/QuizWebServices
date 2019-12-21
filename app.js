const express = require("express"),
      port = process.env.PORT || 3001,
      mongoose = require("mongoose"),
      cors = require('cors'),
      bodyParser = require("body-parser"),
      router = express(),
      middleware = require("./middleware");
      
mongoose.connect("mongodb://localhost/quiz", { useUnifiedTopology: true, useNewUrlParser: true });

router.use(bodyParser.json({ extended: true }));

router.use(cors());

//import all routes
const teacherRoute = require("./routes/teacher.route")
const batchRoute = require("./routes/batch.route");
const subjectRoute = require("./routes/subject.route");
const studentRoute = require("./routes/student.route");
const authRoute = require("./routes/auth.route");

// Get all Routes (localhost:3001/api/admin/teacher)
router.use('/api', authRoute);
router.use('/api', batchRoute, middleware.checkToken);
router.use('/api', teacherRoute, middleware.checkToken);
router.use('/api', subjectRoute, middleware.checkToken);
router.use('/api', studentRoute, middleware.checkToken);

router.get("*", (req, res) => {
    res.send("Error 404 not found! ");
});


router.listen(port, () => {
    console.log("Running...");
});