require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const student = require("./controler/Studenets/Students");
const StudentPromtions = require("./controler/Studenets/StudentPromtion");
const teacher = require("./controler/teachers/Teachers");
const transport = require("./controler/transport/Transport");
const room = require("./controler/class/Class");
const books = require("./controler/subjects/subject");
const attendence = require("./controler/attendence/Attendence");
const Fee = require("./controler/feeManagment/Fee");
const Exams = require("./controler/Exams/Exams");
const Finance = require("./controler/Finance/Finance");
const Auth = require("./controler/auth/Auth");
const complains = require("./controler/Complaints/Complaint");
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
const path = require("path");

//path

app.use(express.static(path.join(__dirname, './client/build')))
// Routing
app.use("/list", student);
app.use("/promtion", StudentPromtions);
app.use("/books", books);
app.use("/teacher", teacher);
app.use("/fee", Fee);
app.use("/tranport", transport);
app.use("/class", room);
app.use("/attendence", attendence);
app.use("/exams", Exams);
app.use("/finance", Finance);
app.use("/complains", complains);
app.use("/register", Auth);
app.use("/uploads", express.static("./uploads"));


app.use("*",function(req,res){
   res.sendFile(path.join(__dirname, './client/build/index.html'))
})
const port = process.env.PORT||8000;

const start = () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listen at port ${port}`);
    });
  } catch {
    console.log("server error");
  }
};

start();


app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});