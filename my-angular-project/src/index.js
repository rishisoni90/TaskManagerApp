const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const tasksFile = './tasks.json';

// Helper to read tasks from JSON file
function getTasks() {
    const data = fs.readFileSync(tasksFile);
    return JSON.parse(data);
}

// Helper to save tasks to JSON file
function saveTasks(tasks) {
    fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2));
}

// Get all tasks
app.get('/tasks', (req, res) => {
    const tasks = getTasks();
    res.json(tasks);
});

// Add a new task
app.post('/tasks', (req, res) => {
    const { title, description } = req.body;
    const tasks = getTasks();
    const newTask = {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        title,
        description,
    };
    tasks.push(newTask);
    saveTasks(tasks);
    res.json(newTask);
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    let tasks = getTasks();
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasks(tasks);
    res.json({ message: 'Task deleted' });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
