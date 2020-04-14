import React  from "react"
import { useReducer } from "react"
import {Todos} from "./Todos"
import Form from "./Form"



export const List = (props) => {
    
   const {todoList, dispatchTodoList} = props;
    
    const handleClear = (e) => {
        e.preventDefault();
        dispatchTodoList({type: 'clear'})
    }

    return (
        <div>
            <h1>To Do List.</h1>
            <Form  dispatchTodoList={dispatchTodoList}/>
            <Todos todoList={todoList} dispatchTodoList={dispatchTodoList} />
            <button onClick={handleClear} >Clear Completed</button>
        </div>
    )
}