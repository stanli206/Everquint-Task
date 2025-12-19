import React from "react";
import { FaFilter, FaTimes } from "react-icons/fa";
import Button from "./ui/Button";
import TextInput from "./ui/TextInput";
import Select from "./ui/Select";

const FilterBar = ({ filters, setFilters, clearFilters }) => {
  const statusOptions = [
    { value: "all", label: "All Statuses" },
    { value: "Backlog", label: "Backlog" },
    { value: "In Progress", label: "In Progress" },
    { value: "Done", label: "Done" },
  ];

  const priorityOptions = [
    { value: "all", label: "All Priorities" },
    { value: "Low", label: "Low" },
    { value: "Medium", label: "Medium" },
    { value: "High", label: "High" },
  ];

  const handleChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const hasActiveFilters = () => {
    return (
      filters.search || filters.status !== "all" || filters.priority !== "all"
    );
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <FaFilter className="text-gray-400" />
        <h3 className="font-medium text-gray-900">Filters</h3>
        {hasActiveFilters() && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="ml-auto"
          >
            <FaTimes className="mr-1" />
            Clear All
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <TextInput
          label="Search"
          placeholder="Search tasks..."
          value={filters.search || ""}
          onChange={(value) => handleChange("search", value)}
        />

        <Select
          label="Status"
          value={filters.status || "all"}
          onChange={(value) => handleChange("status", value)}
          options={statusOptions}
        />

        <Select
          label="Priority"
          value={filters.priority || "all"}
          onChange={(value) => handleChange("priority", value)}
          options={priorityOptions}
        />
      </div>
    </div>
  );
};

export default FilterBar;
