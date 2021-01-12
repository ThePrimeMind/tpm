const express = require("express");
const app = express();
const mongoose = require('mongoose');
// load env variables
const dotenv = require('dotenv');
dotenv.config()
const morgan = require("morgan");
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const expressValidator = require("express-validator");
const fs = require("fs");
const cors = require("cors");
const { v1: uuidv1 } = require('uuid');
console.log(uuidv1());


// "mongodb://localhost:27017/nodeapi"


//db connection
mongoose.connect(
  process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
.then(() => console.log('DB Connected'))
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});


//bring in routes
const postRoutes = require("./routes/post");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const maanRoutes = require("./routes/maan")


//apiDocs
app.get("/api", (req, res) => {
  fs.readFile("docs/apiDocs.json", (err, data) =>{
    if(err) {
      res.status(400).json ({
        error: err
      });
    }
    const docs = JSON.parse(data);
    res.json(docs);
  });
});


//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use("/api", postRoutes);
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/getMaan", maanRoutes);
app.use("/postMaan", maanRoutes);


app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({error: "Not authorized..."});
  }
});


const port = 8080;
app.listen(port, () => {console.log(`Let's get prime on port: ${port}`)
});


