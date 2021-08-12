import jsonPlaceholder from '../api/jsonPlaceholder'
import _ from 'lodash'


export const fetchPostsAndUsers = () => async (dispatch, getState) => {
   await dispatch(fetchPosts())

   _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id =>  dispatch(fetchUser(id)))
        .value()
}


//this is a middleware action creator very refactored
export const fetchPosts = () =>  async dispatch => {
        const response = await jsonPlaceholder.get('/posts')
        dispatch({ type: 'FETCH_POSTS', payload: response.data })
}

// *********** FetchUser No refactored/Not memoized *************************
export const fetchUser = (id) => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get(`/users/${id}`)
        dispatch({
            type: 'FETCH_USER',
            payload: response.data
        })     
    }             
}



// ****************** Refactored version of fetchUser *********************
// export const fetchUser = (id) => dispatch => _fetchUser(id, dispatch)
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`)
//     dispatch({ type: 'FETCH_USER', payload: response.data })
// })


// *********** FetchUser No refactored/ Memoized *************************
// export const fetchUser = (id) => {
//     return (dispatch) => {
//         _fetchUser(id, dispatch)   
//     }             
// }

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`)
//         dispatch({
//             type: 'FETCH_USER',
//             payload: response.data
//         })
// })