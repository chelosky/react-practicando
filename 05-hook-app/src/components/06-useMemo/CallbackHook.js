import React, { useCallback, useState } from 'react'
import './examples.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter( counter + 1 );
    // }

    const increment =useCallback(
        (num) => {
            setCounter( c => c + num );
        },
        [setCounter],
    )

    return (
        <div>
            <h1>Callback hook: { counter }</h1>
            <br/>

            <ShowIncrement increment={ increment }/>
        </div>
    )
}
