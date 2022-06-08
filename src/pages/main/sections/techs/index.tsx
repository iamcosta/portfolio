import React, { useEffect, useState } from 'react';
import { BsGithub } from 'react-icons/bs';

import SectionTitle from '../../../../components/section-title';
// import Paragraph from '../paragraph';

import html5Icon from '../../../../img/icons/html.png';
import css3Icon from '../../../../img/icons/css.png';
import jsIcon from '../../../../img/icons/js.gif';
import tsIcon from '../../../../img/icons/ts.png';
import reactIcon from '../../../../img/icons/react.png';
import nodeIcon from '../../../../img/icons/node.png'

import './style.css';
import { getUser } from '../../../../service/controllers/github.controller';

type GitUser = {
    login: string,
    name: string,
    html_url: string,
    avatar_url: string,
    bio: string,
}
function Techs() {

    const [gitUser, setGitUser] = useState({} as GitUser);

    useEffect(() => {
        getUser("iamcosta").then(user => setGitUser(user));
    }, []) //eslint-disable-line react-hooks/exhaustive-deps

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
                        <img className='techs-tech-icon techs-tech-icon-delay1' src={html5Icon} title='HTML5' alt='HTML5 icon' />
                        <img className='techs-tech-icon techs-tech-icon-delay2' src={css3Icon} title='CSS3' alt='CSS3 icon' />
                        <img className='techs-tech-icon techs-tech-icon-delay3' src={jsIcon} title='Javascript' alt='Javascript icon' />
                        <img className='techs-tech-icon techs-tech-icon-delay4' src={tsIcon} title='Typescript' alt='Typescript icon' />
                        <img className='techs-tech-icon techs-tech-icon-delay5' src={reactIcon} title='ReactJs' alt='ReactJs icon' />
                        <img className='techs-tech-icon techs-tech-icon-delay6' src={nodeIcon} title='NodeJs' alt='NodeJs icon' />
                    </div>
                    <a className='card-link' href={gitUser.html_url}>
                        <div className='git-card'>
                            <span className='git-card-header'>
                                <BsGithub color='#fff' size={28} />
                            </span>
                            <img alt={'Foto de ' + gitUser.name} src={gitUser.avatar_url} />
                            <strong>{gitUser.name}</strong>
                            <span>{"@" + gitUser.login}</span>
                            <p>{gitUser.bio}</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Techs;