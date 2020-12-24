import React, { useState } from 'react'
import { Carousel} from 'react-bootstrap'
import s1 from './SliderImage/Image1.jpg'
import s2 from './SliderImage/Image2.jpg'
import s3 from './SliderImage/Image3.jpg'
function Slider() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="slider">
            <Carousel activeIndex={index} onSelect={handleSelect}>/
                <Carousel.Item>
                    <img
                        src={s1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={s2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={s3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider
