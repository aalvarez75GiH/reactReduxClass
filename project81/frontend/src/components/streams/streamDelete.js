import React from 'react'
import { deleteStream, fetchStream } from '../../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from '../modal'
 import history from '../../history'
class StreamDelete extends React.Component {

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }
        
    renderActions = () => {
        const { id } = this.props.match.params
        return (
            <React.Fragment>
                <button
                onClick={ () => {
                    this.props.deleteStream(id) 
                    console.log('stream deleted..')
                }}
                className="ui button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
            
        )
    }
    
renderContent = () => {
    if (!this.props.stream){    
        return 'Are you sure you want to delete this stream?'
    }
    return `Are you sure you want to delete ${this.props.stream.title}?`
}
  
    render(){
         return(
             <Modal 
                texts="Delete Stream"
                content={this.renderContent()} 
                actions={this.renderActions()} 
                onDismiss={()=> history.push('/')}
            />
        )
    }
    
}

const mapStateToProps = (state, ownProps ) => {
    return{
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps,{ fetchStream, deleteStream }) (StreamDelete)
// export default StreamDelete