import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';
import './examples.css';

export const MemoHook = () => {

    const { state: counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ]);

    return (
        <div>
            <h1>Memo Hook</h1>
            <h4>Counter: { counter }   </h4>
            <hr/>

            <p> { memoProcesoPesado } </p>
            
            <button className="btn btn-success " onClick={ () => increment(1) } >+1</button>
            <br/>
            <button className="btn btn-primary mt-3" onClick={ () => setShow(!show) } >{ JSON.stringify(show) }</button>
        </div>
    )
}
