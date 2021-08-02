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

// const reducingVideoData = (videos = [], action) => {
//     if (action.type === 'FETCHING_VIDEOS'){
//      return {
//             videos: action.payload
//         }
//     }
    
//     return videos

// }

export default combineReducers(
    {
    term: reducingTerm,
    videos: reducingVideoData
    }
)