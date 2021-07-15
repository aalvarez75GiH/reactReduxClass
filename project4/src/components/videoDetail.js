import React from 'react'

const VideoDetail = ({ video }) => {
    if (!video){
        return <div>Loading...</div>
    }
    const videoSrc = `http://www.youtube.com/embed/${video.id.videoId}`
    return(
        <div>
            <div ui embed>
               <iframe width="100%" height="400" src={videoSrc} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
            </div>
            
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
} 

export default VideoDetail