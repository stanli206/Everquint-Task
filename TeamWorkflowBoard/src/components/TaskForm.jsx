import React, { useState, useEffect } from "react";
import Button from "./ui/Button";
import TextInput from "./ui/TextInput";
import TextArea from "./ui/TextArea";
import Select from "./ui/Select";

const TaskForm = ({ task, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "Backlog",
    priority: "Medium",
    assignee: "",
    tags: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title || "",
        description: task.description || "",
        status: task.status || "Backlog",
        priority: task.priority || "Medium",
        assignee: task.assignee || "",
        tags: task.tags ? task.tags.join(", ") : "",
      });
    }
  }, [task]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const tagsArray = formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0);

      const taskData = {
        ...formData,
        tags: tagsArray,
      };

      onSubmit(taskData);
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const statusOptions = [
    { value: "Backlog", label: "Backlog" },
    { value: "In Progress", label: "In Progress" },
    { value: "Done", label: "Done" },
  ];

  const priorityOptions = [
    { value: "Low", label: "Low" },
    { value: "Medium", label: "Medium" },
    { value: "High", label: "High" },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <TextInput
        label="Title"
        value={formData.title}
        onChange={(value) => handleChange("title", value)}
        placeholder="Enter task title"
        error={errors.title}
        required
      />

      <TextArea
        label="Description"
        value={formData.description}
        onChange={(value) => handleChange("description", value)}
        placeholder="Enter task description"
        rows={4}
        error={errors.description}
        required
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select
          label="Status"
          value={formData.status}
          onChange={(value) => handleChange("status", value)}
          options={statusOptions}
        />

        <Select
          label="Priority"
          value={formData.priority}
          onChange={(value) => handleChange("priority", value)}
          options={priorityOptions}
        />
      </div>

      <TextInput
        label="Assignee"
        value={formData.assignee}
        onChange={(value) => handleChange("assignee", value)}
        placeholder="Enter assignee name"
      />

      <TextInput
        label="Tags (comma-separated)"
        value={formData.tags}
        onChange={(value) => handleChange("tags", value)}
        placeholder="e.g., bug, feature, ui"
      />

      <div className="flex justify-end gap-3 pt-4">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          {task ? "Update Task" : "Create Task"}
        </Button>
      </div>
    </form>
  );
};

export default TaskForm;
