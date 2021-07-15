import React from 'react'
import './styles/videoItem.css'
import VideoDetail from './videoDetail'

const VideoItem = ({ video, onVideoSelect }) => {
    
    // const myOnVideoSelect = (video) => {
    //     console.log('from my Own VideoItem', video)
    //     return <VideoDetail video={ video }/>
    // }


    return (
        
            <div className="video-item item"
            onClick={() => onVideoSelect(video) }> 
            {/* // onClick={() => {
            //     console.log(video)
            //     myOnVideoSelect(video)
            // }}> */}
                <img className="ui image" 
                    src={video.snippet.thumbnails.medium.url} 
                    alt={video.snippet.title}/>
                <div className="content">
                    <div className="header test">{video.snippet.title}</div>
                </div>
                
            </div>
    ) 
}

export default VideoItem