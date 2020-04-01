import React, { useState } from 'react'
import Styled from "styled-components"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useDispatch, useSelector } from "react-redux"
import { ADD_CART, REMOVE_CART } from "../reducers/cartReducer"


export default function PartsCard(props) {
    const dispatch = useDispatch()
    const cart = useSelector(state => state)
    const { name, url, price } = props.part
    return (
        <div>
            <Modal isOpen={props.modal} toggle={props.toggleModal}>
                <ModalHeader toggle={props.toggleModal}>{name}</ModalHeader>
                <ModalBody>
                    {props.part.model && <p>Socket Type: {props.part.model}
                    </p>}
                    {props.part.socket && <p>Socket Type: {props.part.socket}
                    </p>}
                    {props.part.cores && <p>Cores: {props.part.cores}
                    </p>}
                    {props.part.speed && <p>Speed: {props.part.speed}Mhz
                    </p>}
                    {props.part.watts && <p>Watts: {props.part.watts}
                    </p>}
                    {props.part.formFactor && <p>Form Factor: {props.part.formFactor}
                    </p>}
                    {props.part.size && <p>Size: {props.part.size}
                    </p>}
                    {props.part.modules && <p>Modules: {props.part.modules}
                    </p>}
                    {props.part.capacity && <p>Capacity: {props.part.capacity}
                    </p>}
                    {props.part.interface && <p>Interface: {props.part.interface}
                    </p>}
                    {props.part.chipset && <p>Chipset: {props.part.chipset}
                    </p>}
                    {props.part.memory && <p>Memory: {props.part.memory}
                        Gb
                    </p>}
                    <p>
                        {price}
                    </p>
                    <img
                        style={{
                            maxWidth: "100%",
                            maxHeight: "173px"
                        }}
                        src={url} />
                </ModalBody>
                <ModalFooter>
                    {cart.items.includes(props.part) ? <button
                        onClick={() => {
                            dispatch({ type: REMOVE_CART, payload: { id: props.part.id, name: props.part.name } })
                        }}>Remove from Cart</button> : null}
                    <button
                        onClick={() => {
                            dispatch({ type: ADD_CART, payload: props.part })
                        }}>Add to Cart</button>
                    <Button color="secondary" onClick={props.toggleModal}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}