import { useState, useMemo, useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

const SCHEMA_VERSION = 1
const STORAGE_KEY = 'team-workflow-board-data'

const initialTasks = [
  {
    id: '1',
    title: 'Design system setup',
    description: 'Set up the design system with reusable components',
    status: 'Done',
    priority: 'High',
    assignee: 'John Doe',
    tags: ['design-system', 'components'],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-16T14:30:00Z'
  },
  {
    id: '2',
    title: 'Implement drag and drop',
    description: 'Add drag and drop functionality for moving tasks between columns',
    status: 'In Progress',
    priority: 'High',
    assignee: 'Jane Smith',
    tags: ['feature', 'ui'],
    createdAt: '2024-01-16T09:00:00Z',
    updatedAt: '2024-01-16T16:45:00Z'
  },
  {
    id: '3',
    title: 'Add filtering capabilities',
    description: 'Implement filtering and sorting options for tasks',
    status: 'In Progress',
    priority: 'Medium',
    assignee: 'Bob Johnson',
    tags: ['feature', 'filters'],
    createdAt: '2024-01-14T14:00:00Z',
    updatedAt: '2024-01-16T11:20:00Z'
  },
  {
    id: '4',
    title: 'Write documentation',
    description: 'Document the component library and API usage',
    status: 'Backlog',
    priority: 'Low',
    assignee: 'Alice Brown',
    tags: ['documentation'],
    createdAt: '2024-01-16T13:00:00Z',
    updatedAt: '2024-01-16T13:00:00Z'
  }
]

const useTasks = () => {
  const [storageData, setStorageData] = useLocalStorage(STORAGE_KEY, {
    schemaVersion: SCHEMA_VERSION,
    tasks: initialTasks
  })

  const [filters, setFilters] = useState({
    search: '',
    status: 'all',
    priority: 'all'
  })

  // Migrate data if schema version changes
  useEffect(() => {
    if (storageData.schemaVersion !== SCHEMA_VERSION) {
      // In a real app, you'd have migration logic here
      console.log('Migration needed from version', storageData.schemaVersion, 'to', SCHEMA_VERSION)
      // For now, just update the version
      setStorageData({
        schemaVersion: SCHEMA_VERSION,
        tasks: storageData.tasks || initialTasks
      })
    }
  }, [storageData.schemaVersion, setStorageData])

  const tasks = storageData.tasks || []

  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase()
        const matchesSearch = 
          task.title.toLowerCase().includes(searchLower) ||
          task.description.toLowerCase().includes(searchLower) ||
          task.assignee.toLowerCase().includes(searchLower) ||
          (task.tags && task.tags.some(tag => tag.toLowerCase().includes(searchLower)))
        
        if (!matchesSearch) return false
      }

      // Status filter
      if (filters.status !== 'all' && task.status !== filters.status) {
        return false
      }

      // Priority filter
      if (filters.priority !== 'all' && task.priority !== filters.priority) {
        return false
      }

      return true
    })
  }, [tasks, filters])

  const addTask = (taskData) => {
    const newTask = {
      id: `task-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      ...taskData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    const updatedTasks = [...tasks, newTask]
    setStorageData({
      schemaVersion: SCHEMA_VERSION,
      tasks: updatedTasks
    })
  }

  const updateTask = (taskId, taskData) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          ...taskData,
          updatedAt: new Date().toISOString()
        }
      }
      return task
    })

    setStorageData({
      schemaVersion: SCHEMA_VERSION,
      tasks: updatedTasks
    })
  }

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId)
    setStorageData({
      schemaVersion: SCHEMA_VERSION,
      tasks: updatedTasks
    })
  }

  const clearFilters = () => {
    setFilters({
      search: '',
      status: 'all',
      priority: 'all'
    })
  }

  return {
    tasks,
    filteredTasks,
    filters,
    setFilters,
    clearFilters,
    addTask,
    updateTask,
    deleteTask
  }
}

export { useTasks }