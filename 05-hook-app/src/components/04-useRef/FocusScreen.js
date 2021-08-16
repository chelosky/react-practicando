import React, { useRef } from 'react'
import '../03-examples/examples.css';

export const FocusScreen = () => {


    const inputRef = useRef();

    const handleClick = (e) => {
        // document.querySelector('input').select();
        inputRef.current.select();
    }
    
    return (
        <>
            <h1>Focus Screen</h1>
            <hr/>


            <input 
                ref={ inputRef }
                className="form-control"
                placeholder="Nombre"
            />

            <button 
            onClick={ handleClick }
            className="btn btn-outline-primary mt-3">
                Focus
            </button>
        </>
    )
}
