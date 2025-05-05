import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";

type Todo = { id: string; text: string; completed: boolean };

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onUpdate: (id: string, text: string) => void;
  onDelete: (id: string) => void;
}
const TodoItem = ({
  todo,
  onToggle,
  onUpdate,
  onDelete,
}: Props): React.JSX.Element => {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  return (
    <li className="flex items-center justify-between mb-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="mr-2 w-5 h-5 rounded border-gray-300 focus:ring"
        />
        {editing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={() => {
              onUpdate(todo.id, editText);
              setEditing(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onUpdate(todo.id, editText);
                setEditing(false);
              }
            }}
            className="px-2 py-1 border rounded focus:outline-none focus:ring"
            autoFocus
          />
        ) : (
          <span
            className={`${todo.completed ? "line-through text-gray-400" : ""}`}
          >
            {" "}
            {todo.text}{" "}
          </span>
        )}
      </div>
      <div className="flex items-center space-x-2">
        <MdEdit
          className="w-6 h-6 sm:w-7 sm:h-7 p-1 sm:p-2"
          onClick={() => setEditing(true)}
        />

        <MdDelete
          className="w-6 h-6 sm:w-7 sm:h-7 p-1 sm:p-2"
          onClick={() => onDelete(todo.id)}
        />
      </div>
    </li>
  );
};

export default TodoItem;
