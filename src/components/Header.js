import React from 'react'
import { NavLink } from 'react-router-dom'
import CartHeader from './CartHeader'
export default function Header(props) {

    return (
        <div>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/category/0'>Processors</NavLink>
                <NavLink to='/category/1'>Motherboards</NavLink>
                <NavLink to='/category/2'>Memory</NavLink>
                <NavLink to='/category/3'>Storage</NavLink>
                <NavLink to='/category/4'>Graphics</NavLink>
                <NavLink to='/category/5'>Cases</NavLink>
                <NavLink to='/category/6'>Coolers</NavLink>
            </nav>
            <CartHeader cart={props.cart}/>
        </div>
    )
}