import React from 'react'

const Tag = ({ 
  children, 
  color = 'gray',
  size = 'md',
  onRemove,
  removable = false
}) => {
  const colors = {
    gray: 'bg-gray-100 text-gray-800',
    red: 'bg-red-100 text-red-800',
    green: 'bg-green-100 text-green-800',
    blue: 'bg-blue-100 text-blue-800',
    yellow: 'bg-yellow-100 text-yellow-800',
    purple: 'bg-purple-100 text-purple-800',
    pink: 'bg-pink-100 text-pink-800'
  }
  
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base'
  }
  
  const colorClasses = colors[color] || colors.gray
  const sizeClasses = sizes[size] || sizes.md
  
  return (
    <span className={`inline-flex items-center rounded-full font-medium ${colorClasses} ${sizeClasses}`}>
      {children}
      {removable && (
        <button
          onClick={onRemove}
          className="ml-1.5 -mr-1 text-gray-400 hover:text-gray-600 focus:outline-none"
          aria-label="Remove tag"
        >
          &times;
        </button>
      )}
    </span>
  )
}

export default Tag