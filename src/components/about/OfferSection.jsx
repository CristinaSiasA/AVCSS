import React from 'react';
import "../common/basicSection.css";
import icon from '../../assets/images/AVCSS-icon.png'

function OfferSection() {
    return (
        <div className="section_container_green">
            <div className="container">
                <div className="row m-5" >
                    <div className= "col-xxl-4 col-xl-4 col-lg-4 col-md-4 p-2 section_image" >
                        <img className="main_image" src={icon} alt="AVCSS icon"/>
                    </div>
                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8" >
                        <p className="text-white text-center display-4 pt-lg-4"> "We are passionate about solar and wind energies "</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OfferSection;