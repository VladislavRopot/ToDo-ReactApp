import './App.css';
import TodoItems from './Components/TodoItems/TodoItems';
import InputText from './Components/InputText/InputText';
import { useState } from 'react';

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addTodoItem = (item) => {
    setTodoItems([...todoItems, item]);
  };

  const removeTodoItem = (index) => {
    const confirmed = window.confirm('Are you sure?');
    if (confirmed) {
      const updatedItems = todoItems.filter((_, i) => i !== index);
      setTodoItems(updatedItems);
    }
  };

  return (
    <>
      <InputText addTodoItem={addTodoItem} />
      <TodoItems todoItems={todoItems} removeTodoItem={removeTodoItem} />
    </>
  );
}

export default App;
