import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import './useEffect.css';


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(() => {
        console.log("hey");
    }, [] );

    useEffect(() => {
        console.log("Cambio formState");
    }, [ formState ] );

    const handleInputChange = ( { target } ) => {
        setFormState({
            ...formState,
            [ target.name ]: target.value
        });
    }

    return (
        <>
            <h1> useEffect </h1>
            <hr />

            <div className="form-group">

                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="NAME"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />

            </div>

            <div className="form-group">

                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="EMAIL@EMAIL.COM"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

            </div>

            { (name === '123') && <Message /> }
        </>
    )
}
