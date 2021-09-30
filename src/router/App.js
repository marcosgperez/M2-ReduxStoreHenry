import React from 'react';
import '../styles/App.css';

// Browser route
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Nav from '../components/Nav';
import Buttons from '../components/Buttons.js';
import Body from '../components/Body';
import Form from '../components/Form';
import Personas from '../components/Personas';

function App() {
  return (
    <Router>

      <Route path='/' component={Nav} />

      <Route exact path='/' component={Personas} />

      <Route path='/counter'>
        <div className='buttons'>
          <Buttons />
        </div>
        <Body />
      </Route>

      <Route path='/form' component={Form} />
    </Router>
  );
}

export default App;
