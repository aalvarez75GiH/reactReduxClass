import React, { useState, useEffect, useRef } from 'react'

const options = [
    {
        label: 'English',
        value: 'En',
        id:'001'
    },
    {
        label: 'Spanish',
        value: 'es',
        id:'002'
    },
    {
        label: ' French',
        value: 'fr',
        id:'003'
    }
]

const DropDownT = ({ term }) => {
    
    const [ active, setActive ] = useState(false)
    const [selected, setSelected] = useState(options[0])
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

    
    const translationProcess = (x) => {
        setSelected(x)
        console.log('Target Language: ' + selected.label )
    }
    
    const renderingOptions = options.map((x)=> {
        return (
            <div 
                key={x.id} 
                className="item"
                onClick={()=> { translationProcess(x) }}
            >
                {x.label}
            </div>
            
        )
    })
    
    console.log(ref.current)
    return(
    <div ref={ref} className="ui form">
        <div className="field">
            <label className="label">Select the Color </label>
            
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
            <h1>
                    { selected.label }
            </h1>
            <h1>
                { term }
            </h1>
            
            
        </div>
    </div>
    ) 
}

export default DropDownT
