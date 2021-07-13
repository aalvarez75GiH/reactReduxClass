import React from 'react'
import './global.css'




const LoadingPage = (props) => {
    return(
    <div class="ui active dimmer">
        <div class="ui text loader">{props.message}</div>
    </div>
)

}

LoadingPage.defaultProps = {
    message: 'Loading...'
}

export default LoadingPage
