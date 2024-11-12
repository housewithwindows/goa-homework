// Task 1: Math Utilities using CommonJS
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = { add, subtract };


// Task 2: Greeting Object using CommonJS
const greeting = {
    text: "Hello",
    language: "English"
};

module.exports = greeting;


// Task 3: Greetings using ES Module
export function sayHello() {
    return "Hello, World!";
}

export function sayGoodbye() {
    return "Goodbye, everyone!";
}


// Task 4: Animal Object using ES Module
const animal = {
    species: "Tiger",
    sound: "Growl"
};
export default animal;


// Task 5: Math Operations using ES Module
export default function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}


// Task 6: Simple To-Do List Application
const tasks = [];

function addTask(taskText) {
    const task = { text: taskText, completed: false };
    tasks.push(task);
    renderTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = task.text;
        listItem.style.textDecoration = task.completed ? 'line-through' : 'none';

        listItem.addEventListener('click', () => toggleTask(index));
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', (e) => {
            e.stopPropagation();
            removeTask(index);
        });

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
    });
}

document.getElementById('addTaskButton').addEventListener('click', () => {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        addTask(taskText);
        taskInput.value = '';
    }
});
