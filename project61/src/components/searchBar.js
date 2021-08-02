import React, { useState } from 'react'
import { connect } from 'react-redux'

import  { termSelected }  from '../actions' 

const SearchBar = (props) => {
   
    const [text, setText] = useState('')
    
    const onInputChange = (e) => {
        setText(e.target.value)
        console.log(text)
    }

    const onFormSubmit = e => {
        e.preventDefault()
        props.termSelected(text)
    }
        return (
            <div className="search-bar ui segment">
                <form 
                className="ui form" 
                action=""
                onSubmit={(e) => onFormSubmit(e) }
                >
                    <div className="field">
                        <label> Video Search </label>
                        <input 
                        onChange={ (e) => onInputChange(e) } 
                        type="text"
                        value={ text }
                        />
                        <i className="search icon"></i>
                    </div>
                </form>
                
            </div>
        )
    
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        term: state.term,
        videos: state.videos
    }
}


export default connect(mapStateToProps, { termSelected })(SearchBar)