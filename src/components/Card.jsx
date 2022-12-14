import React from 'react'
import Button from './Button'



export default function Card(props) {
    return (
        <>
            <div className="col-xl-4 col-md-6 col-sm-12 mx-auto">
                <div className="card pb-3" >
                    <img src={props.imgSrc} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Button text="Go Somewhere"/>
                    </div>
                </div>
            </div>
        </>
    )
}
