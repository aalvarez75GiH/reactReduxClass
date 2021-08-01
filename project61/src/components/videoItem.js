import React from 'react'
import { connect } from 'react-redux'

const VideoItem = (props) => {
    return(
        <h1>{props.term}</h1>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        term: state.term
    }
}
export default connect(mapStateToProps)(VideoItem)