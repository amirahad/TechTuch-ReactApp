import React from 'react';
import Button from './Button';


export default function Hero(props) {
    return (
        <section className="hero-container d-flex align-items-center py-5" id='hero'>
            <div className="container-fluid nav_bg pt-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className={props.class1}>
                                <h1 className='title'>{props.title} <strong className='brand-name'>TechTuch</strong></h1>
                                <h2 className="my-3 description">
                                    We are a law firm that provides legal services to businesses and individuals.
                                </h2>
                                <div className="mt-5">
                                    <Button text='Get Started'/>
                                </div>
                            </div>
                            <div className={props.class2 + ' header-image'}>
                                <img src={props.img} alt="hero" className="img-fluid animated" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
