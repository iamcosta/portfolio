import React from 'react';

import './style.css'

import Navbar from '../../components/navbar';
import Header from '../../components/header';
import AboutMe from '../../components/about-me';
import Works from '../../components/works';
import Curriculum from '../../components/curriculum';
import Contact from '../../components/contact';
import Footer from '../../components/footer';

import SectionIndex from '../../components/section-index';

function Main () {
    return (
        <>
        <Navbar />
        <div className='content'>
            <Header />
            <SectionIndex id={'about-me'}/>
            <AboutMe />
            <SectionIndex id={'works'}/>
            <Works />
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