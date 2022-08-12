import React from 'react'

export default function FormLabelOption({ list }) {
    let options = list && list.map(option => {
        return <option value={option.label}>{option.label}</option>
    })
    return (
        <>
            {options}
        </>
    )
}
