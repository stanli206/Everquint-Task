import React from 'react'
import { FaEdit, FaTrash, FaUser, FaClock, FaFlag } from 'react-icons/fa'
import Card from './ui/Card'
import Tag from './ui/Tag'
import Button from './ui/Button'

const TaskCard = ({ task, onEdit, onDelete }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'red'
      case 'Medium': return 'yellow'
      case 'Low': return 'green'
      default: return 'gray'
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Done': return 'green'
      case 'In Progress': return 'blue'
      case 'Backlog': return 'gray'
      default: return 'gray'
    }
  }

  const formatRelativeTime = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInSeconds = Math.floor((now - date) / 1000)
    
    if (diffInSeconds < 60) return 'just now'
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)}d ago`
    return date.toLocaleDateString()
  }

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <Card.Body>
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {task.title}
            </h3>
            <div className="flex items-center gap-2 mb-2">
              <Tag color={getPriorityColor(task.priority)} size="sm">
                <FaFlag className="inline mr-1" />
                {task.priority}
              </Tag>
              <Tag color={getStatusColor(task.status)} size="sm">
                {task.status}
              </Tag>
            </div>
          </div>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(task)}
              aria-label="Edit task"
            >
              <FaEdit />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onDelete(task.id)}
              aria-label="Delete task"
            >
              <FaTrash />
            </Button>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {task.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {task.tags && task.tags.map((tag, index) => (
            <Tag key={index} color="gray" size="sm">
              {tag}
            </Tag>
          ))}
        </div>
        
        <div className="flex justify-between items-center text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <FaUser className="text-gray-400" />
            <span>{task.assignee || 'Unassigned'}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaClock className="text-gray-400" />
            <span title={new Date(task.updatedAt).toLocaleString()}>
              updated {formatRelativeTime(task.updatedAt)}
            </span>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default TaskCard