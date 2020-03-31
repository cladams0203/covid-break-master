import React, { useContext } from 'react'
import PartsCard from './PartsCard'
import Styled from "styled-components"
import { CartContext } from '../contexts/CartContext'



const CartDiv = Styled.div`
display:flex;
flex-direction: row;
flex-wrap: no-wrap;
padding-top:10%;
justify-content:center;
text-align: center;
color: white;
margin: 10%;

`
const RemoveButton = Styled.button`
margin: 2%;
padding:1%;
border-radius: 10px;
font-size: .8rem;
box-shadow: 5px 10px 10px black;
`
const PCart = Styled.p`
margin-top: 25%;
`

const TotalP = Styled.p`
margin:50%;

`


export default function CartDetails() {
    const { cart, cartRemove } = useContext(CartContext)

    const cartTotal = cart.items.reduce((total, item) => {
        return total += item.price
    }, 0)

    return (
        <CartDiv>
            {cart.items.map((item, index) => {
                return (<div style={{ width: "100%", margin: "0 3%" }}><h4>{item.name}</h4><img style={{
                    maxWidth: "100%",
                    maxHeight: "173px"
                }} src={item.url} /><RemoveButton onClick={() => cartRemove(item.id, item.name)}>Remove from Cart</RemoveButton></div>)
            })}
            <div>
                {cartTotal === 0 ? <PCart>Add Items to Your Cart!!</PCart> : <TotalP>Total: {cartTotal} </TotalP>}
            </div>
        </CartDiv>
    )
}