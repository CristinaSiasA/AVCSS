import React from 'react';
import './banner.css'

function Banner() {
    return(
        <div className="container-fluid ">
            <div className="row py-5  banner-color justify-content-center">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5 text-center text-white style-titles" >
                   <h1 className="text-center shadow-1-strong display-2">About Us</h1>
                    <h3>We’re bringing Renewable Energy Solutions to Every Home!</h3>
                </div>
            </div>
        </div>
    )
}
export default Banner;