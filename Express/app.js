const express = require("express");
const app = express();

// const expressSession = require("express-session");
// const flash = require("connect-flash");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");
// const morgan = require('morgan');

// //Dynamic Routing
// app.get("/profile/:username", (req, res) => {
//   res.send(req.params.username + " page");
// });

// app.get("/author/:milind/:age", (req, res) => {
//   res.send(
//     `Something about ${req.params.milind} page whose age is ${req.params.age}`
//   );
// });

// // Morgan Middleware
// app.use(morgan('dev'));

// //Cookie Parser
// app.use(cookieParser());

// app.get("/", (req, res, next) => {
//   res.send("Hey");
// });

// app.get("/check", (req, res, next) => {
//   console.log(req.cookies.banned);
//   res.send("Checking");
// });

// app.get("/banned", (req, res, next) => {
//   res.cookie("Banned", "true");
//   res.send("Banned");
// });

// // CORS Middleware
// app.use(cors());

// app.get("/shareable", cors(), (req, res, next) => {
//   res.send("Hey");
// });

// // Connect Flash Middleware
// app.use(
//   expressSession({
//     secret: "random-stuff",
//     resave: false,
//     saveUninitialized: false,
//   })
// );
// app.use(flash());

// app.get("/", (req, res, next) => {
//   req.flash("error", "Invalid Credentials");
//   res.redirect("/error");
// });

// app.get("/error", (req, res, next) => {
//   let message = req.flash("error");
//   res.send(message);
// });

// // Express Sessions
// app.use(expressSession({
//   secret: 'random-stuff',
//   resave: false,
//   saveUninitialized: false
// }));

// // Middleware
// app.use((req, res) => {
//   console.log("Hey Hello");
//   next();
// });

// // Route
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.listen(3000);
