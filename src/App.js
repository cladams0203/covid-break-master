import React, { useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import data from './data'
import StoreContainer from './components/StoreContainer'
import CategoryContainer from './components/CategoryContainer'

function App() {
  const [parts, setParts] = useState(data)
  console.log(parts)
  return (
    <div className="App">
      <Router>
        <Route exact path='/'>
          <StoreContainer parts={parts} />
        </Route>
        <Route path='/category/:id'>
          <CategoryContainer parts={parts} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
