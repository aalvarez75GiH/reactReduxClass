import React from 'react'
const Context = React.createContext('english') 

export class LanguageStore extends React.Component {
    
    state = {
        language: 'english',
        color:'blue'
    }

    onLanguageChange = (language, color) => {
        this.setState({ language, color })
    }

    render(){
        return (
        // eslint-disable-next-line no-undef
        <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
            {this.props.children}
        </Context.Provider>
        )
    }
}

export default Context