import React from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'


class SongList extends React.Component {
    
    renderingList() {
        return this.props.songs.map((song)=> {
            return (
                <div className="item" key={song.id}>
                    <div className="right floated content">
                        <button 
                        className="ui button primary"
                        onClick={()=> this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            ) 
        })
    }
    
    render(){
        return(
            <div className="ui divided list">
                {this.renderingList()}
            </div>
        )
    }
}


const mapStateToProp = (state) => {
    console.log(state)
    return {
        songs: state.songs, 
    }
}

export default connect(mapStateToProp, { selectSong })(SongList)

