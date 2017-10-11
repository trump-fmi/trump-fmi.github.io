import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Guide from './pages/Guide'
import Configurator from './pages/Configurator'

import Navigation from './components/Navigation';


const App = () => (
  <Router>
    <div>
      <Navigation />
      <div className='container' style={{paddingTop:70}}>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/guide" component={Guide}/>
        <Route path="/configurator" component={Configurator}/>
      </div>
    </div>
  </Router>
)
export default App
