import React from 'react'


const App = () => {

const object = {
    labelText: 'Enter Name',
    buttonText: 'Click on Me yeah',
    
}
    
    
    return(
        <div>
            <label htmlFor="name" className="label">
                { object.labelText }
            </label>
            <input type="text" name="" id="name" />
            <button style={
            {
                backgroundColor:'blue',
                color:'white'
            }}
            >{ object.buttonText  }</button>
        </div>
    )
} 
    

export default App
