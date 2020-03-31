import React, { useState, useReducer } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import data from './data'
import StoreContainer from './components/StoreContainer'
import CategoryContainer from './components/CategoryContainer'
import Part from './components/Part'
import Header from './components/Header'
import CartDetails from './components/CartDetails';
import Styled from "styled-components";
import { cartReducer, initialState, ADD_CART, REMOVE_CART } from './reducers/cartReducer'



//styling
const AllContainer = Styled.div`
display: flex;
justify-content:center;
padding-top: 5%;
background: linear-gradient(21deg, rgba(115,226,15,0.7931547619047619) 2%, rgba(9,28,121,0.7147233893557423) 49%, rgba(0,168,255,0.4542191876750701) 88%);
height:100vh;
`



function App() {
  
  // const obj1 = {name: 'Joshua'}
  // const obj2 = obj1
  // const obj3 = obj2
  // obj3.name = 'David'
  // console.log(obj1)
  // console.log(obj3)
  const [parts, setParts] = useState(data)
  // const [cart, setCart] = useState({items:[], total: 0})
  const [state, dispatch] = useReducer(cartReducer, {items:[], total:0})
  console.log(initialState)
  console.log(state)
  const cartRemove = (id, name) => {
      dispatch({type: REMOVE_CART, payload:{id, name}})
      // let deleteSingle = false;
      // setCart({
      //   ...cart,
      //   items: cart.items.filter(item => {
      //     if(item.id == id && item.name == name) {
      //       if(deleteSingle) {
      //         return item
      //       }
      //       deleteSingle = true;
      //     }else{
      //       return item
      //     }
      //   })
      // })
  }
  
  const cartAdd = part => {
    dispatch({type: ADD_CART, payload: part})
    // setCart(prevCart => ({
    //     ...prevCart,
    //     items:[...prevCart.items, part]
    // }))
  }

  return (
    <Router>
      <Header cart={state} />
    <AllContainer>
      
    <div className="App">
        <Route exact path='/'>
          <StoreContainer parts={parts} />
        </Route>
        <Route exact path='/category/:id'>
          <CategoryContainer parts={parts} cartRemove={cartRemove} cartAdd={cartAdd} cart={state} />
        </Route>
        <Route path='/cart'>
          <CartDetails cart={state} cartRemove={cartRemove}/>
        </Route>
    </div>

    </AllContainer>
    </Router>
  );
}

export default App;
