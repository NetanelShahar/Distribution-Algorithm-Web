import React from 'react';
import './App.css';

import Button from 'react-bootstrap/Button'
import { Home } from './Components/Home'
import { About } from './Components/About'
import { Contact } from './Components/Contact'
import { Navigation } from './Components/Navigation'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <div className="App">
          
          <Navigation />

          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/about' component={About} exact />
            <Route path='/contact' component={Contact} exact />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
