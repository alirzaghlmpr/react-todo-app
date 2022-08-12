import React from 'react'
import Label from "./Label"
export default function LabelList({ list }) {
    let labels = list && list.map((label) => {
        return <Label label={label} key={label.id} />
    })
    return (
        <>
            {labels}
        </>
    )
}
