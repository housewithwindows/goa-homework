const express = require('express');
const userRouter = express.Router();


let users = [];
//setting unique id for each user
let id = Date.now();


userRouter.post('/register', (req, res) => {
	const { username, password } = req.body;
    //if the username or password is not provided
	if (!username || !password) {
		return res.status(400).json('Username and password are required' )
	}
	//check if user already exists
	if (users.find(u => u.username === username)) {
		return res.status(409).json('User already exists')
	}
	const newUser = { id: id, username, password };
	users.push(newUser);
	res.status(201).json('new user created successfully');
});

userRouter.post('/login', (req, res) => {
	const { username, password } = req.body
    
	const user = users.find(user => user.username === username && user.password === password)
	if (user) {
		res.json('Login successful')
	} else {
		res.status(401).json('Invalid username or password' )
	}
});


userRouter.get('/users', (req, res) => {
	res.json(users)
});

// getting a single user using id
userRouter.get('/users/:id', (req, res) => {
	const user = users.find(u => u.id === parseInt(req.params.id))
	if (user) {
		res.json(user)
	} else {
		res.status(404).json('user not found.')
	}
});
//exporting userRouter
module.exports = userRouter
