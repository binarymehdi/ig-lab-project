const express = require("express");
const { getUsers, createPost, getPosts, deletePost} = require("./queries");
const bodyParser = require('body-parser')
const cors = require("cors");

// port
const port = 3001

// Middlewares
const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(express.json());

app.listen(port);

// base route
app.get("/", (req, res) => {
    console.log("backend working");
    res.send("hello from backend");
});

// users route

app.get('/getUsers', getUsers);

// posts route

app.get('/getPosts', getPosts);
app.post('/createPost', createPost);