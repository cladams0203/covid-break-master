import React from 'react'
import PartsCard from './PartsCard'

export default function CartDetails(props) {

    return(
        <div>
            <div>
                <p>Items:</p>
                <p>Total</p>
            </div>
            {props.cart.items.map((item, index) => {
                return <PartsCard part={item} setCart={props.setCart} key={index} cartRemove={props.cartRemove}  />
            })}
            
        </div>
    )
}