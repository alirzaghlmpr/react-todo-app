import React from 'react'
import Todo from "./Todo"

export default function TodosList({ list }) {
    let todos = list && list.map((todo) => {
        return <Todo todo={todo} key={todo.id} />
    })
    return (
        <>{todos}</>)
}
