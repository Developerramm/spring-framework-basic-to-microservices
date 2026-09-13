import React, { useState } from "react";

const Todo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const handleDelete = (index) => {
    console.log(index);
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div>
      <h3>Todo app</h3>
      <form onSubmit={handleSubmit}>
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          type="text"
          placeholder="Add new text"
        />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {" "}
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}{" "}
            </span>{" "}
            <button onClick={() => handleDelete(index)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
