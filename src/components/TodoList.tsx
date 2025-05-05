import TodoItem from "./TodoItem";

type Todo = { id: string; text: string; completed: boolean };

interface Props {
  todos: Todo[];
  onToggle: (id: string) => void;
  onUpdate: (id: string, text: string) => void;
  onDelete: (id: string) => void;
}
const TodoList = ({ todos, onToggle, onUpdate, onDelete }: Props) => {
  return (
    <div className="w-full md:w-3/4 lg:w-2/3 mx-auto">
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
