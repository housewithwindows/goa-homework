const express = require('express');
const { getPosts, getPost, createPost, deletePost, updatePost } = require('./controllers/post.controllers');
const router = express.Router();



router
    .route('/')
    .get(getPosts)
    .post(createPost);
router
    .route('/:id')
    .get(getPost)
    .delete(deletePost)
    .patch(updatePost);




router.get('/', getPosts);


router.get('/:id',getPost);


router.post('/', createPost);


router.delete('/:id', deletePost);


router.patch('/:id', updatePost);

module.exports = router;
