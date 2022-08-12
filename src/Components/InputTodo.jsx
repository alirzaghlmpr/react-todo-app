import React from 'react'
import { useForm } from '../Hooks'
import FormLabelOption from "./FormLabelOption"
export default function InputTodo({ labels, handleSubmit }) {


    const [fields, handleForm] = useForm({ todo: "", label: "uncategorized" })

    function handleKeyDown(e) {
        if (e.key === "Enter") {
            e.preventDefault()
            let { todo, label } = fields
            handleSubmit({ todo, label })
            handleForm(null, "empty")
        }

    }
    return (
        <>
            <h3>Todos App</h3>
            <hr />
            <div className="input-group border rounded p-1">
                <input type="text" name="todo" value={fields.todo} className="form-control border-0"
                    placeholder="type 'Todo' and press enter"
                    onChange={(e) => handleForm(e)} onKeyDown={(e) => handleKeyDown(e)} />
                <div className="vr"></div>

                <div className="input-group-append">
                    <select value={fields.label} className="form-select border-0"
                        onChange={(e) => handleForm(e)}
                        onKeyDown={(e) => handleKeyDown(e)}
                        name="label">
                        <FormLabelOption list={labels} />
                    </select>
                </div>
            </div>
        </>
    )
}
