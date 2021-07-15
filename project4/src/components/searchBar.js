import React, { Component } from 'react'

class SearchBar extends Component {
    state = {
        term:''
    }
    
    onInputChange = (e) => {
        this.setState({ term: e.target.value })
        console.log(this.state.term)
    }

    onFormSubmit = e => {
        e.preventDefault()
        this.props.onSearch(this.state.term)
    }

    
    render() {
        return (
            <div className="search-bar ui segment">
                <form 
                className="ui form" 
                action=""
                onSubmit={(e) => this.onFormSubmit(e) }
                >
                    <div className="field">
                        <label> Video Search </label>
                        <input 
                        onChange={ (e) => this.onInputChange(e) } 
                        type="text"
                        value={ this.state.term }
                        />
                        <i className="search icon"></i>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default SearchBar