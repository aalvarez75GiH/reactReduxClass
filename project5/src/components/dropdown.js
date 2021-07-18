import React, { useState } from 'react'

const DropDown = ({ options, selected, onSelectedChange  }) => {

 const [ active, setActive ] = useState(false)


    const renderingOptions = options.map((x)=> {
        // if (x.value === selected.value){
        //     return null
        // }
        return (
            <div 
            key={x.id} 
            className="item"
            onClick={()=> onSelectedChange(x)}
            >
                {x.label}
            </div>
            
        )
    })
    
    return(
    <div className="ui form">
        <div className="field">
            <label className="label">Select a Color: </label>
            <div 
                onClick={()=> setActive(!active) } 
                className={`ui selection dropdown ${ active ? 'visible active' : ''}`}
            >
                <i className="dropdown icon"></i>
                <div className="text">{selected.label}</div>
                <div className={`menu ${active ? 'visible transition' : ''}`}>
                    {renderingOptions}
                </div>
                    
            </div>
        </div>
    </div>
    ) 
}

export default DropDown

// visible active
// 