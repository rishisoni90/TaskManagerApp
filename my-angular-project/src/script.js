// API Base URL
const API_URL = 'http://localhost:3000/tasks';

// Fetch and display tasks
async function fetchTasks() {
    const response = await fetch(API_URL);
    const tasks = await response.json();
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${task.title}: ${task.description}</span>
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });
}

// Add a new task
async function addTask() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    if (title && description) {
        await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, description }),
        });
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
        fetchTasks();
    } else {
        alert('Please fill out all fields');
    }
}

// Delete a task
async function deleteTask(id) {
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    fetchTasks();
}

// Initial load
window.onload = fetchTasks;
