import React from 'react';
import './goGreenSection.css';
import BasicSection from '../common/BasicSection';
import PlanetImage from '../../assets/images/planet.png'


function GoGreenSection() {
    return (
        <div>
            <BasicSection
                src={PlanetImage}
                subtitle={'Ready to Save Money?'}
                title={'With AVCSS Renewals Going Green is Easy!'}
                text={'AVCSS Renewables is one of the leading installers of residential and commercial solar electric' +
                'panels and wind turbines in Ireland. From tax credit assistance to easy financing, ' +
                'our experienced team of pros makes it easy to add solar to your home or business.' +
                'Get your free quote today!'}
            >
            </BasicSection>

        </div>
    );
}

export default GoGreenSection;