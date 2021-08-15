import React, { useEffect, useState } from 'react'

export const Message = () => {


    const [coords, setCoords] = useState( { x: 0, y:0 } )

    const {x,y} = coords;

    const mouseMove = (e) => {
        const coors = { x: e.x, y: e.y };
        setCoords(coors);
    }

    useEffect(() => {
        window.addEventListener('mousemove', mouseMove);
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);;

    return (
        <>
            <h3> GOKUUUUUU </h3>
            <p>
                x: { x } - y: { y }
            </p>
        </>
    )
}
