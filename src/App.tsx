import React, { useState, useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

function App(): React.JSX.Element {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string): void => {
    const newTodo: Todo = { id: uuidv4(), text, completed: false };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: string): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const updateTodo = (id: string, newText: string): void => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const deleteTodo = (id: string): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 w-full max-w-md">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Things To Do!
        </h1>

        <TodoInput onAdd={addTodo} />
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onUpdate={updateTodo}
          onDelete={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
