import React from 'react'
import { connect } from 'react-redux'

const VideoPlayer = ({ videoSelected }) => {
    const videoSrc = `http://www.youtube.com/embed/${videoSelected.id.videoId}`
    return(
        <div>
            <div ui embed>
               <iframe width="100%" height="400" src={videoSrc} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
            </div>
            
            <div className="ui segment">
                <h4 className="ui header">{videoSelected.snippet.title}</h4>
                <p>{videoSelected.snippet.description}</p>
            </div>
        </div>
    )



}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        videoSelected: state.videoSelected
    }
}

export default connect(mapStateToProps)(VideoPlayer)