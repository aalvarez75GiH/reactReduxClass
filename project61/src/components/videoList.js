import React from 'react'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import youTube from '../api/youtube'

const VideoList = (props) => {

    const [data, setData] = useState([])

    //********************************************************* */
    useEffect(()=> {
        const searchOnWiki = async () => {
            const response = await youTube.get('/search', {
                params: { q: props.term }
            })
        setData(response.data.items)
        console.log(response.data.items)
    }
    searchOnWiki()
    },[props.term])
        
    return(
        <h1>{props.term}</h1>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        term: state.term
    }
}
export default connect(mapStateToProps)(VideoList)
