import React from 'react'
import { useEffect, useState, useReducer } from "react";
import InputTodo from "./InputTodo"
import { reducer, initialState, actionTypes } from "../Reducer"

export default function Main() {
    const [state, dispatch] = useReducer(reducer, initialState)

    function handleSubmit(data) {
        console.log(data)
    }

    return (
        <div className="container mt-5">
            <div className="row align-items-start justify-content-around">

                <InputTodo labels={state.labels} handleSubmit={handleSubmit} />


                <div className="col-md-3 col-12 my-md-0 my-5 p-md-0 p-4">
                    <h3>Labels</h3>
                    <hr />
                    <div className="col-12">
                        <input type="text" className="form-control"
                            placeholder="add costume Label" />
                    </div>
                    <div className="col-12 my-2">
                        <button type="button" className="btn btn-primary my-2 w-100">
                            uncategorized <span className="badge text-bg-secondary m-1 p-2"> <i className="bi bi-stickies"></i> 4 items</span>
                            <span className="badge text-bg-danger p-2"> <i className="bi bi-x-square"></i> delete </span>
                        </button>
                        <button type="button" className="btn btn-primary my-2 w-100">
                            uncategorized <span className="badge text-bg-secondary m-1 p-2"> <i className="bi bi-stickies"></i> 4 items</span>
                            <span className="badge text-bg-danger p-2"> <i className="bi bi-x-square"></i> delete </span>
                        </button>
                        <button type="button" className="btn btn-primary my-2 w-100">
                            uncategorized <span className="badge text-bg-secondary m-1 p-2"> <i className="bi bi-stickies"></i> 4 items</span>
                            <span className="badge text-bg-danger p-2"> <i className="bi bi-x-square"></i> delete </span>
                        </button>
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
                            <h6>Example heading <span className="badge bg-primary m-1">Label</span>
                                <span className="badge bg-success">done</span>
                            </h6>
                            <h6 className="text-decoration-line-through">Example heading <span className="badge bg-primary m-1">Label</span>
                                <span className="badge bg-warning">undone</span>
                            </h6>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}
