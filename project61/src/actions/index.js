export const termSelected = (term) => {
    //returning the action
    return{
        type: 'ENTERING_TERM',
        payload: term 
    }
}

export const videosFetching = (videos) => {
    console.log(videos)
    //returning the action
    return{
        type: 'FETCHING_VIDEOS',
        payload: videos 
    }
}
