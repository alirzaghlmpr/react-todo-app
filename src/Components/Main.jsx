import React from 'react'
import { useEffect, useReducer } from "react";
import InputTodo from "./InputTodo"
import InputLabel from "./InputLabel"
import TodosList from "./TodosList"
import LabelList from "./LabelList"
import { reducer, initialState, actionTypes } from "../Reducer"
import { postTodo, postLabel } from "../Services"
import { createTodo, appInit, createLabel } from "../Utils"

export default function Main() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { todosList, labelsList } = state

    useEffect(() => {
        appInit(dispatch)

    }, [])

    useEffect(() => {
        console.log("will be render todos list")
    }, [todosList])

    useEffect(() => {
        console.log("will be render labels list")
    }, [labelsList])

    function handleTodoSubmit(data) {
        postTodo(createTodo(data)).then(response => {
            console.log(response)
            dispatch({ type: actionTypes.ENTER_TODO, payload: { todo: response } })
        })
    }

    function handleLabelSubmit(data) {

        postLabel(createLabel(data)).then(response => {
            console.log(response)
            dispatch({ type: actionTypes.ENTER_LABEL, payload: { label: response } })
        })

    }
    return (
        <div className="container mt-5">
            <div className="row align-items-start justify-content-around">

                <div className="col-md-4 col-12 p-md-0 p-4">
                    <InputTodo labels={labelsList} handleSubmit={handleTodoSubmit} />
                </div>


                <div className="col-md-3 col-12 my-md-0 my-5 p-md-0 p-4">
                    <h3>Labels</h3>
                    <hr />
                    <InputLabel handleSubmit={handleLabelSubmit} />
                    <div className="col-12 my-2">
                        <LabelList list={labelsList} />
                    </div>
                </div>

                <div className="col-md-4 col-12 p-md-0 p-4">

                    <h3>Todos List</h3>
                    <hr />

                    <div className="col-12">

                        <div className="input-group border rounded p-1">
                            <input type="text" className="form-control border-0"
                                placeholder="type name to search" />
                            <div className="vr"></div>

                            <div className="input-group-append">
                                <select className="form-select border-0">
                                    <option value="uncategorized">uncategorized</option>
                                    <option value="1">Lable1</option>
                                    <option value="2">Label2</option>
                                    <option value="3">Lable3</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 p-2">

                        <div className="row">
                            <TodosList list={todosList} />
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}
