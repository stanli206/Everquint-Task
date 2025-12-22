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
```
team-workflow-board/
├── public/
│   ├── index.html
│   └── favicon.ico
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
```
---

## User Workflow Steps
* Phase 1: Initial Setup & Navigation

 ```
┌─────────────────────────────────────────────┐
│           User Opens Application            │
└───────────────────┬─────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│    1. Application loads                     │
│       • Checks localStorage for existing data│
│       • Runs migration if needed            │
│       • Shows sample data if empty          │
└───────────────────┬─────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│    2. Main Board Display                    │
│       • Three columns: Backlog, In Progress, │
│         Done                                │
│       • Task cards show key info            │
│       • Filter bar visible                  │
└───────────────────┬─────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│    User can:                                │
│    A. Create new task                       │
│    B. Edit existing task                    │
│    C. Filter/Search tasks                   │
│    D. Delete task                           │
│    E. View task details                     │
└─────────────────────────────────────────────┘
```
* Phase 2: Task Creation Workflow
```
┌─────────────────────────────────────────────┐
│        User clicks "New Task" button        │
└───────────────────┬─────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│  Modal opens with task form:                │
│  • Title field (required)                   │
│  • Description (required)                   │
│  • Status dropdown (Backlog/In Progress/Done)│
│  • Priority dropdown (Low/Medium/High)      │
│  • Assignee field                           │
│  • Tags field (comma-separated)             │
└───────────────────┬─────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│        User fills form and submits          │
└───────────────────┬─────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│    Validation occurs:                       │
│    • Title not empty? → ✓                   │
│    • Description not empty? → ✓             │
│    • If valid: Save to localStorage         │
│    • If invalid: Show error messages        │
└───────────────────┬─────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│  Success:                                    │
│  • Task appears in appropriate column       │
│  • Success toast notification               │
│  • Modal closes                             │
│                                              │
│  Error:                                      │
│  • Error messages shown on form             │
│  • Form remains open                        │
└─────────────────────────────────────────────┘
```
## Task Management Workflow
```
┌─────────────────────────────────────────────┐
│          User interacts with Task           │
└───────────────────┬─────────────────────────┘
                    │
        ┌───────────┴───────────┐
        ▼                       ▼
┌──────────────┐        ┌──────────────┐
│  Edit Task   │        │  Delete Task │
└──────┬───────┘        └──────┬───────┘
       │                       │
       ▼                       ▼
┌──────────────┐        ┌──────────────┐
│ Opens same   │        │ Confirmation │
│ form with    │        │ dialog       │
│ pre-filled   │        │ "Are you     │
│ values       │        │ sure?"       │
└──────┬───────┘        └──────┬───────┘
       │                       │
       ▼                       ▼
┌──────────────┐        ┌──────────────┐
│ Save updates │        │ If Yes:      │
│ → Toast      │        │ Remove task  │
│ → Board      │        │ → Toast      │
│ refreshes    │        │ → Board      │
└──────────────┘        │ refreshes    │
                        │ If No:       │
                        │ Cancel       │
                        └──────────────┘
```
## Phase 4: Filtering & Searching Workflow
```
┌─────────────────────────────────────────────┐
│       User wants to find specific task      │
└───────────────────┬─────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│    Uses Filter Bar:                         │
│    1. Search box - type keywords            │
│       • Searches: title, description,       │
│         assignee, tags                      │
│       • Updates in real-time                │
│                                              │
│    2. Status dropdown - select one status   │
│                                              │
│    3. Priority dropdown - select priority   │
│                                              │
│    4. "Clear All" button - reset filters    │
└───────────────────┬─────────────────────────┘

```
---