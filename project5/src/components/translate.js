import React, {useState} from "react"
import DropDown from "../components/dropdown"
import Convert from "./convert"

const options = [
    {
        label: 'Afrikaans',
        value: 'af',
        id:'001'
    },
    {
        label: 'Arabic',
        value: 'ar',
        id:'002'
    },
    {
        label: ' Hindi',
        value: 'hi',
        id:'003'
    },
    {
        label: ' Spanish',
        value: 'es',
        id:'004'
    }

]

const Translate = ({ onSearch }) => {
    
    const [language, setLanguage] = useState(options[0])
    const [term, setTerm] = useState('')
    
    return (
        <div>
            <div className="ui form">
                <div className="field">
                <label>Enter text:</label>
                    <input 
                    type="text" 
                    value={term}
                    onChange={(e)=> {
                        setTerm(e.target.value)
                        console.log(e.target.value)
                    }}
                    />
                </div>
                
            </div>
            
            <DropDown
            label="Select Language"
            options={options}
            selected={ language }
            onChangeSelected = { setLanguage }
            />
            <hr/>
            <h1 className="ui header">Output:</h1>
            <Convert
            selected={ language }
            term = { term }
            />
        </div>
    )

    
}
export default Translate


// My Translate.js **************************************************
// import React, {useState} from "react"

// const Translate = ({ onSearch }) => {

//     const [term , setTerm] = useState('')
    
//     const onInputChange = (e) => {
//         setTerm(e.target.value)
//         console.log(term)
//     }

//     const onFormSubmit = e => {
//         e.preventDefault()
//         onSearch(term)
//     }

//         return (
//             <div className="search-bar ui segment">
//                 <form 
//                 className="ui form" 
//                 action=""
//                 onSubmit={(e) => onFormSubmit(e) }
//                 >
//                     <div className="field">
//                         <label> What do you want to translate? </label>
//                         <input 
//                         onChange={ (e) => onInputChange(e) } 
//                         type="text"
//                         value={ term }>
                   
//                     </input>
//                     </div>
//                     <i className="search icon"></i>
//                 </form>
                
//             </div>
//         )
// }

// export default Translate