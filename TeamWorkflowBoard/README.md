📁 Project Structure
text
src/
├── components/
│   ├── ui/                    # Design system components
│   │   ├── Button.jsx        # Button component
│   │   ├── Card.jsx          # Card component
│   │   ├── Modal.jsx         # Modal component
│   │   ├── Tag.jsx           # Tag/Badge component
│   │   ├── TextInput.jsx     # Input field
│   │   ├── TextArea.jsx      # Textarea component
│   │   ├── Select.jsx        # Select dropdown
│   │   └── Toast.jsx         # Toast notification
│   ├── TaskCard.jsx          # Individual task display
│   ├── TaskForm.jsx          # Task creation/editing form
│   ├── TaskBoard.jsx         # Main board with columns
│   └── FilterBar.jsx         # Filtering component
├── hooks/
│   ├── useLocalStorage.js    # Local storage management
│   ├── useTasks.js           # Task business logic
│   └── useToast.js           # Toast notification system
├── App.jsx                   # Root application component
└── main.jsx                  # Application entry point