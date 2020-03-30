import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import CartHeader from './CartHeader'
import Styled from "styled-components"
import { CartContext } from "../contextxt/CartContext"
//Styling


const StyledLink = Styled(NavLink)`
color:white;
text-decoration: none;
margin: 2%;
font-family: 'Poppins', sans-serif;
weight: 400;
`


const SuperNav = Styled.nav`
display:flex;
width: 100%;
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
box-shadow: 1px 10px 8px black;
justify-content: space-around;
position:fixed;
`


export default function Header(props) {
    const { cart } = useContext(CartContext);
    return (
        <div>
            <SuperNav>
                <StyledLink to='/'>Home</StyledLink>
                <StyledLink to='/category/0'>Processors</StyledLink>
                <StyledLink to='/category/1'>Motherboards</StyledLink>
                <StyledLink to='/category/2'>Memory</StyledLink>
                <StyledLink to='/category/3'>Storage</StyledLink>
                <StyledLink to='/category/4'>Graphics</StyledLink>
                <StyledLink to='/category/5'>Cases</StyledLink>
                <StyledLink to='/category/6'>Coolers</StyledLink>

                <CartHeader cart={cart} />
            </SuperNav>
        </div>
    )
}