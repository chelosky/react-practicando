import React from 'react'

export const Small = React.memo(({ value }) => {
    console.log('small called')
    return (
        <small>
            {value}
        </small>
    )
}
)