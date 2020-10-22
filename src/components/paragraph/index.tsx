import React, { DetailedHTMLProps, ParamHTMLAttributes,  } from 'react';

import './style.css';

const Paragraph = (props: DetailedHTMLProps<ParamHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {

    return (
        <p
            {...props}
            className='p-content'>
            {props.children}
        </p>
    )
}

export default Paragraph;