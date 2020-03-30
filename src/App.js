import React, { useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import data from './data'
import StoreContainer from './components/StoreContainer'
import CategoryContainer from './components/CategoryContainer'
import Part from './components/Part'
import Header from './components/Header'
import CartDetails from './components/CartDetails';
import Styled from "styled-components";
import { CartContext } from './context/CartContext'
import { PartContext } from './context/PartContext'



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
  const [cart, setCart] = useState({items:[], total: 0})

  const cartRemove = (id, name) => {
      let deleteSingle = false;
      setCart({
        ...cart,
        items: cart.items.filter(item => {
          if(item.id == id && item.name == name) {
            if(deleteSingle) {
              return item
            }
            deleteSingle = true;
          }else{
            return item
          }
        })
      })
  }
  
  const cartAdd = part => {
    setCart(prevCart => ({
        ...prevCart,
        items:[...prevCart.items, part]
    }))
  }

  return (
    <Router>
      <PartContext.Provider value={{ parts }}>
        <CartContext.Provider value={{ cart, setCart, cartAdd, cartRemove }}>
          <Header />
          <AllContainer>  
          <div className="App">
              <Route exact path='/'>
                <StoreContainer />
              </Route>
              <Route exact path='/category/:id'>
                <CategoryContainer  />
              </Route>
              <Route path='/cart'>
                <CartDetails />
              </Route>
          </div>
          </AllContainer>
        </CartContext.Provider>
      </PartContext.Provider>
    </Router>
  );
}

export default App;
