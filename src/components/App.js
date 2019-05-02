import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './login/'
import Navbar from './navbar/'
import Dashboard from './dashboard/'
import TodoComponent from './todos/'
import NoMatch from './NoMatch'


const App = () => (
  <BrowserRouter>
    <div>
      <Login />
      <Navbar />
      <Switch >
        <Route exact path = "/" component = {Dashboard}/>
        <Route exact path= "/users/:uid/todos" component = {TodoComponent}/>
        <Route component= {NoMatch}/>
      </Switch>
    </div>
  </BrowserRouter >
)

export default App;
