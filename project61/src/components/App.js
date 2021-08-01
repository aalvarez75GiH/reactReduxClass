import React from 'react'
import SearchBar from './searchBar'
import VideoList from './videoList'
import VideoItem from './videoItem'

const App = () => {
    return(
        <div>
            {/* <h1>I am App...</h1> */}
            <SearchBar/>
            <VideoList/>
            <VideoItem/>
        </div>
        
        )
}

export default App

