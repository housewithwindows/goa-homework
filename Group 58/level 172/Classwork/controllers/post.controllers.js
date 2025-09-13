const express = require('express');

const Posts = [
    { id: 1, title: "First Post", author: "Alice", comments: ["Great post!", "Thanks for sharing."] },
    { id: 2, title: "Second Post", author: "Bob", comments: ["Interesting read."] },
    { id: 3, title: "Third Post", author: "Charlie", comments: ["Nice!", "Very helpful."] },
    { id: 4, title: "Fourth Post", author: "Diana", comments: ["Awesome!", "Loved it."] },
    { id: 5, title: "Fifth Post", author: "Eve", comments: ["Good job!"] }
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
    const { title, author, comments } = req.body;

    if (!title || !author || !comments) {
        return res.status(400).json({ status: 'fail', message: 'Title, author and comments are required!' });
    }

    const newPost = {
        id: Posts.length > 0 ? Posts[Posts.length - 1].id + 1 : 1,
        title,
        author,
        comments
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
    const { title, comments } = req.body;
    const existingPost = Posts.find(p => p.id === postId);

    if (!existingPost) {
        return res.status(404).json({ status: 'fail', message: 'Post not found!' });
    }

    if (title !== undefined) existingPost.title = title;
    if (comments !== undefined) existingPost.comments = comments;

    res.json(existingPost);
}

module.exports = {getPosts, getPost, createPost, deletePost, updatePost};