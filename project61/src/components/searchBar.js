
import React, { useState } from 'react'
import { connect } from 'react-redux'

const SearchBar = () => {
   
    const [term, setTerm] = useState('')
    
    const onInputChange = (e) => {
        setTerm(e.target.value)
        console.log(term)
    }

    // onFormSubmit = e => {
    //     e.preventDefault()
    //     this.props.onSearch(this.state.term)
    // }
        return (
            <div className="search-bar ui segment">
                <form 
                className="ui form" 
                action=""
                // onSubmit={(e) => this.onFormSubmit(e) }
                >
                    <div className="field">
                        <label> Video Search </label>
                        <input 
                        onChange={ (e) => onInputChange(e) } 
                        type="text"
                        value={ term }
                        />
                        <i className="search icon"></i>
                    </div>
                </form>
                
            </div>
        )
    
}

const mapStateToProps = (state) => {
    console.log(state)
    return{
        term: state.term
    }
}

export default connect(mapStateToProps)(SearchBar)