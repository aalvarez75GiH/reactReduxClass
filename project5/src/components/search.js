import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import wikipedia from '../apis/wikipedia' 
// import SearchBar from './searchBar'


const Search = () => {

    const [ term, setTerm ] = useState('')
    const [results, setResults] = useState([])
    // const [testID, setTestID] = useState(null)
    // const [urlTest,setUrlTest] = useState('')
    
    
    useEffect(() => {
        const searchOnWiki = async () => {
            
            const data = await axios.get('https://en.wikipedia.org/w/api.php?', {
            params: {
                action: 'query',
                list:'search',
                origin: '*',
                format:'json',
                srsearch: term,
            }
        })
        setResults(data.data.query.search)
        console.log(results)
    } 
        
    setTimeout(()=>{
        if (term) {
            searchOnWiki()
        }
    },500)
    },[term])

    // const handleOnClick = (e, pageid)=> {
    //     e.preventDefault()
    //     console.log('you made me clicked...' + pageid )
    //     setTestID(pageid)
    //     setUrlTest(`https://en.wikipedia.org?curid=${testID}`)
         
    // }
    
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