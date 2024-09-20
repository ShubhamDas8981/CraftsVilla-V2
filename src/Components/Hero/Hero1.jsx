import React, { useState, useEffect } from 'react';
import './Hero1.css';
// import hand_icon from '../Assets/hand_icon.png';
// import arrow_icon from '../Assets/arrow.png';
import hero_image1 from '../Assets/craftsvilla_images_slider/home_1.jpg';
import hero_image2 from '../Assets/craftsvilla_images_slider/home_2.jpg';
import hero_image3 from '../Assets/craftsvilla_images_slider/home_3.jpg';
import hero_image4 from '../Assets/craftsvilla_images_slider/home_4.jpg';
import hero_image5 from '../Assets/craftsvilla_images_slider/home_5.jpg';
import hero_image6 from '../Assets/craftsvilla_images_slider/home_6.jpg';
import hero_image7 from '../Assets/craftsvilla_images_slider/home_7.jpg';
import hero_image8 from '../Assets/craftsvilla_images_slider/home_8.jpg';
//src\Components\Assets\craftsvilla_images_slider
const Hero1 = () => {
    const images = [hero_image1, hero_image2, hero_image3,hero_image4,hero_image5,hero_image6,hero_image7,hero_image8];
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 3000); // Change image every 2 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [images.length]);

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="hero1">
            <div className="hero1-slider">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className={index === currentSlide ? 'active' : 'inactive'}
                    />
                ))}
            </div>
            <div className="hero1-dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={index === currentSlide ? 'dot active' : 'dot'}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Hero1;
