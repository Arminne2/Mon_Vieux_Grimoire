const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const bookRoutes = require("./Routes/book.js");
const userRoutes = require("./routes/user");
const path =require('path');

mongoose
  .connect(
    "mongodb+srv://arminne:EuKBCE2oBCzEJpYt@cluster0.1v5thkh.mongodb.net/?appName=Cluster0",
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization",
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  );
  next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use("/api/books", bookRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/books/:id", bookRoutes);
module.exports = app;
