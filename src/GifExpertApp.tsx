import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGridComponent } from './components/GifGrid';

export const GifExperApp = ()=> {
    
    const [categories, setCategories] = useState<string[]>(['One Punch'])

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