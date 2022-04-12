import React, {useState} from "react";
import {Carousel} from "react-bootstrap";
import {Link} from "react-router-dom";

const data = [
    {
        image: require('../../assets/images/hero-1.jpg'),
        caption:"It’s Time To Take Control!",
        description:"Reduce Your Energy Bills",
    },
    {
        image:require('../../assets/images/hero-2.jpg'),
        caption:"Change to Clean Renewable Energy",
        description:"Description Here",
    },
    {
        image:require('../../assets/images/hero-5.jpg'),
        caption:"Caption",
        description:"Description Here",
    },
]

function My_Carousel() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel fade activeIndex={index} onSelect={handleSelect}>
            {data.map((slide, i) => {
                return (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slide.image}
                            alt="slider image"
                        />
                        <Carousel.Caption>
                            <h3>{slide.description}</h3>
                            <h1>{slide.caption}</h1>
                            <Link to="/education" className="btn-lg btn-dark text-white" role="button">Learn More...</Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}

        </Carousel>
    );
}
export default My_Carousel;