import React from 'react'


const Button = ({ value, onClick }) => {
    return (
        <div>
            <button onClick={onClick}>{value}</button>
        </div>
    )
}

export default Button
