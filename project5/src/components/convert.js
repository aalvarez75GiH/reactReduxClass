import React, { useState, useEffect } from 'react'
import axios from 'axios'

 const KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
//const KEY = 'AIzaSyDjKBTcya9MeCu6saFcVCAnaX1ZbJ71Dno'


const Convert = ({ selected, term }) => {
    const [ translated, setTranslated ] = useState('')
    const [debouncedTerm, setDebouncedTerm] = useState(term)
    
    
    useEffect(()=> {
     const timerID = setTimeout(()=> {
        console.log(debouncedTerm) 
        setDebouncedTerm(term)
     },500)
     return ()=> {
         clearTimeout(timerID)
     }   
    },[term])

    useEffect(()=>{ 

        const pullOutData = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2',
            {}, {
                params:{
                    q: debouncedTerm,
                    target: selected.value,
                    key: KEY
                }
            })
            console.log(data)
            setTranslated(data.data.translations[0].translatedText)
        }
        pullOutData()
        
    },[selected,debouncedTerm])

    return(
        <div className="ui header">
            <h1>{ translated }</h1>
            
        </div>
        
    )
}

export default Convert