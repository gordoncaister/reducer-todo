import React from "react"

export  const Todos = (props) => {
    const {todoList, dispatchTodoList} = props
    const handleToggle = (e) => {
        e.preventDefault();
        console.log("e",e.target)
        dispatchTodoList({type:'toggle', payload: e.target.className})
    }
    console.log(todoList)
    return (
        <div>
            {todoList.map(todo => {
                return(
                    <div  key={todo.id} onClick={handleToggle} >
                        <h3 className={todo.id}>{todo.item}</h3>
                    </div>
                
            )})}
        </div>
    )
}