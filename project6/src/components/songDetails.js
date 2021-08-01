import React from 'react'
import { connect } from 'react-redux'

const SongDetails = ({ song }) => {
    if (!song) {
        return <div>Select a Song</div>
    }
    return (
        <div>
            <h3>Details For:</h3>
            <p>
                Tittle {song.title} <br/>
                Duration: {song.length}
            </p>
            
           
        </div>
    )
}

const mapStateToProp = (state) => {
    console.log(state)
    return {
        song: state.selectedSong, 
    }
}

export default connect(mapStateToProp)(SongDetails)