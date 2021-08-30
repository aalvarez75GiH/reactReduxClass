import React from 'react'
import { connect } from 'react-redux'
import { editStream, fetchStream } from '../../actions'
import StreamForm from './streamForm'
import _ from 'lodash' 
class StreamEdit extends React.Component {

    componentDidMount(){
         this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        console.log(formValues)
        this.props.editStream(this.props.stream.id, formValues)
    }
    render(){
        // console.log(this.props)
        if (!this.props.stream){
            return <div>Loading...</div>
        }
        return(
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm
                // initialValues= {{
                //     title: this.props.stream.title,
                //     description: this.props.stream.description 
                // }}
                initialValues = {_.pick(this.props.stream,'title', 'description')} 
                onSubmit={this.onSubmit}/>
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