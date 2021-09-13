import React, { useEffect, useReducer } from 'react'
import { TodoAddForm } from './TodoAddForm';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

import './styles.css';
const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [ todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleDelete = (id) => {
        console.log(id);
        const action = {
            type: 'delete',
            payload: id
        };
        dispatch(action);
    }

    const handleToggle = (id) => {
        console.log(id);
        const action = {
            type: 'toggle',
            payload: id
        };
        dispatch(action);

    }

    const handleAdd = (newTodo) => {
        const action = {
            type: 'add',
            payload: newTodo
        };
        dispatch(action);
    }

    return (
        <>
            <h1>App Todo List: { todos.length } </h1>
            <hr/>

            <div className="row">
                
                <div className="col-7">
                    <TodoList 
                        todos={ todos } 
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle } 
                    />
                </div>

                <div className="col-5">
                    <TodoAddForm handleAdd={ handleAdd } />
                </div>

            </div>
        </>
    )
}
