import React from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'
//import store from './store'

class SongList extends React.Component {
    
    
    renderingList() {
        return this.props.songs.map((song)=> {
            return (
                <div className="item" key={song.id}>
                    <div className="right floated content">
                        <button 
                        className="ui button primary"
                        onClick={()=> this.props.selectSong(song)}
                        // onClick={() => store.dispatch({
                        //     type: 'SONG_SELECTED',
                        //     payload: song    
                        // })} my dispatch
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

// const getMyState = () => {
// const data = store.getState()
// console.log(data)
// return {
//     songs: data.songs
// } my store.getState

    
//}
 export default connect(mapStateToProp, { selectSong })(SongList)
//export default connect(getMyState, { selectSong })(SongList)

