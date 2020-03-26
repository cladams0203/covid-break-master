import React from 'react'
import {Route} from 'react-router-dom'
export default function StoreCategory(props) {

    return (
        <div>
            <Route>
                
            </Route>
            <div>
                <h3>{props.name}</h3>
                <p></p>
            </div>
            <img src={props.image} />
        </div>
    )
}