import React from 'react';
import './brandsSection.css';
import brand1 from '../../assets/images/brands-1.png';
import brand2 from '../../assets/images/brands-2.png';
import brand3 from '../../assets/images/brands-3.png';
import brand4 from '../../assets/images/brands-4.png';
import brand5 from '../../assets/images/brands-5.png';


const BrandSection = () => (
    <div className="container_brand_section">
        <div>
            <h1> ~ WE <span style={{ color: '#4cb269'}}>WORK</span> WITH THE BEST <span style={{ color: '#4cb269'}}>BRANDS</span> ~</h1>
        </div>
        <div className="brands_wrapper">
            <div className="brand_logo">
                <img src={brand1} alt={'brand-logo'} />
            </div>
            <div className="brand_logo">
                <img src={brand2} alt={'brand-logo'}/>
            </div>
            <div className="brand_logo">
                <img src={brand3} alt={'brand-logo'}/>
            </div>
            <div className="brand_logo">
                <img src={brand4} alt={'brand-logo'}/>
            </div>
            <div className="brand_logo">
                <img src={brand5} alt={'brand-logo'} />
            </div>
         </div>
    </div>
);

export default BrandSection;