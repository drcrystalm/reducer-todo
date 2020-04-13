import React, { useReducer } from "react"

const list = [
    {
        item: "Learn about reducers",
        completed: false,
        id: 3892987589,
    },
    {
        item: "Get MVP on this project",
        completed: true,
        id: 3892987590,
    },
]

const newItem = [
    {
        item: action.text,
        done: false,
        id: Date.now(),
    },
]

export const initialState = list

export function reducer(todos, action) {
    switch ((action, type)) {
        case "ADDTODO":
            return { ...todos, newItem }
    }
}
