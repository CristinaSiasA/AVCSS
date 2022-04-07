import React from 'react';
import {Button} from './Button'
import { Link } from 'react-router-dom';


function BasicSection({src,title,text,path,subtitle}) {
    return (
            <div className='section__container'>
                <div>
                    <img className='section_image'
                            alt='ImageSection'
                            src={src}
                        />
                    <div className='section_content'>
                        <h5 className='section_subtitle'>{title}</h5>
                        <h1 className='section_title'>{subtitle}</h1>
                        <p className="section_text">{text}</p>
                        <Link className='Call_to_Action' to={path}>{Button} </Link>
                    </div>
                </div>
            </div>
    );
}
export default BasicSection;