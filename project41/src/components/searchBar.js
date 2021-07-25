import React, { useState } from 'react'

const SearchBar = ( {onSearch }) => {
    const [ term, setTerm ] = useState('') 
    


    const onFormSubmit = e => {
        e.preventDefault()
        onSearch(term)
    }

        return (
            <div className="search-bar ui segment">
                <form 
                className="ui form" 
                action=""
                onSubmit={(e) => onFormSubmit(e) }
                //onFormSubmit(e) }
                >
                    <div className="field">
                        <label> Video Search </label>
                        <input 
                        onChange={(e) => setTerm(e.target.value)} 
                        type="text"
                        value={ term }
                        />
                        <i className="search icon"></i>
                    </div>
                </form>
                
            </div>
        )
    
}

export default SearchBar