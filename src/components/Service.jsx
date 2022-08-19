import React from 'react'
import Sdata from '../data/sdata'
import Card from './Card'
export default function Service() {
    return (
        <div className="services py-5" id="services">
            <div className="my-5">
                <h1 className="text-center title">Our Service</h1>
            </div>
            <div className="container mb-5 px-5">
                <div className="row justify-content-center">
                    {
                        Sdata.map((val, ind) => {
                            return <Card key={ind} imgSrc={val.imgsrc} title={val.title}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    )
}
