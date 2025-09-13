const express = require('express');
const id = Date.now()
const Posts = [
    { id, title: "First Post",  content: ["okay"],likeCount:0  },
    { id, title: "Second Post",  content: ["trip"],likeCount:0  },
    { id, title: "Third Post", content: ["holiday"],likeCount:0  },
    { id, title: "Fourth Post",  content: ["sport"],likeCount:0  },
    { id, title: "Fifth Post",  content: ["nice"], likeCount:0 }
];

const getPosts = (req, res) => {
    res.json(Posts);
}

const getPost = (req, res) => {
    const postId = parseInt(req.params.id);
    const Post = Posts.find(p => p.id === postId);

    if (!Post) {
        return res.status(404).json({ status: 'fail', message: 'Post not found!' });
    }

    res.json(Post);
}

const createPost = (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ status: 'fail', message: 'Title and content are required!' });
    }

    const newPost = {
        id: Date.now(),
        title,
        content
    };

    Posts.push(newPost);
    res.status(201).json(newPost);
}

const deletePost = (req, res) => {
    const postId = parseInt(req.params.id);
    const index = Posts.findIndex(p => p.id === postId);

    if (index === -1) {
        return res.status(404).json({ status: 'fail', message: 'Post not found!' });
    }

    Posts.splice(index, 1);
    res.status(204).send();
}
const updatePost = (req, res) => {
    const postId = Number(req.params.id);
    const { title, content } = req.body;
    const existingPost = Posts.find(p => p.id === postId);

    if (!existingPost) {
        return res.status(404).json({ status: 'fail', message: 'Post not found!' });
    }

    if (title !== undefined) existingPost.title = title;
    if (content !== undefined) existingPost.comments = comments;

    res.json(existingPost);
}

module.exports = {getPosts, getPost, createPost, deletePost, updatePost};