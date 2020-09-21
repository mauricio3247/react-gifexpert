import React from 'react'
import PropTypes from 'prop-types'
export const GifGridItemComponent = ({title, url, id}:any) => {
    return (
        <div className="card animate__animated animate__zoomIn">
            <img src={url} alt={title} ></img>
            <p>{title}</p>
        </div>
    )
}

GifGridItemComponent.propTypes = {
    title: PropTypes.string.isRequired, 
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}