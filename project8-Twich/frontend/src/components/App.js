import React from 'react'
import  { Router, Route, Switch } from 'react-router-dom'
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
                    <Switch>
                        <Route path="/" exact component={ StreamList } />
                        <Route path="/streams/new" component={ StreamCreate } />
                        <Route path="/streams/edit/:id" exact component={ StreamEdit } />
                        <Route path="/streams/delete/:id" component={ StreamDelete } />
                        <Route path="/streams/:id" exact component={ StreamShow } />
                    </Switch>
                </div>
            </Router>
        </div>
        
        
        
    )
}

export default App