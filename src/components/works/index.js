import React from 'react';

import SectionTitle from '../section-title';
import Paragraph from '../paragraph';

import html5Icon from '../../img/icons/html.png';
import css3Icon from '../../img/icons/css.png';
import jsIcon from '../../img/icons/js.gif';
import reactIcon from '../../img/icons/react.png';
import nodeIcon from '../../img/icons/node.png'

import './style.css';

function Works() {

    const info = {
        text1 : 'Ops! Parece que ainda não há nada aqui... :c',
        text2 : 'Vamos começar produzir agora! :D',
    }

    return (
        <div className='works-general'>
            <div className='works-container'>
                <SectionTitle title={'Trabalhos'}/>
                <div className='works-content'>
                    <Paragraph text={info.text1}/>
                    <Paragraph text={info.text2}/>
                    <div className='works-tech-icons-container'>
                        <img className='works-tech-icon' src={html5Icon} title='HTML5' alt='HTML5 icon'/>
                        <img className='works-tech-icon' src={css3Icon} title='HTML5' alt='CSS3 icon'/>
                        <img className='works-tech-icon' src={jsIcon} title='HTML5' alt='JavaScript icon'/>
                        <img className='works-tech-icon' src={reactIcon} title='HTML5' alt='ReactJs icon'/>
                        <img className='works-tech-icon' src={nodeIcon} title='HTML5' alt='NodeJs icon'/>
                    </div>
                    <a className='works-contact-link' href='#contact'>Contato</a>
                </div>
            </div>
        </div>
    )
}

export default Works;