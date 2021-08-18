import React from 'react'
import  { BrowserRouter, Route } from 'react-router-dom'
import StreamList from './streams/streamList'
import StreamShow from './streams/streamShow'
import StreamDelete from './streams/streamDelete'
import StreamEdit from './streams/streamEdit'
import StreamCreate from './streams/streamCreate'
import Header from '../components/header'


const App = () => {
    
    return (
        <div className="ui container"> 
          <BrowserRouter>
                <div>
                    <Header/>
                    <Route path="/" exact component={ StreamList } />
                    <Route path="/streams/new" component={ StreamCreate } />
                    <Route path="/streams/edit" exact component={ StreamEdit } />
                    <Route path="/streams/delete" component={ StreamDelete } />
                    <Route path="/streams/show" exact component={ StreamShow } />
                </div>
            </BrowserRouter>
        </div>
        
        
        
    )
}

export default App