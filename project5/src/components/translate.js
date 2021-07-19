import React, {useState} from "react"

const Translate = ({ onSearch }) => {

    const [term , setTerm] = useState('')
    
    const onInputChange = (e) => {
        setTerm(e.target.value)
        console.log(term)
    }

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
                >
                    <div className="field">
                        <label> What do you want to translate? </label>
                        <input 
                        onChange={ (e) => onInputChange(e) } 
                        type="text"
                        value={ term }>
                   
                    </input>
                    </div>
                    <i className="search icon"></i>
                </form>
                
            </div>
        )
}

export default Translate