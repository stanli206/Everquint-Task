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

src/
├── components/           
│   ├── ui/              
│   │   ├── Button.jsx   
│   │   ├── Card.jsx     
│   │   ├── Modal.jsx    
│   │   ├── Tag.jsx      
│   │   ├── TextInput.jsx
│   │   ├── TextArea.jsx
│   │   ├── Select.jsx   
│   │   └── Toast.jsx    
│   ├── TaskCard.jsx     
│   ├── TaskForm.jsx     
│   ├── TaskBoard.jsx    
│   ├── Column.jsx       
│   └── FilterBar.jsx    
├── hooks/               
│   ├── useTasks.js      
│   ├── useLocalStorage.js 
│   └── useToast.js      
├── utils/               
├── App.jsx              
└── main.jsx             
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
