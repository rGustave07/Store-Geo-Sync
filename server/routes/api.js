const express = require("express");
const authRouter = require("./auth/auth");
const storeRouter = require("./store/store");
// var bookRouter = require("./book/book");

let app = express();

app.use("/auth/", authRouter);
app.use("/store/", storeRouter);
// app.use("/book/", bookRouter);

module.exports = app;
