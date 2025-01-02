import { useState } from 'react';

function InputText({ addTodoItem }) {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim()) {
      addTodoItem(inputValue);
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type here..."
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button disabled={!inputValue.trim()} onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default InputText;
