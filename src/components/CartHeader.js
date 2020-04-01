import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Styled from "styled-components";
import { useSelector } from 'react-redux'
//Styling

const CartDiv = Styled.div`
display:flex;
`

const CartP = Styled.p`
margin-top: 15%;
font-size: 1.5rem;
color: royalBlue;
`

const CartLink = Styled(Link)`
text-decoration: none;
`

export default function CartHeader(props) {
  const cart = useSelector(state => state)
  return (
    <div>
      <CartLink to="/cart">
        <CartDiv>
          <CartP>
            <FontAwesomeIcon icon={faShoppingCart} />:{cart.items.length}{" "}
          </CartP>
        </CartDiv>
      </CartLink>
    </div>
  );
}
