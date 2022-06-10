import React from 'react';

import './style.css';

import profilePic from '../../../../img/iam-profile.jpg';
import { BsGithub, BsWhatsapp } from 'react-icons/bs';

function Header() {
    return (
        <div className='header-general'>
            <div className='header-container'>
                <div className='header-header'>
                    <a className='button-plain' href='#contact'>Contatos</a>
                    <div className='header-contact-icon-link'>
                        <a href='https://github.com/iamcosta' target={"_blank"} rel="noopener noreferrer" >
                            <BsGithub color='#fff' size={20} />
                        </a>
                        <a href='https://wa.me/5595984002013' target={"_blank"} rel="noopener noreferrer">
                            <BsWhatsapp color='#fff' size={20} />
                        </a>
                    </div>
                </div>
                <div className='header-content'>
                    <img
                        className='header-profile-pic'
                        src={profilePic}
                        title='Oi! Eu sou Iam!'
                        alt='imagem de perfil'
                    />
                    <div>
                        <h1 className='header-title'>Iam Barroso</h1>
                        <h2 className='header-subtitle'>Analista de Sistemas</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
