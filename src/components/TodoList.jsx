import { useState } from "react";
import AddForm from "./AddForm";
import ListElement from "./ListElement";

function TodoList() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  return (
    <div>
      <h1>TODO list</h1>

      <AddForm onAdd={addTodo} />
      <hr />
      {todos.map((todo) => (
        <ListElement
          title={todo.title}
          notes={todo.notes}
          color={todo.color}
          createDate={todo.createDate}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

export default TodoList;
