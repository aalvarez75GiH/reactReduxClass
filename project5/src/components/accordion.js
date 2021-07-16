import React, { useState } from 'react'

const Accordion = ({ items }) => {
    
    const [ activeIndex, setActiveIndex ] = useState(null)

    const onTitleClick = (index) => {
        console.log('title has been clicked', index)
        setActiveIndex(index) //here, we are declaring 'activeIndex = index' using
                                //setActiveIndex as the setter 
    }
    
    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : ''
     
        return (
            <React.Fragment key={item.title}>
                <div className={`title ${active}`}
                onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                    
                </div>
                    
            </React.Fragment>
            
        ) 
    })
    
    return (
        <div>
            <div className="ui styled accordion">{renderedItems}</div>
            <h1>{activeIndex}</h1>
        </div>
        
            
    )
}


// ************************ With Class Component *******************************************************
// class Accordion extends React.Component {
//     state = {
//         activeIndex: 0
//     }

//     onTitleClick = (index) => {
//         console.log('title has been clicked', index)
//         this.setState({activeIndex: index})
//         console.log(this.state)
//     }

//     renderedItems(){
//         return this.props.items.map((item, index) => {
//             return (
//                 <React.Fragment key={item.title}>
//                     <div className="title active"
//                     onClick={() => this.onTitleClick(index)}
//                     >
//                         <i className="dropdown icon"></i>
//                         {item.title}
//                     </div>
//                     <div className="content active">
//                         <p>{item.content}</p>
//                     </div>
//                 </React.Fragment>
//             ) 
//         })
//     } 

//     render(){
//         return(
//             <div className="ui styled accordion">{this.renderedItems()}
//                 <h1>{this.state.activeIndex}</h1>
//             </div>
//         )     
//     }
// }

export default Accordion


