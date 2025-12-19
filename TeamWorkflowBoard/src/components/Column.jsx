import React from "react";
import Card from "./ui/Card";

const Column = ({ title, count, children }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Done":
        return "text-green-600 bg-green-100";
      case "In Progress":
        return "text-blue-600 bg-blue-100";
      case "Backlog":
        return "text-gray-600 bg-gray-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="h-full">
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
              title
            )}`}
          >
            {count}
          </span>
        </div>
      </div>

      <div className="h-[calc(100vh-250px)] overflow-y-auto pr-2">
        {children}
      </div>
    </div>
  );
};

export default Column;
