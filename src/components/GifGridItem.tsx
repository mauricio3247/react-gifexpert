import React from 'react'

export const GifGridItemComponent = ({title, url, id}:any) => {
    return (
        <div className="card animate__animated animate__zoomIn">
            <img src={url} alt={title} ></img>
            <p>{title}</p>
        </div>
    )
}