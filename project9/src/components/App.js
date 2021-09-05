import React from 'react'
import UserCreate from './userCreate'
import { LanguageStore } from '../context/languageContext'
import colorContext from '../context/colorContext'
import LanguageSelector from './languageSelector'

class App extends React.Component {




    render(){
        return (
            <div>
                <LanguageStore>
                    <LanguageSelector />
                    {/* <colorContext.Provider > */}
                        <UserCreate/>
                    {/* </colorContext.Provider> */}
                </LanguageStore>
                
            </div>
                        
            
        )
    }
}

export default App