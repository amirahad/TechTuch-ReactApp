import React from 'react';


export default function Hero(props) {
    return (
        <section className="hero-container d-flex align-items-center py-5">
            <div className="container-fluid nav_bg pt-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5  order-2 order-lg-1">
                                <h1 className='title'>{props.title} <strong className='brand-name'>Lawde</strong></h1>
                                <h2 className="my-3 description">
                                    We are a law firm that provides legal services to businesses and individuals.
                                </h2>
                                <div className="mt-5">
                                    <a href className=' btn-get-started'>Get Started</a>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-image">
                                <img src={props.img} alt="hero" className="img-fluid animated" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
