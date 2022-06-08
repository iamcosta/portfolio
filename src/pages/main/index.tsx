import React from 'react';

import './style.css'

// Sections
import Header from './sections/header';
import AboutMe from './sections/about-me';
import Techs from './sections/techs';
import Curriculum from './sections/curriculum';
import Contact from './sections/contact';

// Components
import SectionIndex from '../../components/section-index/index';
import Footer from '../../components/footer';

function Main () {
    return (
        <>
        <div>
            <Header />
            <SectionIndex id={'about-me'}/>
            <AboutMe />
            <SectionIndex id={'techs'}/>
            <Techs />
            <SectionIndex id={'curriculum'}/>
            <Curriculum />
            <SectionIndex id={'contact'}/>
            <Contact />
            <Footer />
        </div>
        </>
    )
}

export default Main;