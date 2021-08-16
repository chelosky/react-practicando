import React, { useState } from 'react'
import '../03-examples/examples.css';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const RealExample = () => {

    const [show, setShow] = useState(false)

    return (
        <>
            <h1>REAL EXAMPLE</h1>
            <hr/>

            {
                show && <MultipleCustomHooks />
            }

            <br/>

            <button className="btn btn-primary mt-4" onClick={ () => setShow(!show) }>
                Show/Hide
            </button>

        </>
    )
}
