import React from 'react'
import  { Router, Route } from 'react-router-dom'
import StreamList from './streams/streamList'
import StreamShow from './streams/streamShow'
import StreamDelete from './streams/streamDelete'
import StreamEdit from './streams/streamEdit'
import StreamCreate from './streams/streamCreate'
import Header from '../components/header'
import history from '../history'


const App = () => {
    
    return (
        <div className="ui container"> 
          <Router history= { history }>
                <div>
                    <Header/>
                    <Route path="/" exact component={ StreamList } />
                    <Route path="/streams/new" component={ StreamCreate } />
                    <Route path="/streams/edit/:id" exact component={ StreamEdit } />
                    <Route path="/streams/delete/:id" component={ StreamDelete } />
                    <Route path="/streams/show" exact component={ StreamShow } />
                </div>
            </Router>
        </div>
        
        
        
    )
}

export default App