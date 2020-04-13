import React, { useState } from "react"
// import "./components/TodoComponents/Todo.css"

import TodoList from "./TodoComponents/ToDoList"
import TodoForm from "./TodoComponents/ToDoForm"

const tasks = [
    {
        task: "Organize Garage",
        id: 1528817077286,
        completed: false,
    },
    {
        task: "Bake Cookies",
        id: 1528817084358,
        completed: false,
    },
]

const App = () => {
    const [toDoList, setToDolist] = useState(tasks)

    const addNewTask = (newTaskName) => {
        setToDoList([
            ...toDoList,
            {
                task: toDo,
                id: Date.now(),
                completed: false,
            },
        ])
    }

    const toggleCompleted = (id) => {
        setToDoList(
            toDoList.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        completed: !item.completed,
                    }
                }
                return item
            })
        )
    }

    const clearCompleted = () => {
        setToDoList(
            toDoList.filter((item) => {
                return !item.completed
            })
        )
    }

    return (
        <div className='appDiv'>
            <div className='paper'>
                <div className='pattern'>
                    <div className='notes'>
                        <h1>Errand Tracker</h1>
                        <ToDoList
                            errands={toDoList}
                            toggleCompleted={toggleCompleted}
                        />
                    </div>
                </div>
            </div>
            <ToDoForm addNewTask={addNewTask} clearCompleted={clearCompleted} />
        </div>
    )
}

export default App
