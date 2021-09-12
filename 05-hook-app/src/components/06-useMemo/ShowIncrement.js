import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {

    console.log('me volvi a generar');

    return (
        <button className="btn btn-success " onClick={ () => increment(10) } >+1</button>
    )
})
