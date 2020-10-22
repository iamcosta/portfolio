import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

import './style.css';

const SectionIndex = (props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    return <div {...props} className='index-position'/>
}

export default SectionIndex;