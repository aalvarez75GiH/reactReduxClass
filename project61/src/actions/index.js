export const termSelected = (term) => {
    //returning the action
    return{
        type: 'ENTERING_TERM',
        payload: term 
    }
}

