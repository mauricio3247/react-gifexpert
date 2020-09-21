import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGridComponent } from './components/GifGrid';

type GifExperProps= {
    defaultCategories?: string[]
}

export const GifExperApp = ({defaultCategories = [] }: GifExperProps )=> {
    
    const [categories, setCategories] = useState<string[]>(defaultCategories)

    return (
        <>
            <h1>GifExpertApp</h1>
            <hr/>

            <AddCategory setCategories = {setCategories} />
            <ol>
                { 
                categories.map ((item) => (
                    <GifGridComponent category={item} key={item}></GifGridComponent>
                ))
                }
            </ol>
        </>
    )
}