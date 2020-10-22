import React, { useState } from 'react';

import './style.css';

function Navbar() {

    const [navDrop, setNavDrop] = useState(
        {className : 'nav-menu', symbol : '☰⤓'}
    );

    function drop() {
        if (navDrop.className === 'nav-menu') {
            setNavDrop(
                {className : 'nav-menu nav-drop', symbol : '☰⤒'}
            );
        } else {
            setNavDrop(
                {className : 'nav-menu', symbol : '☰⤓'}
            );
        }
    }

    return (
        <div className='nav-bar'>
            <div className='nav-container'>
                <ul className={navDrop.className} id='nav-menu'>
                    <li className='nav-menu-item'>
                        <a className='nav-menu-link' href='#top' onClick={drop}>início</a>
                    </li>
                    <li className='nav-menu-item'>
                        <a className='nav-menu-link' href='#about-me' onClick={drop}>sobre mim</a>
                    </li>
                    <li className='nav-menu-item'>
                        <a className='nav-menu-link' href='#techs' onClick={drop}>tecnologias</a>
                    </li>
                    <li className='nav-menu-item'>
                        <a className='nav-menu-link' href='#curriculum' onClick={drop}>currículo</a>
                    </li>
                    <li className='nav-menu-item'>
                        <a className='nav-menu-link' href='#contact' onClick={drop}>contato</a>
                    </li>
                    <li className='nav-drop-button'>
                        <p className='nav-menu-link' onClick={drop}>{navDrop.symbol}</p>
                    </li>
                </ul>
            </div>
        </div>
    )

}
export default Navbar;