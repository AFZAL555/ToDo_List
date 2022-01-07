import React from 'react'
import './App.css';
const Button = ({color,text}) => {
    return (
        <button style={{ backgroundColor: color}} className='btn'>{text}</button>
        
    )}

export default Button
