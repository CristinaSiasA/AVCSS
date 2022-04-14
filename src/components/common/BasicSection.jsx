import React from 'react';
import Button from "./Button";
import './basicSection.css'


function BasicSection({src, title, text,icon, url, subtitle,buttonStyle,children}) {
    return (
        <div className="container p-lg-5 p-sm-1">
            <div>
                <h1 className='section_title style-titles py-5'>{title}</h1>
            </div>
            <div className="row justify-content-center p-2">
            <div  className='col-lg-6 col-md-6 col-sm-12 col-xs-12 align-self-center section_image'>
                <img className="main_image"
                     alt='ImageSection'
                     src={src}
                />
            </div>
                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 p-5'>
                    <h3 className=' section_subtitle display-1 text-center'><span><i className="section_icon">{icon}</i></span>{subtitle}</h3>
                    <h4 className="text-justify py-5">{text}</h4>
                    <div className="justify-self-lg-start text-sm-center">
                        <Button buttonStyle={buttonStyle} url={url} children={children}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BasicSection;