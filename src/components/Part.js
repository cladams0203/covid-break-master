import React, { useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { PartContext } from '../context/PartContext'
import { CartContext } from '../context/CartContext'

export default function Part(props) {
    const { parts } = useContext(PartContext)
    const { cart, setCart } = useContext(CartContext)
    const {partId, id} = useParams()
    const history= useHistory()
    const categories = []
    for(let obj in parts) {   
        categories.push({name: obj, image: parts[obj][0].url})
    }
    const item = parts[categories[id].name].filter(obj => obj.id == partId)
    const part = item[0]
    
    const addCart = (e) => {
        e.preventDefault()
        setCart({
            ...cart,
            items:[...cart.items, part]
        })
       history.push('/')
    }

    return(
        <div>
            <div>
                <h3> {part.name} </h3>
                {part.model && <p>Socket Type: {part.model} </p>}
                {part.socket && <p>Socket Type: {part.socket} </p>}
                {part.cores && <p>Cores: {part.cores} </p>}
                {part.speed && <p>Speed: {part.speed}Mhz </p>}
                {part.watts && <p>Watts: {part.watts} </p>}
                {part.formFactor && <p>Form Factor: {part.formFactor} </p>}
                {part.size && <p>Size: {part.size} </p>}
                {part.modules && <p>Modules: {part.modules} </p>}
                {part.capacity && <p>Capacity: {part.capacity} </p>}
                {part.interface && <p>Interface: {part.interface} </p>}
                {part.chipset && <p>Chipset: {part.chipset} </p>}
                {part.memory && <p>Memory: {part.memory} Gb </p>}
                <p> {part.price} </p>
            </div>
            <img src={part.url} />
            <button onClick={(e) => addCart(e)}>Add to Cart</button>
        </div>
    )
}