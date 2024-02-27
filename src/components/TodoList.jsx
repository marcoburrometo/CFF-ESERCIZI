import { useState } from "react";
import AddForm from "./AddForm";
import ListElement from "./ListElement";

function TodoList() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  function removeTodo(todo) {
    setTodos(todos.filter((t) => t !== todo));
  }

  function completeTodo(todo) {
    const newTodos = todos.map((t) => {
      if (t === todo) {
        return { ...t, completed: true };
      }
      return t;
    });

    setTodos(newTodos);
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
          onDelete={function () {
            removeTodo(todo);
          }}
          onComplete={function () {
            completeTodo(todo);
          }}
        />
      ))}
    </div>
  );
}

export default TodoList;
