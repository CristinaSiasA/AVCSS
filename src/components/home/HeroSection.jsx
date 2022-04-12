import React, {useState} from "react";
import './heroSection.css'
import HeroVideo from '../../assets/videos/hero.mp4';
import Button from "../common/Button";

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
                <Button buttonStyle='my-btn my-btn--primary my-btn--large' url={'/solar'}>Solar Energy <i className="fa-regular fa-sun"/> </Button>
                <Button buttonStyle='my-btn my-btn--secondary my-btn--large' url={'/wind'}>Wind Energy <i className="fa-solid fa-wind"/> </Button>
            </div>
            </div>
        </div>
    )
}
export default HeroSection;