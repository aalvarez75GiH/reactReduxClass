import { useState, useEffect } from "react"
import youTube from "../api/youtube"


const useData = (defaultSearchTerm)=> {
    const [ data, setData ] = useState([])
    
    useEffect(()=> {
        search(defaultSearchTerm)
    },[defaultSearchTerm])

    const search = async term => {
        // console.log(term)
        const response = await youTube.get('/search', {
            params: { q: term }
        })
        
        setData(response.data.items)
        
    }
    return [ data, search ]  

}

export default useData


