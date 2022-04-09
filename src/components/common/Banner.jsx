import React from 'react';
import './banner.css'

function Banner({title,subtitle,bannerId}) {
    return(
        <div className="container-fluid " id={bannerId}>
            <div className="row py-5   justify-content-center">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center text-white style-titles" >
                   <h1 className="text-center shadow-1-strong display-2">{title}</h1>
                    <h3>{subtitle}</h3>
                </div>
            </div>
        </div>
    )
}
export default Banner;