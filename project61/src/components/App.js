import React from 'react'
import SearchBar from './searchBar'
import VideoList from './videoList'
import VideoItem from './videoItem'

const App = () => {
    return (
        <div className="ui container">
            <SearchBar />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        {/* <VideoItem video={ this.state.selectedVideo }/> */}
                        {/* <VideoDetail video={ this.state.selectedVideo }/> */}
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

