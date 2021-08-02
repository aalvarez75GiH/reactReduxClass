import { combineReducers } from "redux"

const reducingTerm = (term = 'nirvana', action) => {
    if (action.type === 'ENTERING_TERM'){
        //return action.payload
        return {
            term: action.payload
        }
            
    }
    return term
}

const reducingVideoData = (videos = [], action) => {
    if (action.type === 'FETCHING_VIDEOS'){
        return action.payload  
    }
    
    return videos

}

const reducingSelection = (selectedVideo = null, action ) => {
    if (action.type === 'SELECTING_VIDEO'){
        return action.payload
    }
    return selectedVideo
}



export default combineReducers(
    {
    term: reducingTerm,
    videos: reducingVideoData,
    videoSelected: reducingSelection
    }
)