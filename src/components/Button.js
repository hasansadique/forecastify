import React from 'react'


const Button = ({ value, getData }) => {
    return (
        <div>
            <button onClick={getData}>{value}</button>
        </div>
    )
}

export default Button
