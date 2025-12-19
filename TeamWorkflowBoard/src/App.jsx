import { useState, useEffect } from "react";
import TaskBoard from "./components/TaskBoard";
import FilterBar from "./components/FilterBar";
import { useTasks } from "./hooks/useTasks";
import { useToast } from "./hooks/useToast";
import Button from "./components/ui/Button";
import Modal from "./components/ui/Modal";
import TaskForm from "./components/TaskForm";
import Toast from "./components/ui/Toast";

function App() {
  
  const {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    filteredTasks,
    filters,
    setFilters,
    clearFilters,
  } = useTasks();

  const { toasts, showToast, removeToast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const handleCreateTask = () => {
    setEditingTask(null);
    setIsModalOpen(true);
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleSaveTask = (taskData) => {
    try {
      if (editingTask) {
        updateTask(editingTask.id, taskData);
        showToast("Task updated successfully!", "success");
      } else {
        addTask(taskData);
        showToast("Task created successfully!", "success");
      }
      setIsModalOpen(false);
      setEditingTask(null);
    } catch (error) {
      showToast("Error saving task!", "error");
      console.error("Error saving task:", error);
    }
  };

  const handleDeleteTask = (taskId) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask(taskId);
      showToast("Task deleted successfully!", "success");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Team Workflow Board
            </h1>
            <Button onClick={handleCreateTask} variant="primary" size="lg">
              + New Task
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <FilterBar
          filters={filters}
          setFilters={setFilters}
          clearFilters={clearFilters}
        />

        <TaskBoard
          tasks={filteredTasks}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
        />
      </main>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditingTask(null);
          }}
          title={editingTask ? "Edit Task" : "Create New Task"}
        >
          <TaskForm
            task={editingTask}
            onSubmit={handleSaveTask}
            onCancel={() => {
              setIsModalOpen(false);
              setEditingTask(null);
            }}
          />
        </Modal>
      )}

      {/* Toast Container */}
      <div className="fixed bottom-4 right-4 z-50 space-y-2">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
