import React from 'react'

export default function Todo({ todo, handleDelete, handleToggle }) {
    let isDone = todo.isDone
    return (
        <h6 className={isDone ? "text-decoration-line-through" : ""}>
            {todo.todo} <span className="badge bg-primary m-1">{todo.label} </span>
            <span
                onClick={() => handleToggle(todo)}
                className=
                {`badge ${isDone ? "bg-success" : "bg-warning"} m-1`}>
                {isDone ? "done(click to change)" : "undone(click to change)"}
            </span>
            <span onClick={() => handleDelete(todo)}
                className="badge text-bg-danger p-2"> <i className="bi bi-trash3">
                </i> </span>
            <span className="badge text-muted">{todo.date}</span>
        </h6>
    )
}
