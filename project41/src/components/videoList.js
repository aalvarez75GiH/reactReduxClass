import React from 'react'
import VideoItem from './videoItem'

const VideoList = ({ data, onVideoSelect }) => {
    
    const video = data.map((video) => {
       return(
            <VideoItem 
            key={video.id.videoId} 
            onVideoSelect={ onVideoSelect } 
            video = { video } />
       ) 
    })

    return(
        <div className="ui relaxed divided list">
            { video }
        </div>
    ) 
}

export default VideoList