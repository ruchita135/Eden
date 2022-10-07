import * as React from 'react';
import logo from '../logo.jpg';
import '../App.css';

function Header () {
    return (
        <header className="App-header my-5">
            <img className='px-2' alt="app-logo" src={logo}/>
            <div className='App-name font-weight-bold'>Eden</div>
        </header>
    )
}

export default Header;
