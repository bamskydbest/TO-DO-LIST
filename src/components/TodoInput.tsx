import { useState } from "react";

interface Props {
  onAdd: (text: string) => void;
}
const TodoInput = ({ onAdd }: Props): React.JSX.Element => {
  const [text, setText] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const trimmed = text.trim();
      if (trimmed) {
        onAdd(trimmed);
        setText("");
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring"
        placeholder="What do you want to do today?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default TodoInput;
