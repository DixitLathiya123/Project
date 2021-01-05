import React, { useState } from 'react'
import { Carousel} from 'react-bootstrap'
import s1 from '../../Assets/Image/SliderImage/Image1.jpg'
import s2 from '../../Assets/Image/SliderImage/Image2.jpg'
import s3 from '../../Assets/Image/SliderImage/Image4.jpg'

function Slider() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        src={s1}
                        alt="First slide"
                        height="70%"
                        width="100%"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={s2}
                        alt="Second slide"
                        height="70%"
                        width="100%"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={s3}
                        alt="Third slide"
                        height="70%"
                        width="100%"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default Slider