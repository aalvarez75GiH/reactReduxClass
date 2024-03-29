import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchStreams } from '../../actions'

 
class StreamList extends React.Component {

    componentDidMount(){
        this.props.fetchStreams()

    }

    renderEditDeleteButtons = (stream)=> {
        if (stream.userId === null && this.props.currentUserId === null){
            return null
        }else if (stream.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} 
                    className="ui button primary"
                    >Edit</Link>
                    
                    
                    <Link
                    to={`/streams/delete/${stream.id}`} 
                    className="ui button negative"
                    >Delete</Link>
                </div>
            )
        }
    }

    renderCreateButton = () => {
        if (this.props.isSignedIn){
            return(
                <div style={{ textAlign: 'right'}}>
                    <Link to="/streams/new" 
                    className="ui button primary"
                    >Create a new Stream</Link>
                </div>
            )
        }
    }

    renderStreams() {
        return this.props.streams.map((stream)=> {
            return (
                <div  className="item" key={stream.id}>
                    {this.renderEditDeleteButtons(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link to={`/streams/${stream.id}`} className="header">
                            {stream.title}
                        </Link>
                    <div className="description">{stream.description}</div>
                    </div>
                </div>

                // <div className="item" key={stream.id}>
                //     {this.renderEditDeleteButtons(stream)}
                //     <i className="large middle aligned icon camera" />
                //     <div className="content">
                //             {stream.title}
                //         <div className="description">{stream.description}</div>
                //     </div>
                // </div>               
              
            )
        })
        
    }

    render(){
       return (
            <div>
                 <h2>Streams</h2>
                 <div className="ui celled list">{this.renderStreams()}</div>
                 { this.renderCreateButton() }
             </div>
       ) 
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    } 
}

export default connect(mapStateToProps, { fetchStreams }) (StreamList)