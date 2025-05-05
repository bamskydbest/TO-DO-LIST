import { useState } from "react";

interface Props {
  onAdd: (text: string) => void;
}
const TodoInput = ({ onAdd }: Props): React.JSX.Element => {
  const [text, setText] = useState("");

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && text.trim()) {
      onAdd(text.trim());
      setText("");
    }
  };
  return (
    <div>
      <input
        type="text"
        className="w-full md:w-3/4 lg:w-2/3 px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring"
        placeholder="What do you want to do today?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKey}
      />
    </div>
  );
};

export default TodoInput;
