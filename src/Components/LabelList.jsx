import React from 'react'
import Label from "./Label"
export default function LabelList({ list, handleDelete }) {
    let labels = list && list.map((label) => {
        return <Label handleDelete={handleDelete} label={label} key={label.id} />
    })
    return (
        <>
            {labels}
        </>
    )
}
