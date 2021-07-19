import React, { useState, useEffect, useRef } from 'react'

const DropDown = ({ options, selected, onSelectedChange  }) => {

 const [ active, setActive ] = useState(false)
 const ref = useRef()
 

useEffect(() => {
    console.log(active)
    const onBodyClick = (e) => {
        if (ref.current.contains(e.target)){
            return
        }
        setActive(false)
    }
    
    document.body.addEventListener("click", onBodyClick, { capture: true })
    
    return () => {
        document.body.removeEventListener("click", onBodyClick, { 
            capture: true 
        })
    }   

}, [])

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
    
    console.log(ref.current)
    return(
    <div ref={ref} className="ui form">
        <div className="field">
            <label className="label">Select a Color: </label>
            <div 
                onClick={()=> setActive(!active)} 
                className={`ui selection dropdown ${ active ? 'visible active' : ''}`}
            >
                <i className="dropdown icon"></i>
                <div className="text">{selected.label}</div>
                <div className={`menu ${active ? 'visible transition' : ''}`}>
                    {renderingOptions}
                </div>
                    
            </div>
        </div>
        <div>
            <h1 style={{color:`${selected.value}`}}>
                    this is the color
            </h1>
            
        </div>
    </div>
    ) 
}

export default DropDown

