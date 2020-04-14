import React  from "react"
import { useReducer } from "react"
import {Todos} from "./Todos"
import Form from "./Form"



export const List = (props) => {
    
   
    
    const handleClear = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <h1>To Do List.</h1>
            <Form  />
            <Todos todoList={props.todoList} dispatchTodoList={props.dispatchTodoList} />
            <button onClick={handleClear} >Clear Completed</button>
        </div>
    )
}