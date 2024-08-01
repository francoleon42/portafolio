import React, { useEffect, useState, useCallback } from 'react';
import { certificates } from '../../utils/Data';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import './certificates.css';

const Certificates = () => {
    const [operator, setOperator] = useState(0);

    const widthImg = 100 / certificates.length;

    const moveToLeft = useCallback(() => {
        setOperator(prevOperator => {
            const newOperator = prevOperator === 0 ? (certificates.length - 1) * widthImg : prevOperator - widthImg;
            return newOperator;
        });
    }, [widthImg]);

    const moveToRight = useCallback(() => {
        setOperator(prevOperator => {
            const newOperator = prevOperator === (certificates.length - 1) * widthImg ? 0 : prevOperator + widthImg;
            return newOperator;
        });
    }, [widthImg]);

    useEffect(() => {
        const interval = setInterval(() => {
            moveToRight();
        }, 3000);

        return () => clearInterval(interval);
    }, [moveToRight]);

    return (
        <section id='certificate' className='certificate container'>
            <h2 className='certificate__title'>Mis certificaciones</h2>
            <div className="certificate__content">
                <div className="container__carousel">
                    <div
                        className="carousel"
                        style={{ transform: `translate(-${operator}%)`, transition: 'all ease .6s' }}
                    >
                        {certificates.map(({ img }, index) => (
                            <article key={index} className="slider-section">
                                <img src={img} alt={`certificate_img_${index}`} />
                            </article>
                        ))}
                    </div>
                    <button className="btn-left" onClick={moveToLeft}>
                        <IoIosArrowBack />
                    </button>
                    <button className="btn-right" onClick={moveToRight}>
                        <IoIosArrowForward />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Certificates;
