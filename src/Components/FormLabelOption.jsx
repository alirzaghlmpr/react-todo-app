import React from 'react'

export default function FormLabelOption({ list, extra }) {
    let options = list && (list.map(option => {
        return <option value={option.label} key={option.id}>{option.label}</option>
    }))


    extra && options.unshift(<option value={extra.label} key={extra.id}>{extra.label}</option>)

    return (
        <>
            {options}
        </>
    )
}
