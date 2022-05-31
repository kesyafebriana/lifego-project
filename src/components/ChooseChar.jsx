import { useState, useEffect } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import Images from './Images';

export default function ChooseChar({ slides, character }) {
    const [current, setCurrent] = useState(null);
    const length = slides.length;

    useEffect(() => {
        setCurrent(current === null ? 0 : current);
    }, []);

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
        console.log(current);
        character(current);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
        console.log(current);
        character(current);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className='slider'>
                <RiArrowLeftSLine id='arrow' onClick={prevSlide} />
                {Images.map((image, index) => {
                    return (
                        <div
                            className={index === current ? 'slide active' : 'slide'}
                            key={index}
                        >
                            {index === current && (
                                <img src={image.url} className='img' />
                            )}
                        </div>
                    );
                })}
                <RiArrowRightSLine id='arrow' onClick={nextSlide} />

        </section>
    );
}