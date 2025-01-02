function TodoItems({ todoItems, removeTodoItem }) {
    return (
      <div>
        {todoItems.length === 0 ? (
          <p>There are no todo items!</p>
        ) : (
          <ul>
            {todoItems.map((item, index) => (
              <li key={index}>
                <span>{item}</span>
                <button onClick={() => removeTodoItem(index)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  export default TodoItems;
  