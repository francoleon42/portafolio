import React, { useEffect, useState } from 'react';
import { certificates } from '../../utils/Data';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import './certificates.css';

const Certificates = () => {
    const [operator, setOperator] = useState(0);
    const [count, setCount] = useState(1);
    const widthImg = 100 / certificates.length; // Eliminar setWidthImg ya que no se usa

    useEffect(() => {
        const interval = setInterval(() => {
            moveToRight();
        }, 3000);

        return () => clearInterval(interval);
    }, [operator]); // La dependencia está correcta para el uso actual

    const moveToLeft = () => {
        setCount(prevCount => {
            // Calcular nuevo count
            const newCount = prevCount <= 1 ? certificates.length : prevCount - 1;
            // Calcular nuevo operator
            const newOperator = newCount === certificates.length ? 0 : operator - widthImg;
            setOperator(newOperator);
            return newCount;
        });
    };

    const moveToRight = () => {
        setCount(prevCount => {
            // Calcular nuevo count
            const newCount = prevCount >= certificates.length ? 1 : prevCount + 1;
            // Calcular nuevo operator
            const newOperator = newCount === 1 ? 0 : operator + widthImg;
            setOperator(newOperator);
            return newCount;
        });
    };

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
