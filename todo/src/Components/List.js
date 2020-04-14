import React  from "react"
import { useReducer } from "react"
import {Todos} from "./Todos"



export const List = (props) => {
    
   
    
    const handleClear = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <h1>To Do List.</h1>
            {/* form */}
            <Todos todoList={props.todoList} dispatchTodoList={props.dispatchTodoList} />
            <button onClick={handleClear} >Clear Completed</button>
        </div>
    )
}