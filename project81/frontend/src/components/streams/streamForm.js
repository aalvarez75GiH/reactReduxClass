import React from 'react'
import { Field, reduxForm } from 'redux-form'


class StreamForm extends React.Component {

    renderError = ( { error, touched } ) => {
        if ( touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{ error }</div>
                </div>
            )
        }
    }
 
    renderInput = ({ input, label, meta }) => {
       
        // console.log(meta)
        // console.log(input)
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={ className }>
                <label> {label}  </label>
                <input {...input} autoComplete="off"/>
       
            </div>
            
        ) 
            
    }

    onSubmit = (formValues)=> {
        this.props.onSubmit(formValues)
    }
 
    render(){
        console.log(this.props)
        return(
            <form 
            onSubmit={this.props.handleSubmit(this.onSubmit)} 
            className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description"/>
                <button className="ui button primary">Accept</button>
            </form>
        ) 
    }
    
}

const validate = (formValues) => {
    const errors = {}
    // console.log(formValues)
    if (!formValues.title){
        errors.title = 'You must Enter a valid Title'
    }
    if (!formValues.description){
        errors.description = 'You must Enter a valid Description'
    }
    // console.log(errors)
    return errors
}

export default reduxForm({
    form: 'streamForm',
    validate: validate
}) (StreamForm)
