import React from 'react'
import { useForm, useEffect } from '../Hooks'

export default function InputTodo({ labels, handleSubmit }) {


    const [fields, handleForm] = useForm({ todo: "", label: "" })

    function handleKeyDown(e) {
        if (e.key == "Enter") {
            let { todo, label } = fields
            handleSubmit({ todo, label })
        }

    }
    return (
        <div className="col-md-4 col-12 p-md-0 p-4">
            <h3>Todos App</h3>
            <hr />
            <div className="input-group border rounded p-1">
                <input type="text" name="todo" className="form-control border-0"
                    placeholder="type 'Todo' and press enter"
                    onChange={(e) => handleForm(e)} onKeyDown={(e) => handleKeyDown(e)} />
                <div className="vr"></div>

                <div className="input-group-append">
                    <select className="form-select border-0" onChange={(e) => handleForm(e)}
                        onKeyDown={(e) => handleKeyDown(e)}
                        name="label">
                        <option value="uncategorized">uncategorized</option>
                        <option value="1">Lable1</option>
                        <option value="2">Label2</option>
                        <option value="3">Lable3</option>
                    </select>
                </div>
            </div>
        </div>)
}
