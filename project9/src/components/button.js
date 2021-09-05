import React from 'react'
import LanguageContext from '../context/languageContext'

class Button extends React.Component {

    renderText = (language) => {
        return language === 'english' ? 'Submit' : 'Voorleggen' 
    }

    renderButton = (color) => {
        return(
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    { ({ language }) => this.renderText(language)}
                </LanguageContext.Consumer>
            </button>
        )
    }
    
    render(){ 
        return (
                <LanguageContext.Consumer>
                    {({ color }) => this.renderButton(color)}
                </LanguageContext.Consumer>
        ) 
        
        // {(color) => this.renderButton(color)}

    }
    
}

export default Button

// ************** with 'this.context' ***********************
// class Button extends React.Component {

//     static contextType = LanguageContext

//     render(){
//         console.log(this.context)
//         const text = this.context.language === 'english' ? 'Submit' : 'Voorleggen' 
//         return (
            
//                 <button className="ui button primary">
//                     { text }                    
//                 </button>        
              
//         ) 
//     }
    
// }

// export default Button