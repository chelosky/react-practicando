import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAddForm = ({ handleAdd }) => {

    const [ { description }, reset,  handleInputChange ] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if( description.trim().length < 1 ) return;

        console.log(description);
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };
        handleAdd(newTodo);
        reset();
    }

    return (
        <>
            <h4>Agregar ToDo</h4>
            <hr/>
            <form onSubmit={ handleSubmit }>
                <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="nombre tarea..."
                    autoComplete="off"
                    value={ description }
                    onChange={ handleInputChange }
                />

                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 w-100"
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
