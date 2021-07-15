import React from 'react'
import SearchBar from './searchBar'
import youTube from '../api/youTube'
import VideoList from './videoList'
import VideoDetail from './videoDetail'
import VideoItem from './videoItem'
class App extends React.Component  {
    
    state = {
        data:[],
        selectedVideo: null
    }

    // this is the Deafult term at the moment of the loading 
    componentDidMount(){
        // console.log(this.state.selectedVideo)
        this.onTermSubmit('pink floyd')
    }



    // makes the GET request
    onTermSubmit = async term => {
        // console.log(term)
        const response = await youTube.get('/search', {
            params: { q: term }
        })
        
        
        this.setState({ 
            data: response.data.items,
            selectedVideo: response.data.items[0] 
        })
            console.log(this.state)
    }

    onVideoSelect = (video) => {
        console.log('from the App', video)
        this.setState({ selectedVideo: video})
        console.log(this.state.selectedVideo)
        
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar onSearch={ this.onTermSubmit } />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            {/* <VideoItem video={ this.state.selectedVideo }/> */}
                            <VideoDetail video={ this.state.selectedVideo }/>
                        </div>
                        <div className="five wide column">
                            <VideoList 
                            data={this.state.data} 
                            onVideoSelect={ this.onVideoSelect }/>    
                        </div>
                    </div>
                </div>                
            </div>
        )
    }
}
 
export default App


