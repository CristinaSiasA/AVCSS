import React from 'react';
import Button from "./Button";
import './basicSection.css'


function BasicSection({src, title, text, url, subtitle,buttonStyle,children}) {
    return (
        <div className="container">
            <div className="row justify-content-center bg-dark p-5">
            <div  className='col-lg-6 col-md-6 col-sm-12 col-xs-12  section_image'>
                <img className="main_image"
                     alt='ImageSection'
                     src={src}
                />
            </div>
                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 section_content'>
                    <h5 className=' section_subtitle'>{title}</h5>
                    <h1 className='section_title'>{subtitle}</h1>
                    <p className="section_text">{text}</p>
                    <div>
                        <Button buttonStyle={buttonStyle} url={url} children={children}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BasicSection;