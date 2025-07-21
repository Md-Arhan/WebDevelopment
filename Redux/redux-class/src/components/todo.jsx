import { useSelector } from "react-redux"
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import {deleteTodo, markasDone} from "../features/TODO/TodoSlice";

export default function Todo(){
    const todoos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();
    console.log(todoos);

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
        console.log(id)
    }

    const handleMarkAsDone = (id) => {
        dispatch(markasDone(id));
    }

    return (
        <div>
            <h2>To-Do List</h2>
            <ul>
                <AddForm/>
                {todoos.map((todo) => (<li style={todo.isDone ? {textDecorationLine : "line-through"} : {}}>{todo.task} &nbsp;
                    <button  onClick={() => handleDelete(todo.id)}>Delete</button>
                    <button onClick={() => handleMarkAsDone(todo.id)}>Mark as Done</button>
                </li>))}
            </ul>
        </div>
    )
}