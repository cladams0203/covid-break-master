import React, { createContext, useState } from 'react';
import data from "../data"

export const PartContext = createContext();

const PartContextProvider = (props) => {
    const [parts, setParts] = useState(data)

    return (
        <PartContext.Provider value={{ parts }}>
            {props.children}
        </PartContext.Provider>
    )
}

export default PartContextProvider;