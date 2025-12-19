# Team Workflow Board

A modern, responsive task management application built with React and Tailwind CSS. This project implements a simplified Kanban-style board for managing team tasks with a custom design system.

## ✨ Features

### 🎯 Core Functionality
- **Kanban Board**: Visual task management with Backlog, In Progress, and Done columns
- **Task Management**: Full CRUD operations (Create, Read, Update, Delete tasks)
- **Real-time Updates**: Immediate UI feedback on all operations
- **Local Storage**: Persistent data storage in browser

### 🔍 Advanced Features
- **Smart Filtering**: Filter tasks by status, priority, and search terms
- **Full-text Search**: Search across titles, descriptions, assignees, and tags
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Keyboard Navigation**: Full keyboard accessibility

### 🎨 Design System
- **Custom UI Components**: Built from scratch without external UI libraries
- **Consistent Styling**: Themed components with unified design tokens
- **Accessibility First**: ARIA labels, semantic HTML, and focus management
- **Dark Mode Ready**: Color system prepared for theme switching

### 📊 Task Details
Each task includes:
- Title & Description (multi-line)
- Status (Backlog, In Progress, Done)
- Priority (Low, Medium, High)
- Assignee (free text)
- Tags (categorization)
- Timestamps (createdAt, updatedAt)
---
## 📂 Folder structure

teamworkflowboard/
├── public/                 # assets
├── src/                    # Source code
│   ├── components/         # React Components
│   │   ├── ui/            # Design System Components
│   │   │   ├── Button.jsx     # Reusable button component
│   │   │   ├── Card.jsx       # Card component
│   │   │   ├── Modal.jsx      # Accessible modal
│   │   │   ├── Tag.jsx        # Status badges and labels
│   │   │   ├── TextInput.jsx  # Form input fields
│   │   │   ├── TextArea.jsx   # Multi-line text input
│   │   │   ├── Select.jsx     # Dropdown componen
│   │   │   └── Toast.jsx      # Notification system
│   │   ├── TaskCard.jsx       # Individual task display
│   │   ├── TaskForm.jsx       # Task creation/editing form
│   │   ├── TaskBoard.jsx      # Main Kanban board
│   │   ├── Column.jsx         # Board column component
│   │   └── FilterBar.jsx      # Filtering
│   ├── hooks/              # Custom React Hooks
│   │   ├── useTasks.js         # Task management
│   │   ├── useLocalStorage.js  # Browser storage 
│   │   └── useToast.js         # Toast notification system
│   ├── utils/              
│   ├── App.jsx             # Root application component
│   └── main.jsx            # Application entry point
├── index.html             # HTML entry point
├── vite.config.js         # Vite configuration
├── package.json           # Dependencies and scripts
├── README.md              
└── tailwind.config.js     # Tailwind CSS configuration  

---
## 🚀 Quick Start

### Prerequisites
- Node.js 18.0 or higher
- npm 7.0 or higher

### Installation

1. **Clone and setup**
```bash
git clone <repository-url>
cd teamworkflowboard
npm install
