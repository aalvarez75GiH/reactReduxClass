import React  from 'react'
import Translate from './translate'
// import Accordion from './accordion'
// import Search from './search'
//import DropDown from './dropdown'

    



const App = () =>  {
    
    return(
        <div>
           <Translate/>

        </div>
    )  
    
}

export default App






//******************************** */ DropDown Widget

//DropDown Widget Options
// const options = [
//     {
//         label: 'Hell Red',
//         value: 'red',
//         id:'001'
//     },
//     {
//         label: 'Peace Green',
//         value: 'green',
//         id:'002'
//     },
//     {
//         label: ' Ocean Blue',
//         value: 'blue',
//         id:'003'
//     }
// ]

//     const [selected, setSelected] = useState(options[0])

{/* <button className="ui button" onClick={()=> setShowDropDown(!showDropDown)}>Click me</button>
    { showDropDown ?
        <DropDown
        options={options}
        selected={ selected }
        onChangeSelected = { setSelected }
        />: null
    } */}

//******************************** */ my Translator Widget
// const onTermSubmit = term => {
//     setTerm(term)
//     console.log(term)
//     console.log('this is term at App: ' + term)
//     console.log(term)
// }
//const [ term, setTerm ] = useState('')
{/* <Translate onSearch={ onTermSubmit }/>
<DropDownT
term={ term } 
/> */}


// Search Widget Options
//  const items = [
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