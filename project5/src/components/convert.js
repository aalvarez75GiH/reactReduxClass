import React, { useState, useEffect } from 'react'
import axios from 'axios'

const KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'

const Convert = ({ selected, term }) => {
    const [ translated, setTranslated ] = useState('')

    useEffect(()=>{ 

        // const pullOutData = async () => {
        //     const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2',
        //     {}, {
        //         params:{
        //             q: term,
        //             target: selected.value,
        //             key: KEY
        //         }
        //     })
        //     setTranslated(data.data.translations[0].translatedText)
        // }

        axios.post('https://translation.googleapis.com/language/translate/v2',
        {}, {
            params:{
                q: term,
                target: selected.value,
                key: KEY
            }
        }).then(data => {
            console.log(data)
            setTranslated(data.data.data.translations[0].translatedText)
        })
        //pullOutData()
        
    },[selected,term])

    
    return(
        <div className="ui header">
            <h1>{ translated }</h1>
            
        </div>
        
    )
}

export default Convert