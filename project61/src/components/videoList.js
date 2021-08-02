import React from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import youTube from '../api/youtube'
import { videosFetching } from '../actions'
import store from './store'
import VideoItem from './videoItem'

const VideoList = (props) => {

    useEffect(()=> {
        const searchOnYouTube = async () => {
            const response = await youTube.get('/search', {
                params: { q: props.term }
            })
            store.dispatch(videosFetching(response.data.items))
            
            //setData(response.data.items)
            //console.log(data)    
    }
    searchOnYouTube()

    },[ props.term ])

    const renderVideos = props.videos.map((video) => {
        return(
            <VideoItem key={video.id.videoId} video = { video } />
        )
    }) 
    
    return(
       <div className="ui relaxed divided list">
           { renderVideos }
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
export default connect(mapStateToProps,  {videosFetching})(VideoList)

