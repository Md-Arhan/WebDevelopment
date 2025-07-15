import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function TodoList() {
  const [message, setMessage] = useState([
    { task: "sample task", id: uuidv4(), isDone: false },
  ]);
  const [newTodo, setTodo] = useState("");

  let addNewTodo = (e) => {
    setMessage((prev) => [
      ...prev,
      { task: newTodo, id: uuidv4(), isDone: false },
    ]);
    setTodo("");
  };

  let updateTask = (event) => {
    console.log(event.target.value);
    setTodo(event.target.value);
    console.log(newTodo);
  };

  let deleteNewTodo = (id) => {
    console.log("task to be deleted", id);
    let copy = message.filter((prev) => prev.id != id);
    setMessage(copy);
  };

  let upperCaseAll = () => {
    setMessage((prev) =>
      prev.map((todo) => {
        // console.log(todo);
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );

    //  setMessage(newArr);
  };

  let updateTodo = (id) => {
    console.log(id);
    setMessage((prev) =>
      prev.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  let markAsDone = (id) => {
    setMessage((prev) =>
      prev.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        name=""
        id="input"
        value={newTodo}
        onChange={updateTask}
      />
      &nbsp;&nbsp;
      <button onClick={addNewTodo}>Add task</button>
      <br />
      <hr />
      <h4>Task To-do</h4>
      <ul>
        {message.map((ele) => (
          <p key={ele.id}>
            {ele.isDone ? (
              <>
                <span style={{textDecoration:"line-through"}}>{ele.task}</span>
                &nbsp;
                <button onClick={() => deleteNewTodo(ele.id)}>Delete</button>
                &nbsp;&nbsp;
                <button onClick={() => updateTodo(ele.id)}>Update</button>
                &nbsp;&nbsp;
              </>
            ) : (
              <>
                <span>{ele.task}</span>
                &nbsp;
                <button onClick={() => deleteNewTodo(ele.id)}>Delete</button>
                &nbsp;&nbsp;
                <button onClick={() => updateTodo(ele.id)}>Update</button>
                &nbsp;&nbsp;
                <button onClick={() => markAsDone(ele.id)}>Mark as done</button>
              </>
            )}
          </p>
        ))}
      </ul>
      <button onClick={upperCaseAll}>UpperCase All</button>
    </div>
  );
}
