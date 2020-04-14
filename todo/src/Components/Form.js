import React, {useState} from "react";


const Form = (props) => {
    const {dispatchTodoList}=props;
    const [todo, setTodo] = useState("");
    const handleChange = (e) => {
        e.preventDefault();
        setTodo(e.target.value);
    }
    const handleAdd = (e) => {
        e.preventDefault();
        dispatchTodoList({type:"add", payload: todo})
        setTodo("")
    }
    return (
        <form>
            <label htmlFor="todo" >Add To Do:{"  "}
            <input 
            type="text" 
            id="todo" 
            name="todo"
            value={todo}
            onChange={handleChange}
             />
            <button onClick={handleAdd}>Add</button>
            </label>
        </form>
    )
}

export default Form;