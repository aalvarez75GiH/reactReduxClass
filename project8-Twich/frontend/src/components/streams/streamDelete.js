import React from 'react'
import { deleteStream, fetchStream } from '../../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
 
class StreamDelete extends React.Component {
    
    componentDidMount(){
        this.props.deleteStream(this.props.match.params.id)
    }

    render(){
        return(
            <div>
                <h1>Stream deleted...</h1>
                <div style={{ textAlign: 'right'}}>
                    <Link to="/" 
                    className="ui button primary"
                    >Back to Streams</Link>
                </div>
            </div>
            
        )
    }
    
}


export default connect(null,{ deleteStream }) (StreamDelete)