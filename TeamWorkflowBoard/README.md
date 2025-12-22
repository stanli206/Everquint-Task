# Team Workflow Board
A modern, responsive task management application built with React and Tailwind CSS. This project mimics a simplified version of tools like Jira or Trello, allowing teams to manage their workflow efficiently.

## 🚀 Live Demo
https://frontend-teamworkflowboard.netlify.app/


## 📋 Features
### ✅ Core Features
* Kanban Board: Three-column layout (Backlog, In Progress, Done)

* Task Management: Full CRUD operations for tasks

* Filtering: Filter by status, priority, and search

* Local Storage: Data persistence without backend

## 🎨 Design System Components
* Button: Multiple variants (primary, secondary, destructive) and sizes

* Modal: Accessible modal dialogs with keyboard support

* Card: Flexible container component for task display

* Tag/Badge: Color-coded status and priority indicators

* Form Controls: Input, TextArea, Select with validation

* Toast Notifications: Non-intrusive feedback system


## 🛠️ Tech Stack
* React 19 - Frontend library

* Vite - Build tool and dev server

* Tailwind CSS - Utility-first CSS framework

* React Icons - Icon library

* JavaScript (ES6+) - Programming language

---

## 📂 Project Structure

team-workflow-board/
├── public/
│   
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Tag.jsx
│   │   │   ├── TextInput.jsx
│   │   │   ├── TextArea.jsx
│   │   │   ├── Select.jsx
│   │   │   └── Toast.jsx
│   │   ├── TaskCard.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskBoard.jsx
│   │   └── FilterBar.jsx
│   ├── hooks/
│   │   ├── useLocalStorage.js
│   │   ├── useTasks.js
│   │   └── useToast.js
│   ├── utils/
│   │   ├── storage.js
│   │   ├── migrations.js
│   │   └── helpers.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── index.html
└── README.md

---