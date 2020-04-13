import React from "react"
import Todo from "./ToDo"

const ToDoList = (props) => {
    return (
        <div className='List'>
            {props.todos.map((todo) => {
                return <Todo todo={todo} toggleItem={props.toggleItem} />
            })}
        </div>
    )
}
export default ToDoList
