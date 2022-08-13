import React, { useEffect } from 'react'
import { useForm } from "../Hooks"
import { createLabel } from "../Utils"
import FormLabelOption from "./FormLabelOption"

export default function SearchBar({ handleSearch, list }) {
    const [fields, handleForm] = useForm({ todo: "", label: "all" })
    let { todo, label } = fields

    function handleChange(e) {
        handleForm(e)
    }

    useEffect(() => {
        handleSearch({ todo, label })
    }, [todo, label])

    return (
        <div className="input-group border rounded p-1">
            <input type="text" name="todo" value={todo}
                onChange={(e) => handleChange(e)} className="form-control border-0"
                placeholder="type name to search" />
            <div className="vr"></div>

            <div className="input-group-append">
                <select className="form-select border-0" name="label" value={label}
                    onChange={(e) => handleChange(e)}>
                    <FormLabelOption list={list} extra={createLabel({ label: "all", count: 0 })} />
                </select>
            </div>
        </div>)
}
