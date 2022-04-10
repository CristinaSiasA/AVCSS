import React from 'react';
import './missionSection.css';
import BasicSection from '../common/BasicSection';
import PlanetImage from '../../assets/images/planet.png'


function MissionSection() {
    return (
        <div className="Container-GoGreen">
            <BasicSection
                src={PlanetImage}
                subtitle={'Ready to Save Money?'}
                title={'With AVCSS Renewals Going Green is Easy!'}
                text={'AVCSS Renewables is one of the leading installers of residential and commercial solar electric panels and wind turbines in Ireland. Our experienced team makes it easy to add solar to your home or business. Get your free quote today!'}
                children= "Contact Us Now >"
                buttonStyle={"my-btn--secondary my-btn--large buttons"}
                url={"/education"}
            />
        </div>
    );
}

export default MissionSection;