import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');

  const addTodoItem = () => {
    console.log(inputValue);
    
  }

  return (
    <div >
      <div>
        <input type="text"
          placeholder='Type here...'
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)} />

        <button onClick={() => addTodoItem()}>Add</button>
      </div>
    </div>
  );
}

export default App;
