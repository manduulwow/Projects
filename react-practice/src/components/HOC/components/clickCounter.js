import React, { useState } from 'react';
import UpdatedComponent from './updateComponent';

const ClickCounter = (props) => {
    return(
        <div className="cc-contaner">
            <div><button onClick={props.increment}>Increment {props.count}</button></div>
        </div>
    )
}

export default UpdatedComponent(ClickCounter);