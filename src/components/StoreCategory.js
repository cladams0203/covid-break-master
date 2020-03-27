import React from 'react'

export default function StoreCategory(props) {

    return (
        <div>
            
            <div>
                <h3>{props.name}</h3>
                <p></p>
            </div>
            <img src={props.image} />
        </div>
    )
}