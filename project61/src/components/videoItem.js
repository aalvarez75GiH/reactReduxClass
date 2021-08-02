import React from 'react'
import { connect } from 'react-redux'

import './styles/videoItem.css'
import { videoSelecting } from '../actions'


const VideoItem = ({ video, videoSelecting }) => {
    return(
        <div className="video-item item"
        onClick={() => videoSelecting(video) }
        >
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
    return {
        term: state.term,
        videos: state.videos,
        videoSelected: state.videoSelected
    }
}
export default connect(mapStateToProps, { videoSelecting })(VideoItem)