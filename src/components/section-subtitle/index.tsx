import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

import './style.css';

function SectionSubtitle(props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
    
    return (
        <h2 {...props} className='subtitle'>
            {props.children}
        </h2>   
    )
}

export default SectionSubtitle;