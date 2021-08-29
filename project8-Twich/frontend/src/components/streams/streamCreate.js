import React from 'react'
import { createStream } from '../../actions'
import { connect } from 'react-redux'
import StreamForm from './streamForm' 
class StreamCreate extends React.Component {

 
    onSubmit = (formValues)=> {
        this.props.createStream(formValues)
    }
 
    render(){
        console.log(this.props)
        return(
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit}/>
            </div>
            
        ) 
    }
    
}



export default connect(null, { createStream })(StreamCreate)


// *****************************************************************

// class StreamCreate extends React.Component {

//     renderError = ( { error, touched } ) => {
//         if ( touched && error){
//             return (
//                 <div className="ui error message">
//                     <div className="header">{ error }</div>
//                 </div>
//             )
//         }
//     }
 
//     renderInput = ({ input, label, meta }) => {
       
//         console.log(meta)
//         const className = `field ${meta.error && meta.touched ? 'error' : ''}`
//         return (
//             <div className={ className }>
//                 <label> {label}  </label>
//                 <input {...input} autoComplete="off"/>
       
//             </div>
            
//         ) 
            
//     }

//     onSubmit = (formValues)=> {
//         this.props.createStream(formValues)
//     }
 
//     render(){
//         console.log(this.props)
//         return(
//             <form 
//             onSubmit={this.props.handleSubmit(this.onSubmit)} 
//             className="ui form error">
//                 <Field name="title" component={this.renderInput} label="Enter Title" />
//                 <Field name="description" component={this.renderInput} label="Enter Description"/>
//                 <button className="ui button primary">Accept</button>
//             </form>
//         ) 
//     }
    
// }

// const validate = (formValues) => {
//     const errors = {}
//     console.log(formValues)
//     if (!formValues.title){
//         errors.title = 'You must Enter a valid Title'
//     }
//     if (!formValues.description){
//         errors.description = 'You must Enter a valid Description'
//     }
//     console.log(errors)
//     return errors
// }

// const formWrapped = reduxForm({
//     form: 'streamForm',
//     validate: validate
// }) (StreamCreate)

// export default connect(null, { createStream })(formWrapped)