import React from 'react'
import PropTypes from 'prop-types'
import { GifGridItemComponent } from './GifGridItem'

import { useFetchGifs } from '../hooks/useFetchGifs'

type GifGridProperties = {
    category: string
}

export const GifGridComponent = ({category}: GifGridProperties)=> {
    
    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>
        <div className='card-grid'>
            
            { loading && <p className="animate__animated animate__flash">'Loading...'</p> }

            {
                images.map ( img => (
                    <GifGridItemComponent 
                    {...img}
                    key={img.id} />
                ))
            }
                

        </div>
        </>
    )
}

GifGridComponent.propTypes = {
    category: PropTypes.string.isRequired
}