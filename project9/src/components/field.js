import React from 'react'
import LanguageContext from '../context/languageContext'

class Field extends React.Component {
    
   renderText = (value) => {
       return value === 'english' ? 'Name' : 'naam'
   }
    
    render(){
        return (
            <div className="ui field">
                <label>
                    <LanguageContext.Consumer>
                        { ({ language }) => this.renderText(language)  }
                    </LanguageContext.Consumer>
                </label>
                <input type="text" />
            </div>
        )
    }
     
}

export default Field

// *********** with 'this.context' *****************

// class Field extends React.Component {
    
//     static contextType = languageContext   
    
//     render(){
//         console.log(this.context)
//         const text = this.context.language === 'english' ? 'Name' : 'nummyt'
//         return (
//             <div className="ui field">
//                 <label>
//                     {text}    
//                 </label>
//                 <input type="text" />
//             </div>
//         )
//     }
     
// }

// export default Field