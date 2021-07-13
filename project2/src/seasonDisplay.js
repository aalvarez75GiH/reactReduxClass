import React from 'react'
import './seasonDisplay.css'


const seasonConfig = {
    summer: {
        text:'Lets hit the Lake...',
        icon:'sun'
    },
    winter: {
        text:'its chiiiiling',
        icon:'snowflake'
    }
}


const getSeason = (lat,month) =>{
    if(month > 2  && month < 9 ){
        return lat > 0 ? 'summer' : 'winter'

    }else{
        return lat < 0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = (props) => {
    console.log(props.lat)
    const season = getSeason(props.lat, new Date().getMonth())
    const { text, icon } = seasonConfig[ season ]

    return  <div className={`season-display ${season}`}>
                <i className={`${icon} icon-left massive icon`}></i> 
                    <h1>{ text }</h1>
                <i className={`${icon} icon-right massive icon`}></i>
            </div>
}

export default SeasonDisplay