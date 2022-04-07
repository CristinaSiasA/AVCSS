import React from 'react';
import './advantagesSection.css';
import CardItem from '../../components/common/Card_Item';
import image1 from '../../assets/images/hero-1.jpg';
import image2 from '../../assets/images/adv-3.jpg';
import image3 from '../../assets/images/adv-2.PNG';
import image4 from '../../assets/images/hero-2.jpg';

function AdvantagesSection() {
    return (
        <div className='cards'>
            <h1>~ WHY <span style={{ color: '#4cb269'}}>CHOOSE</span> US! ~</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={image1}
                            title='We have the Best-In-Class Products for Your Home or Business'
                            label='Top Technology'
                            path='/education'
                        />
                        <CardItem
                            src={image4}
                            title='Reduce your Energy Bills and Carbon Footprint'
                            label='Savings'
                            path='/solar'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={image3}
                            title='Contact us to Get a Quotation and Financing Plan in Few Hours'
                            label='Easy Financing'
                            path='/quote'
                        />

                        <CardItem
                            src={image2}
                            title='Experienced Professionals to Ensure a Quick and Hassle-Free Installation'
                            label='Fast Installation'
                            path='/about'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AdvantagesSection;