import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import './examples.css';
import { Small } from './Small';

export const Memorize = () => {

    const { state: counter, increment } = useCounter(10);
    const [show, setShow] = useState(true)

    return (
        <div>
            <h1>Memorize</h1>
            <h2>Counter: <Small value={ counter } />   </h2>
            <hr/>
            
            <button className="btn btn-success " onClick={ () => increment(1) } >+1</button>
            <br/>
            <button className="btn btn-primary mt-3" onClick={ () => setShow(!show) } >{ JSON.stringify(show) }</button>
        </div>
    )
}
