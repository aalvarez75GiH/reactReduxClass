import React from 'react'
import LanguageContext from '../context/languageContext'

class LanguageSelector extends React.Component {

    static contextType = LanguageContext
  
    render(){
        console.log(this.context)
        return (
            <div className="ui container">
                <div>
                    Select a language
                    <i
                    onClick={ () => this.context.onLanguageChange('english', 'blue')}
                    className="flag us"/>
                    <i
                    onClick={ () => this.context.onLanguageChange('dutch', 'red')}

                    className="flag nl"/>
                </div>
            </div>
        )
    }
}
export default LanguageSelector

