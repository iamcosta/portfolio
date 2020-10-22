import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

import './style.css';

const SectionTitle = (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (    
    <h1 {...props} className='title'>
        {props.children}
    </h1>
);


export default SectionTitle;