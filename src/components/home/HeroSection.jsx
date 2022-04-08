import React, {useState} from "react";
import './heroSection.css'
import HeroVideo from '../../assets/videos/hero.mp4';
import NewButton from "../common/NewButton";

function HeroSection() {

    return(
        <div className="hero_container">
            <video loop autoPlay muted>
           <source src={HeroVideo} type="video/mp4" />
            </video>
            <div className="caption_container">
            <h3>It’s Time to Take Control!</h3>
            <h1>Reduce Your <span style={{ color: '#4cb269'}}>Energy</span> Bills <br/> With Clean <span style={{ color: '#68c2c2'}}>Renewable </span>  Energy</h1>
            <div className="hero_buttons">
                <NewButton buttonStyle='my-btn my-btn--primary my-btn--large' url={'/solar'}>Solar Energy <i className="fa-regular fa-sun"/> </NewButton>
                <NewButton buttonStyle='my-btn my-btn--secondary my-btn--large' url={'/wind'}>Wind Energy <i className="fa-solid fa-wind"/> </NewButton>
            </div>
            </div>
        </div>
    )
}
export default HeroSection;