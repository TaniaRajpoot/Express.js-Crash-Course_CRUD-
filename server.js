import express from "express";
import path from "path";
import posts from "./routes/posts.js";
const port = process.env.port || 8000;

const app = express();

//body praser  middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/posts', posts);



app.listen(port, () => console.log(`server is runing on port ${port}`));