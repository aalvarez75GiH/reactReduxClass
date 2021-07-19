import React, { useState } from 'react'
// import Accordion from './accordion'
// import Search from './search'
import DropDown from './dropdown'
// const items = [
//     {
//         title: 'Question 1',
//         content: 'Answer 1 '
//     },
//     {
//         title: 'Question 2',
//         content: 'Answer 2'
//     },
//     {
//         title: 'Question 3',
//         content: 'Answer 3'
//     }
// ]
    
const options = [
    {
        label: 'Hell Red',
        value: 'red',
        id:'001'
    },
    {
        label: 'Peace Green',
        value: 'green',
        id:'002'
    },
    {
        label: ' Ocean Blue',
        value: 'blue',
        id:'003'
    }
]


const App = () =>  {
 
    // const [selected, setSelected] = useState(options[0])
    const [showDropDown,setShowDropDown] = useState(true)
    const [selected, setSelected] = useState(options[0])

    return(
        <div>
            <button className="ui button" onClick={()=> setShowDropDown(!showDropDown)}>Click me</button>
        { showDropDown ?
            <DropDown
            options={options}
            selected={ selected }
            onChangeSelected = { setSelected }
            />: null
        }
        </div>
    )  
    
}

export default App