import React, { useState }  from 'react'
//import React from 'react'
import Translate from './translate'
import Accordion from './accordion'
import Search from './search'
import DropDown from './dropdown'
import Route from './route'
import Header from './header'


 const items = [
    {
        title: 'Question 1',
        content: 'Answer 1 '
    },
    {
        title: 'Question 2',
        content: 'Answer 2'
    },
    {
        title: 'Question 3',
        content: 'Answer 3'
    }
]

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

    const [selected, setSelected] = useState(options[0])
    //const [defaultRoute, setDefaultRoute] = useState('/search')
     
        return(
         <div>
            <Header />
            <Route path="/">
                <Accordion items = {items}/>
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
            <Route path="/dropdown">
                 <DropDown 
                 label = 'Select a Color'  
                 options= { options }
                 selected = { selected }
                 onChangeSelected = { setSelected }
                />
            </Route>
            <Route path="/search"> 
                <Search />
            </Route>
        </div>
    )  
     
}

 export default App

