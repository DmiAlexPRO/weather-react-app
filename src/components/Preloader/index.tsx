import React from 'react';
import './style.scss';

const Preloader: React.FC = () => { //
    const imageSrc = 'img/loaded.gif';
    return (
        <section className="loader-page">
            {/* <img src={imageSrc}  alt="Error page loading" /> */}
            {/* <h1>Данные загружаются</h1> */}
            {/* <p>Пожалуйста ожидайте</p> */}
        </section>
    );
};

export default Preloader;