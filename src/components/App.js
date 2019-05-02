import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Login'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
import TodoComponent from './TodoComponent'
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
