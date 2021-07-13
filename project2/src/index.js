import React from 'react'
import ReactDOM from 'react-dom'
import LoadingPage from './loadingPage'
import SeasonDisplay from './seasonDisplay'
import './global.css'


class App extends React.Component {
        state = {
            lat: null,
            error: null
        }
    
        getPos = () => {
            return(
            window.navigator.geolocation.getCurrentPosition(
                position  => this.setState({lat: position.coords.latitude}), 
                err => this.setState({ error: err.message })
            )
        )
    }    
            
    componentDidMount(){
        this.getPos()
    }



    componentDidUpdate(){
        console.log('4.componentDidUpdate')
    }
    
    renderContent(){
        
        if(this.state.error) {
            return <div>Error: { this.state.error }</div>
        }
        if (this.state.lat){
            // return <div>Latitude: { this.state.lat }</div>
            return <SeasonDisplay lat = {this.state.lat}     />
        }
        
        return <LoadingPage />
    }

    render(){
        return (
          <div className="borderRed">
                { this.renderContent() }
          </div>  
        )
        
                             
    } 

}
// Current time App
// class Clock extends React.Component {
    
//     state = { time: new Date().toLocaleTimeString() }
    
//      componentDidMount() {
//         setInterval(() => { 
//                 this.setState({ time: new Date().toLocaleTimeString()})
//         }, 1000)
    
//     }    
        
//     render() {
//         return (
//             <div className="time">
//                 The time is: {this.state.time}
//             </div>
//         );
//     }
// }




const container = document.getElementById('root')
ReactDOM.render(<App/>, container)



