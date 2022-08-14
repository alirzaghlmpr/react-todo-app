import React from 'react'

export default function Label({ label, handleDelete }) {
    return (
        <div className="btn btn-primary my-2 w-100">
            <p>{label.label}
            </p>
            <span className="badge text-bg-secondary m-1 p-2">
                <i className="bi bi-stickies"></i> {`${label.count} items`}</span>
            <span onClick={() => handleDelete(label)} className="badge text-bg-danger p-2">
                <i className="bi bi-trash3">
                </i> </span>
        </div>)
}
