import React from 'react'
import { useEffect, useReducer } from "react";
import InputTodo from "./InputTodo"
import InputLabel from "./InputLabel"
import TodosList from "./TodosList"
import LabelList from "./LabelList"
import SearchBar from "./SearchBar"
import Toast from "./Toast"

import { reducer, initialState, actionTypes } from "../Reducer"
import { postTodo, postLabel, deleteTodo, deleteLabel, updateTodo, updateLabel } from "../Services"
import { createTodo, appInit, createLabel, findLabel } from "../Utils"

export default function Main() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { todosList, labelsList, todoQuery, activeLabel, toast } = state

    useEffect(() => {
        appInit(dispatch)
    }, [])

    function handleTodoSubmit(data) {
        let label = findLabel(data.label, [...labelsList])
        label.count = label.count + 1

        Promise.all([
            postTodo(createTodo(data)).then(response => {
                console.log(response)
                dispatch({ type: actionTypes.ENTER_TODO, payload: { todo: response } })
            }),
            updateLabel(label).then(response => {
                console.log(response)
                dispatch({ type: actionTypes.UPDATE_LABEL, payload: { data: label } })
            })
        ])

    }

    function handleLabelSubmit(data) {

        postLabel(createLabel(data)).then(response => {
            console.log(response)
            dispatch({ type: actionTypes.ENTER_LABEL, payload: { label: response } })
        })

    }

    function handleSearch(data) {
        dispatch({
            type: actionTypes.SEARCH_TODO,
            payload: { query: data.todo, label: data.label }
        })
    }

    function handleTodoDelete(data) {
        let label = findLabel(data.label, [...labelsList])
        label.count = label.count - 1

        Promise.all([
            deleteTodo(data.id).then(response => {
                console.log(response)
                dispatch({ type: actionTypes.DELETE_TODO, payload: { data: data } })
            }),
            updateLabel(label).then(response => {
                console.log(response)
                dispatch({ type: actionTypes.UPDATE_LABEL, payload: { data: label } })
            })
        ])

    }

    function handleLabelDelete(data) {
        deleteLabel(data.id).then(response => {
            console.log(response)
            dispatch({ type: actionTypes.DELETE_LABEL, payload: { data: data } })
        })
    }

    function handleToggle(data) {
        data.isDone = !data.isDone
        updateTodo(data).then((response) => {
            console.log(response)
            dispatch({ type: actionTypes.UPDATE_TODO, payload: { data: data } })
        })
    }
    return (
        <div className="container mt-5">
            <div className="row align-items-start justify-content-around">

                <div className="col-md-4 col-12 p-md-0 p-4">
                    <InputTodo labels={labelsList} handleSubmit={handleTodoSubmit} />
                </div>


                <div className="col-md-2 col-12 my-md-0 my-5 p-md-0 p-4" >
                    <h3>Labels</h3>
                    <hr />
                    <InputLabel handleSubmit={handleLabelSubmit} />
                    <div className="col-12 my-2 p-2 overflow-auto" id="labels-section">
                        <LabelList handleDelete={handleLabelDelete} list={labelsList} />
                    </div>
                </div>

                <div className="col-md-5 col-12 p-md-0 p-4">

                    <h3>Todos List</h3>
                    <hr />

                    <div className="col-12">
                        <SearchBar handleSearch={handleSearch} list={labelsList} />
                    </div>

                    <div className="col-12 p-2 " >

                        <div className="row overflow-auto" id="todos-list">
                            <TodosList handleDelete={handleTodoDelete}
                                handleToggle={handleToggle} list={todosList}
                                query={todoQuery} label={activeLabel} />
                        </div>

                    </div>

                </div>
            </div>
            <Toast type={toast.type} message={toast.message} />
        </div>

    )
}
