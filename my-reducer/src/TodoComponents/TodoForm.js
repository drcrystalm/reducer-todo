import React from "react"

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: "",
        }
    }

    handleChange = event => {
        event.preventDefault()
        this.setState({ [event.target.task]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addTodo(this.state.input)
        this.setState({ input: "" })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    task='input'
                    value={this.state.input}
                    onChange={this.handleChange}
                />
                <button> Add Todo </button>
            </form>
        )
    }
}

export default TodoForm
