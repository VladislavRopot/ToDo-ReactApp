import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoItems, setTodoItems] = useState([]);

  const addTodoItem = () => {
    setTodoItems([...todoItems, inputValue]);
    setInputValue('');
  };

  const removeTodoItem = (index) => {
    const confirmed = window.confirm('Are you sure?');
    if (confirmed === true) {
      todoItems.splice(index, 1);

      setTodoItems([...todoItems]);
    }
  };

  return (
    <div >
      <div>
        <input type="text"
          placeholder='Type here...'
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)} />

        <button disabled={inputValue === ''} onClick={() => addTodoItem()}>Add</button>
      </div>

      <div>
        {
          todoItems.length === 0 ? (
            <p>There are no todo items!</p>
          ) : (
            <ul>
              {
                todoItems.map((item, index) => ( // Map pentru ca returneaa un nou element
                  <li key={index}>
                    <span>{item}</span>

                    <button onClick={() => removeTodoItem(index)}>Delete</button>
                  </li>
                ))
              }
            </ul>
          )
        }
      </div>
    </div>
  );
}

export default App;
