import React, { useState } from 'react'
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom'
import PartsCard from './PartsCard'

export default function CategoryContainer(props) {
    const { id } = useParams()
    const match = useRouteMatch()

    const categories = []
    for(let obj in props.parts) {   
        categories.push({name: obj, image: props.parts[obj][0].url})
    }
    
    return (
        <div>
            {categories.length > 0 && props.parts[`${categories[id].name}`].map((item, index) => {
                return (
                <Link to={`${match.url}/part/${item.id}`} key={index}>
                    <PartsCard part={item}  />
                </Link>        
                )
            })}
        </div>
    )
}
