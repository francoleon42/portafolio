import React, { useEffect, useState } from 'react'; // Importar useEffect y useState de 'react'
import { certificates } from '../../utils/Data'; // Asegúrate de que el archivo Data.js exporte certificates correctamente
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"; // Importar ambos iconos en una sola línea
import './certificates.css'; // Asegúrate de que el archivo CSS exista

const Certificates = () => {
    const [operator, setOperator] = useState(0);
    const [count, setCount] = useState(1);
    const [widthImg, setWidthImg] = useState(100 / certificates.length); // Definir widthImg basado en el número de certificados

    useEffect(() => {
        const interval = setInterval(() => {
            moveToRight();
        }, 3000);

        return () => clearInterval(interval);
    }, [operator]);

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
                                <img src={img} alt={`certificate_img_${index}`} /> {/* Uso de índice en el alt para mejorar accesibilidad */}
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
