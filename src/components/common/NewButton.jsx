import React from 'react';
import './button.css';


const NewButton = ({buttonStyle, children,url}) => {
    return (
        <a href={url} className={`my-btn ${buttonStyle}`}>
            {children}
        </a>
    );
};

export default NewButton;