import React from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'
import flv from 'flv.js'

 
class StreamShow extends React.Component {

    constructor(props){
        super(props)
        
        this.videoRef = React.createRef()
    }
    
    componentDidMount(){ 
        this.props.fetchStream(this.props.match.params.id)
        console.log('1st player construction')
        this.buildPlayer()
        
    }

    componentDidUpdate(){
        console.log('2nd player construction')
        this.buildPlayer()
    }

    componentWillUnmount(){
        this.flvPlayer.destroy()
    }

    buildPlayer = () => {
        if (this.flvPlayer || !this.props.stream) {
            return
        }

        this.flvPlayer = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${this.props.match.params.id}.flv`
        })
        this.flvPlayer.attachMediaElement(this.videoRef.current)
        this.flvPlayer.load()
        // this.flvPlayer.play() 
    }

    render(){
        if (!this.props.stream){
            return <div>Loading...</div>
        }
        const { title, description } = this.props.stream
        
        return (
            <div>
                
                <video
                style={{width: '100%'}}
                controls = {true} 
                ref={this.videoRef}/>
                <h1>{ title }</h1>
                <h5>{ description }</h5>
            </div>            
            
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream }) (StreamShow)