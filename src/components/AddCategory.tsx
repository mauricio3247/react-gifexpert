import React, { useState } from 'react'
import PropTypes from 'prop-types'
type CategoryProperties = {
    setCategories:  React.Dispatch<React.SetStateAction<string[]>>
}

export const AddCategory = ({setCategories}: CategoryProperties) => {

    const [inputValue, setInputValue] = useState('')
    const handleInput = (e:any) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories((categories)=> [inputValue, ...categories])
            setInputValue('')
        }
        
    }
    return (
        <form onSubmit= {handleSubmit}>
            <input 
            onChange={handleInput} 
            value={inputValue} />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}