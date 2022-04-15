import React from 'react';
import BasicSection from '../common/BasicSection';
import PlanetImage from '../../assets/images/planet.png'


function MissionSection() {
    return (
        <div className="section_container">
            <BasicSection
                src={PlanetImage}
                title={<>~ OUR <span style={{ color: '#4cb269'}}>MISSION</span> ~</>}
                icon={<i className="fa-solid fa-bolt"/>}
                subtitle={'Powering a green future!'}
                text={'Our mission is to provide maximum value for our customers through the installation of high-quality, innovative solar and wind energy systems. We achieve this by offering a wide variety of design and financing options while delivering superior customer service.'}
                children= "Contact Us Now >"
                buttonStyle={"my-btn--primary my-btn--large-dark buttons"}
                url={"/quote"}
            />
        </div>
    );
}

export default MissionSection;