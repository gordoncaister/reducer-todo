import React from "react"

export  const Todos = (props) => {
    const {todoList, dispatchTodoList} = props
    const handleToggle = (e) => {
        e.preventDefault();
    }
    console.log(todoList)
    return (
        <h1>Todos.js</h1>
    )
}