import React from 'react'
import { Link } from 'react-router-dom'

export default function CartHeader(props) {

    return (
        <div>
            <Link to='/cart'>
                <p>Cart:{props.cart.items.length} </p> 
            </Link>
        </div>
    )
}