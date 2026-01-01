import React from "react";
import Column from "./Column";
import TaskCard from "./TaskCard";

const TaskBoard = ({ tasks, onEditTask, onDeleteTask }) => {
  const statuses = ["Backlog", "In Progress", "Done"];

  const getTasksByStatus = (status) => {
    return tasks.filter((task) => task.status === status);
  };

  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No tasks found
          </h3>
          <p className="text-gray-600">
            Create a new task to get started, or adjust your filters.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {statuses.map((status) => {
        const statusTasks = getTasksByStatus(status);
        const count = statusTasks.length;

        return (
          <Column key={status} title={status} count={count}>
            <div className="space-y-4">
              {statusTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onEdit={onEditTask}
                  onDelete={onDeleteTask}
                />
              ))}
            </div>
          </Column>
        );
      })}
    </div>
  );
};

export default TaskBoard;
