// import React from "react"

// const Todo = props => {
//     return (
//         <div
//             className={props.todo.completed ? "completed" : "todo"}
//             onClick={() => props.toggleItem(props.todo.id)}>
//             {props.todo.task}
//         </div>
//     )
// }

// export default Todo

import React from "react"

const ToDo = ({ item, toggleCompleted }) => {
    return (
        <div
            onClick={() => toggleCompleted(item.id)}
            className={`item ${item.completed ? "completed" : ""}`}>
            <p>{item.task}</p>
        </div>
    )
}

export default ToDo
