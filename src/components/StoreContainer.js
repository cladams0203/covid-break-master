import React from 'react'
import {Link} from 'react-router-dom'
import StoreCategory from './StoreCategory'

export default function StoreContainer(props) {
    const categories = []
    for(let obj in props.parts) {   
        categories.push({name: obj, image: props.parts[obj][0].url})
    }
    console.log(categories)
    return (
        <div>
           {categories.map((item, index) => {
               return (
                <Link to={`/category/${index}`}>
                    <StoreCategory name={item.name} image={item.image} key={index} id={index} />
                </Link>
               )
            })}
        </div>
    )
}