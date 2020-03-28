import React from 'react'
import PartsCard from './PartsCard'

export default function CartDetails(props) {
    const cartTotal = props.cart.items.reduce((total, item) => {
        return total += item.price
    }, 0)
    return(
        <div>
            <div>
                <p>Total: {cartTotal} </p>
            </div>
            {props.cart.items.map((item, index) => {
                return <PartsCard part={item} setCart={props.setCart} key={index} cartRemove={props.cartRemove}  />
            })}   
        </div>
    )
}