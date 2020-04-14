import React from "react"

export  const Todos = (props) => {
    const handleToggle = (e) => {
        e.preventDefault();
    }
    console.log(props.todoList)
    return (
        <h1>Todos.js</h1>
    )
}