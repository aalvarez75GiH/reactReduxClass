import React from 'react';

class Validator extends React.Component {
        
        state = { 
            password: '' 
        }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Enter Password</label>
                        <input 
                            type="password"
                            onChange={(e) => this.setState({ password: e.target.value})}
                            value={this.state.password}
                        />
                    </div>
                    {this.state.password.length < 4 ? 'Password must be at least 4 characters' : ''}
                </form>
            </div>
        );
    }
}

export default Validator


const users = [
    { id: 1, name: 'Leanne Graham' },
    { id: 2, name: 'Ervin Howell' },
    { id: 3, name: 'Clementine Bauch' },
    { id: 4, name: 'Patricia Lebsack' }
  ];


class App extends React.Component {
    
 
    onSearchNames(){
        return (
            users.map(({id,name}) => {
                return <li key={id}>{name}</li>
            })     
        )
    }

    render(){
        return (
            <ul>
                {this.onSearchNames()}
            </ul>
       
        ) 
    }
}
        
