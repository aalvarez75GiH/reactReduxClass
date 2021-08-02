import React from 'react'
import { connect } from 'react-redux'

import './styles/videoItem.css'

const VideoItem = ({ video }) => {
    return(
        <div className="video-item item">
            {/* onClick={() => onVideoSelect(video) }  */}
            <img className="ui image" 
                src={video.snippet.thumbnails.medium.url} 
                alt={video.snippet.title}/>
            <div className="content">
                <div className="header test">{video.snippet.title}</div>
            </div>
            
        </div>
        
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        term: state.term,
        videos: state.videos
    }
}
export default connect(mapStateToProps)(VideoItem)