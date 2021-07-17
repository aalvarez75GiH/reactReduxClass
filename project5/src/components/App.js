import React from 'react'
// import Accordion from './accordion'
import Search from './search'

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
    

class App extends React.Component {
    render(){
        return(
            <div>
                <br/>
                {/* <Accordion items={ items }/> */}
               <Search/>
            </div>
        )  
    }
}

export default App