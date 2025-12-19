import React, { useEffect } from 'react'
import { FaCheckCircle, FaExclamationCircle, FaTimes } from 'react-icons/fa'

const Toast = ({ message, type = 'info', onClose, autoClose = true, autoCloseDuration = 5000 }) => {
  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        onClose()
      }, autoCloseDuration)
      
      return () => clearTimeout(timer)
    }
  }, [autoClose, autoCloseDuration, onClose])
  
  const typeConfig = {
    success: {
      icon: <FaCheckCircle className="h-5 w-5" />,
      bgColor: 'bg-green-50',
      textColor: 'text-green-800',
      borderColor: 'border-green-200'
    },
    error: {
      icon: <FaExclamationCircle className="h-5 w-5" />,
      bgColor: 'bg-red-50',
      textColor: 'text-red-800',
      borderColor: 'border-red-200'
    },
    info: {
      icon: null,
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-800',
      borderColor: 'border-blue-200'
    },
    warning: {
      icon: <FaExclamationCircle className="h-5 w-5" />,
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-800',
      borderColor: 'border-yellow-200'
    }
  }
  
  const config = typeConfig[type] || typeConfig.info
  
  return (
    <div className={`flex items-center p-4 rounded-lg border ${config.bgColor} ${config.borderColor} shadow-lg max-w-md`}>
      {config.icon && (
        <div className={`flex-shrink-0 mr-3 ${config.textColor}`}>
          {config.icon}
        </div>
      )}
      <div className={`flex-1 ${config.textColor} text-sm font-medium`}>
        {message}
      </div>
      <button
        onClick={onClose}
        className={`ml-4 flex-shrink-0 ${config.textColor} hover:opacity-75 focus:outline-none`}
        aria-label="Close notification"
      >
        <FaTimes className="h-4 w-4" />
      </button>
    </div>
  )
}

export default Toast