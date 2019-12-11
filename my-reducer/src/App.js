import React from "react"
// import "./components/TodoComponents/Todo.css"

import TodoList from "./TodoComponents/TodoList"
import TodoForm from "./TodoComponents/TodoForm"

const todos = [
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

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todos,
        }
    }

    addTodo = todo => {
        let newTodo = {
            task: todo,
            id: Date.now(),
            completed: false,
        }
    }

    render() {
        if (this.state.todos.length < 1) {
            return (
                <div className='App'>
                    <div className='header'>
                        <h1>My fantastic To Do List!</h1>
                        <TodoForm addTodo={this.addTodo} />
                    </div>
                    <h2>Add a To Do Task!</h2>
                </div>
            )
        }

        return (
            <div className='App'>
                <div className='header'>
                    <h2>Welcome My Fantastic To DO List!</h2>
                    <TodoForm />
                </div>
                <TodoList todos={todos} />
                <div>
                    <button>Enter To Do</button>
                </div>
            </div>
        )
    }
}

export default App
