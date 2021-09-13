import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const AboutScreen = () => {


    const { user, setUser } = useContext(UserContext);

    const handleLogOut = () => {
        setUser({});
    }

    return (
        <>
            <h1>AboutScreen</h1>
            <br/>
            <pre className="container">
                { JSON.stringify(user,null, 4) }
            </pre>
            <button
                className="btn btn-primary"
                onClick={ handleLogOut }
            >
                LOG OUT
            </button>
        </>
    )
}
