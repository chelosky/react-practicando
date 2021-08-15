import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import './CounterApp.css';

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1> Counter With Custom Hook: { state } </h1>
            <hr />

            <button className="btn btn-danger " onClick={ () => decrement(2) } >-2</button>
            <button className="btn btn-primary " onClick={ reset } >Reset</button>
            <button className="btn btn-success " onClick={ () => increment(2) } >+2</button>
        </>
    )
}
