const selectVideo = (term = 'nirvana', action) => {
    if (action.type === 'ENTERING_TERM'){
        return action.payload
    }
    return term
}

export default selectVideo