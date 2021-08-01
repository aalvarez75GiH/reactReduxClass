import { combineReducers } from "redux"


const songsReducer = () => {
    return[
            {
                title: 'Comfortably Numb',
                artist: 'Pink floyd',
                length:'8:00 min',
                id:'001',
                favorite:''
            },
            {
                title: 'Exit Music',
                artist: 'Radiohead',
                length:'5:30 min',
                id:'002',
                favorite:''
            },
            {
                title: 'Basket Case',
                artist: 'GreenDay',
                length:'3:46 min',
                id:'003',
                favorite:''
            },
            {
                title: 'hey jude',
                artist: 'The Beatles',
                length:'5:34 min',
                id:'004',
                favorite:'this one'
            } 
        ]
        
}

// const defaultSelectedSong = {
//     title: 'Imagine',
//     artist: 'Jhon Lenon',
//     length:'5:34 min',
//     id:'005',
//     favorite:''
// }

const selectedSongReducer = (selectedSong = null, action ) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload
    }
    return selectedSong

}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})