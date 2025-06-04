import express from "express";
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controller/postController.js'
const router = express.Router();

//setup staric folder
// app.use(express.static(path.join(__dirname,'public')));

//sending files method

// app.get('/', (req,res) =>{
//     res.sendFile(path.join(__dirname, 'public','index.html'));

// });

// app.get('/about', (req,res) =>{
//     res.sendFile(path.join(__dirname, 'public','about.html'));

// });





//get all post 
router.get('/', getPosts);

//get single post 
router.get('/:id',getPost );

//create new post 
router.post('/',createPost); 

//update post
router.put('/:id',updatePost );

// delete post
router.delete('/:id', deletePost );

export default router;
