import React from 'react'
import './App.css';
import Button from './Button';

const Header = () => {
    return (
        <header className='header'>
            <h1 style={{color:"white"}}><b>Task Lists</b> </h1> <br />
            <Button color="green" text="Add+"/>
        </header>
    )
}

export default Header
