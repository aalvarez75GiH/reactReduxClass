import React from 'react'
import { connect } from 'react-redux'
import { editStream, fetchStream } from '../../actions'
 
class StreamEdit extends React.Component {

    componentDidMount(){
         this.props.fetchStream(this.props.match.params.id)
    }

    render(){
        console.log(this.props)
        // return <div>{this.props.stream.title}</div>
        if (!this.props.stream){
            return null
        }
        return(
            <div>
                <div>{this.props.stream.title}</div>
                <div>
                    <h2>{this.props.stream.description}</h2>
                    
                </div>
            </div>
            
        )
    } 
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    return {
        stream: state.streams[ownProps.match.params.id] 
    }
    
}    


export default connect(mapStateToProps, { editStream, fetchStream })(StreamEdit)