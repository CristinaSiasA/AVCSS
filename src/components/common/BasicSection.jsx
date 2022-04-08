import React from 'react';
import NewButton from "./NewButton";
import './basicSection.css'


function BasicSection({src, title, text, url, subtitle,buttonStyle,children}) {
    return (
        <div className='className="container"'>
            <div  className='section_image'>
                <img className="main_image"
                     alt='ImageSection'
                     src={src}
                />
            </div>
                <div className='section_content'>
                    <h5 className='section_subtitle'>{title}</h5>
                    <h1 className='section_title'>{subtitle}</h1>
                    <p className="section_text">{text}</p>
                    <div>
                        <NewButton buttonStyle={buttonStyle} url={url} children={children}/>
                    </div>
                </div>

        </div>
    );
}

export default BasicSection;