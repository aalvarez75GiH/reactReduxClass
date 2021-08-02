import React from 'react'
import SearchBar from './searchBar'
import VideoList from './videoList'
import VideoPlayer from './videoPlayer'


const App = () => {
    return (
        <div className="ui container">
            <SearchBar />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                     <VideoPlayer/>
                    </div>
                    <div className="five wide column">
                        <VideoList/>    
                    </div>
                </div>
            </div>                
        </div>
    )
}

export default App

