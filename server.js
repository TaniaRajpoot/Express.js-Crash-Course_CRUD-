import express from "express";
import path from "path";
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";
import { fileURLToPath } from "url";
const port = process.env.port || 8000;

//Get the dierctory name 
const __filename = fileURLToPath(import.meta.url);
console.log(__filename);
const __dirname = path.dirname(__filename);

const app = express();

//body praser  middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//logger middleware 
app.use(logger);
//setup static folder
app.use(express.static(path.join(__dirname,'public')));

// Routes
app.use('/api/posts', posts);



//error handler
app.use(notFound);
app.use(errorHandler);


app.listen(port, () => console.log(`server is runing on port ${port}`));