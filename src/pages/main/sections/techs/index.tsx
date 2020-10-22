import React from 'react';

import SectionTitle from '../../../../components/section-title';
// import Paragraph from '../paragraph';

import html5Icon from '../../../../img/icons/html.png';
import css3Icon from '../../../../img/icons/css.png';
import jsIcon from '../../../../img/icons/js.gif';
import tsIcon from '../../../../img/icons/ts.png';
import reactIcon from '../../../../img/icons/react.png';
import nodeIcon from '../../../../img/icons/node.png'

import './style.css';

function Techs() {

    // const info = {
    //     text1 : 'Ops! Parece que ainda não há nada aqui... :c',
    //     text2 : 'Vamos começar produzir agora! :D',
    // }

    return (
        <div className='techs-general'>
            <div className='techs-container'>
                <SectionTitle>
                    {'Tecnologias'}
                </SectionTitle>
                <div className='techs-content'>
                    {/* <Paragraph text={info.text1}/>
                    <Paragraph text={info.text2}/> */}
                    <div className='techs-tech-icons-container'>
                        <img className='techs-tech-icon techs-tech-icon-delay1' src={html5Icon} title='HTML5' alt='HTML5 icon'/>
                        <img className='techs-tech-icon techs-tech-icon-delay2' src={css3Icon} title='CSS3' alt='CSS3 icon'/>
                        <img className='techs-tech-icon techs-tech-icon-delay3' src={jsIcon} title='Javascript' alt='Javascript icon'/>
                        <img className='techs-tech-icon techs-tech-icon-delay4' src={tsIcon} title='Typescript' alt='Typescript icon'/>
                        <img className='techs-tech-icon techs-tech-icon-delay5' src={reactIcon} title='ReactJs' alt='ReactJs icon'/>
                        <img className='techs-tech-icon techs-tech-icon-delay6' src={nodeIcon} title='NodeJs' alt='NodeJs icon'/>
                    </div>
                    <a className='techs-contact-link' href='#contact'>Contato</a>
                </div>
            </div>
        </div>
    )
}

export default Techs;