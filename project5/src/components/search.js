import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import wikipedia from '../apis/wikipedia' 
// import SearchBar from './searchBar'


const Search = () => {

    const [ term, setTerm ] = useState('IBM')
    const [debouncedTerm, setDebouncedTerm] = useState(term)
    const [results, setResults] = useState([])
    
    
    useEffect(()=> {
        const timerID = setTimeout(()=>{
            setDebouncedTerm(term)
            console.log(debouncedTerm)
        },500)
        return ()=>{
            clearTimeout(timerID)
        }
    },[term])

    
    useEffect(()=> {
        const searchOnWiki = async () => {
            const data = await axios.get('https://en.wikipedia.org/w/api.php?', {
            params: {
                action: 'query',
                list:'search',
                origin: '*',
                format:'json',
                srsearch: debouncedTerm,
            }                      
        })
        setResults(data.data.query.search)
        console.log(results)
    }
        if (debouncedTerm){
            searchOnWiki()
        }
    },[debouncedTerm])

    const renderingList  = results.map((item) => {
        return (
            <div key={item.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${item.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        <h3>{item.title}</h3>
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
                    
                </div>
            </div>
        ) 
        
    })
 

    return (
        <div>
            <div className="ui form"> 
                <div className="field">
                    <label> Search on Wikipedia </label>
                    <input
                        value={ term } 
                        onChange={ (e) => setTerm(e.target.value)}
                        className="input"
                        />
                </div>
            </div>
            <div className="ui celled list">
                {renderingList}
            </div>
        </div>
    )

}

export default Search


