import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { fetchUser } from '../actions'

class UserHeader extends Component {

    // componentDidMount() {
    //     this.props.fetchUser(this.props.userId)
    // }
    
    render() {
  
         const user = this.props.users.find((user) => user.id === this.props.userId) 
        //const { user } = this.props
         if (!user) {
             return <div>Loading...</div>
         }

        return(
             <div className="header">{user.name}</div>
            // <div>{user}</div>
        )
    }

}

const mapStateToProps = (state) => {
    console.log(state.users)
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(UserHeader)

