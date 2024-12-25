import { useState } from 'react';

function TodoItems() {
    const [todoItems, setTodoItems] = useState([]);
    const removeTodoItem = (index) => {
        const confirmed = window.confirm('Are you sure?');
        if (confirmed === true) {
            todoItems.splice(index, 1);

            setTodoItems([...todoItems]);
        }
    };

    return (
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
    );
};

export default TodoItems;