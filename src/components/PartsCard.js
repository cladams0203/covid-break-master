import React from 'react'

export default function PartsCard(props) {
     const { name, url, price } = props.part
     console.log(props.part)
    return(
        <div>
            <div>
                <h3> {name} </h3>
                {props.part.model && <p>Socket Type: {props.part.model} </p>}
                {props.part.socket && <p>Socket Type: {props.part.socket} </p>}
                {props.part.cores && <p>Cores: {props.part.cores} </p>}
                {props.part.speed && <p>Speed: {props.part.speed}Mhz </p>}
                {props.part.watts && <p>Watts: {props.part.watts} </p>}
                {props.part.formFactor && <p>Form Factor: {props.part.formFactor} </p>}
                {props.part.size && <p>Size: {props.part.size} </p>}
                {props.part.modules && <p>Modules: {props.part.modules} </p>}
                {props.part.capacity && <p>Capacity: {props.part.capacity} </p>}
                {props.part.interface && <p>Interface: {props.part.interface} </p>}
                {props.part.chipset && <p>Chipset: {props.part.chipset} </p>}
                {props.part.memory && <p>Memory: {props.part.memory} Gb </p>}
                <p> {price} </p>
            </div>
            <img src={url} />
            {props.setCart && <button onClick={() => {
                props.cartRemove(props.part.id, props.part.name)
            }}>Remove from Cart</button>}
        </div>
    )
}