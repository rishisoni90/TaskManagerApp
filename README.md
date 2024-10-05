# Task Manager App with Angular and Node.js

This is a simple **Task Manager** application built with an **Angular frontend** and a **Node.js backend**.

## Features

- **Add tasks**: Users can add tasks with a title and description.
- **Delete tasks**: Users can delete tasks.
- **View tasks**: Fetch tasks from the backend and display them.

## Project Structure

| Directory/File                                 | Description                                      |
|------------------------------------------------|--------------------------------------------------|
| `task-manager-angular/`                        | Root directory for the project                   |
| ├── `backend/`                                 | Node.js backend                                  |
| │   ├── `index.js`                            | Backend code                                     |
| │   ├── `tasks.json`                          | JSON file for storing tasks                      |
| │   └── `package.json`                        | Node.js dependencies                              |
| ├── `src/`                                     | Angular frontend                                 |
| │   ├── `app/`                                 | Angular application source files                 |
| │   │   ├── `task-manager/`                   | Task Manager Component directory                 |
| │   │   │   ├── `task-manager.component.html` | HTML template for Task Manager component         |
| │   │   │   ├── `task-manager.component.ts`   | TypeScript logic for Task Manager component      |
| │   │   │   └── `task-manager.component.css`  | CSS styles for Task Manager component            |
| │   │   └── `app.module.ts`                    | Main application module                          |
| │   └── `main.ts`                             | Angular entry point                              |
| └── `README.md`                               | Project documentation                            |

## How to Run

### Backend (Node.js)

1. Navigate to the `backend/` directory:

   ```bash
   cd backend
