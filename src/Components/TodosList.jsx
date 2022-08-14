import React, { useState, useEffect } from 'react'
import Todo from "./Todo"
import { searchTodo } from "../Services"
export default function TodosList({ handleDelete, list, query, label, handleToggle }) {

    const [filteredList, setList] = useState(list)

    useEffect(() => {
        searchTodo(query, label).then(response => setList(response.reverse()))
    }, [list, query, label])

    let todos = filteredList.length > 0 ? filteredList.map((todo) => {
        return <Todo handleToggle={handleToggle} todo={todo} handleDelete={handleDelete} key={todo.id} />
    }) : <p className="text-muted">ops! <br /> cannot find any thing :( </p>


    return (
        <>{todos}</>
    )
}
