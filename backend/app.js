const express = require("express");
const app = express();
const port = 5000;
const pool = require("./db");
const cors = require("cors");

// Middleware;

app.use(cors());
app.use(express.json());

app.get("/users", async (req, res) => {
  try {
    const userss = await pool.query("SELECT * FROM users");
    const users=userss.rows[0].users
    res.send(users);
  } catch (error) {
    console.log(error);
  }
});

// app.get("/users/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const user = await pool.query("SELECT * FROM users WHERE id=$1", [id]);
//     res.send(user.rows[0]);
//   } catch (err) {
//     console.log(err);
//   }
// });
app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await pool.query("SELECT * FROM users WHERE id=$1", [id]);
    const users=
    res.send(user.rows[0].users);
  } catch (err) {
    console.log(err);
  }
});

// Get all posts
app.get("/posts", async (req, res) => {
  try {
    const userPost = await pool.query("SELECT * FROM posts");
    res.send(userPost.rows[0].posts);
  } catch (err) {
    console.log(err);
  }
});

// Get Single post

app.get("/posts/:id", async (req, res) => {
  try {
    
    const { id } = req.params;
    const  quer = req.query;
    console.log(quer);
    const userPost = await pool.query("SELECT * FROM posts WHERE id=$1", [id]);
    res.send(userPost.rows);
  } catch (err) {
    console.log(err);
  }
});

// Get All comments

app.get("/comments", async (req, res) => {
  try {
    const userComments = await pool.query("SELECT * FROM comments");
    res.send(userComments.rows[0].comments);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`the server is running on port ${port}`);
});
