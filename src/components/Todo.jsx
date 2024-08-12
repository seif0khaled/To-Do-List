import { useState } from "react";
import Button from 'react-bootstrap/Button';

function Todo() {
    const [todo,setTodo] = useState("");
    const arr =[]
    const [todos,setTodos]=useState([localStorage.getItem(arr)]);
    function addTask(e){
        e.preventDefault();
        setTodos([...todos,todo]);
        
    }
    localStorage.setItem(arr,todos);

    return (
        <>
            <h1>Todo App</h1>
            <form onSubmit={addTask}>
                <input type="text" onChange={(e)=>setTodo(e.target.value)} />
                {/* <button type="submit">Add Task</button> */}
                <Button variant="danger" type="submit">Add Task</Button>{' '}
            </form>
            <h2>Display Tasks: {todos.length}</h2>
            {todos.map((todo)=><h3 key={todo}>{todo}</h3>)}

        </>
    )
}
export default Todo;