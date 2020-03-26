import React, { useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import data from './data'
import StoreContainer from './components/StoreContainer'

function App() {
  const [parts, setParts] = useState(data)
  console.log(parts)
  return (
    <div className="App">
      <Router>
        <Route exact path='/'>
          <StoreContainer parts={parts} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
