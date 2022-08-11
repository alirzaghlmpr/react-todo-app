import React from 'react'
import { useForm } from "../Hooks"
export default function InputLabel({ handleSubmit }) {

    const [fields, handleForm] = useForm({ label: "", count: 0, })

    function handleKeyDown(e) {
        if (e.key === "Enter") {
            e.preventDefault()
            let { label, count } = fields
            handleSubmit({ label, count })
            handleForm(null, "empty")
        }

    }
    return (
        <div className="col-12">
            <input name="label" type="text" value={fields.label}
                className="form-control"
                placeholder="add costume Label"
                onChange={(e) => handleForm(e)}
                onKeyDown={(e) => handleKeyDown(e)} />
        </div>)
}
