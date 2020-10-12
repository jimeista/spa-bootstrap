import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Main, About, Contacts } from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <div className='App'>
          <Route exact path='/' component={Main} />
          <Route path='/about' component={About} />
          <Route path='/contacts' component={Contacts} />
        </div>
      </Switch>
    </Router>
  )
}

export default App
