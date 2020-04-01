import React, { useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import data from './data'
import StoreContainer from './components/StoreContainer'
import CategoryContainer from './components/CategoryContainer'
import Header from './components/Header'
import CartDetails from './components/CartDetails';
import Styled from "styled-components";




//styling
const AllContainer = Styled.div`
display: flex;
justify-content:center;
padding-top: 5%;
background: linear-gradient(21deg, rgba(115,226,15,0.7931547619047619) 2%, rgba(9,28,121,0.7147233893557423) 49%, rgba(0,168,255,0.4542191876750701) 88%);
height:100vh;
`



function App() {
  const [parts, setParts] = useState(data)
  
  return (
    <Router>
      <Header />
    <AllContainer>  
    <div className="App">
        <Route exact path='/'>
          <StoreContainer parts={parts} />
        </Route>
        <Route exact path='/category/:id'>
          <CategoryContainer parts={parts} />
        </Route>
        <Route path='/cart'>
          <CartDetails />
        </Route>
    </div>
    </AllContainer>
    </Router>
  );
}

export default App;
