import React, { useState, useEffect } from 'react'
import SearchBar from './searchBar'
import VideoList from './videoList'
import VideoDetail from './videoDetail'
import useData from '../hooks/useData'

const App = () => {
    
    const [selectedVideo,setSelectedVideo] = useState(null)
    const [ data, search ] = useData('Real Madrid') 

    useEffect(()=> {
        setSelectedVideo(data[0])
    },[data])
    
        
    return (
        
       <div className="ui container">
           <SearchBar onSearch={ search } />
           <div className="ui grid">
               <div className="ui row">
                   <div className="eleven wide column">
                       {/* <VideoItem video={ this.state.selectedVideo }/> */}
                       <VideoDetail video={ selectedVideo }/>
                   </div>
                   <div className="five wide column">
                       <VideoList 
                       data={data} 
                       onVideoSelect = {(video)=> setSelectedVideo(video)}
                        />    
                   </div>
               </div>
           </div>                
       </div>
    )
   

}

export default App