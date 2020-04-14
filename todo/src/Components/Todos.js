import React from "react"

export  const Todos = (props) => {
    const {todoList, dispatchTodoList} = props
    const handleToggle = (e) => {
        e.preventDefault();
    }
    console.log(todoList)
    return (
        <div>
            {todoList.map(todo => {
                return(
                <h3>{todo.item}</h3>
            )})}
        </div>
    )
}