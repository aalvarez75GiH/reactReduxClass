import React from 'react'
import { connect } from 'react-redux'

import './styles/videoItem.css'
import { videoSelecting } from '../actions'
import store from './store'

const VideoItem = (props) => {
    return(
        <div className="video-item item"
        onClick={() => props.videoSelecting(props.video) }
        //onClick={store.dispatch(videoSelecting(video))}
        >
        <img className="ui image" 
            src={props.video.snippet.thumbnails.medium.url} 
            alt={props.video.snippet.title}/>
        <div className="content">
            <div className="header test">{props.video.snippet.title}</div>
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