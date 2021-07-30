// action creator
export const selectSong = (song) => {
    //returning the action
    return{
        type: 'SONG_SELECTED',
        payload: song 
    }
}
