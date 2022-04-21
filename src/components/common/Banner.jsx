import React from 'react';
import './banner.css'

function Banner({title,subtitle,bannerId}) {
    return(
        <div className="container-fluid  py-5 white-text" id={bannerId}>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center" >
                   <h1 className="text-center display-3 style-titles ">{title}</h1>
                    <h3 className="style-subtitles">{subtitle}</h3>
                </div>
        </div>
    )
}
export default Banner;