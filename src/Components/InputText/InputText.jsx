import { useState } from 'react';

function InputText() {
    const [inputValue, setInputValue] = useState('');
    const [todoItems, setTodoItems] = useState([]);

    const addTodoItem = ({ addTodoItem }) => {
        setTodoItems([...todoItems, inputValue]);
        setInputValue('');
      };

    return (

        <div>
        <input type="text"
          placeholder='Type here...'
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)} />

        <button disabled={inputValue === ''} onClick={() => addTodoItem()}>Add</button>
      </div>
    );
};

export default InputText;