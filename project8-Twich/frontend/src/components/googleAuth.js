import React from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'

class GoogleAuth extends React.Component {

   

    componentDidMount(){
        window.gapi.load('auth2', () => {
            window.gapi.auth2.init({
                client_id: '893855487421-l0l6ejqncjds8145a9icsgurvsuhv37o.apps.googleusercontent.com',
                scope:'email'
            }).then(()=> {
                this.googleAuth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.googleAuth.isSignedIn.get())
                // const googleUserId = this.googleAuth.currentUser.get().getId()
                // console.log(googleUserId)
                this.googleAuth.isSignedIn.listen(this.onAuthChange)
                console.log(this.props.isSignedIn)
            })
        })

    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {    
            this.props.signIn(this.googleAuth.currentUser.get().getId())
        }else{
            this.props.signOut()
        }
        // this.setState({ isSignedIn: this.googleAuth.isSignedIn.get() })    
    }

    onSignOutClick = () => {
        this.googleAuth.signOut()
    } 
    
    onSignInClick = () => {
        this.googleAuth.signIn()
    } 

    renderAuthButton() {
        if (this.props.isSignedIn === null){            
            return null

        }else if (this.props.isSignedIn){
            return (
                <button className="ui red google button" onClick={this.onSignOutClick}>
                    <i className="google icon"></i>
                    Sign Out
                </button>
            ) 
        }else {
            return <button className="ui green google button" onClick={this.onSignInClick}>
            <i className="google icon"></i>
            Sign In with Google
            </button>
        }
    }

    render () {
        return <div>{ this.renderAuthButton() }</div>
    }

}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        isSignedIn: state.auth.isSignedIn,
    }
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth)