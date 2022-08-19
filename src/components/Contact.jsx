import React, { useState } from "react";

export default function Contact() {
    const [ data,setData ] = useState({
        fullname: '',
        email: '',
        phone: '',
        msg:''
    })

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        } );
    } 


    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullname}. My email is ${data.email}. My phone number is ${data.phone}. My message is ${data.msg}`)
    }
    

  return (
    <div className="services py-5">
      <div className="mb-5">
        <h1 className="text-center title">Contact Us</h1>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email address:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput2" className="form-label">
                  Enter Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput2"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput3" className="form-label">
                  Phone Number:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput3"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Enter your Phone Number"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea4" className="form-label">
                  Message:
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea4"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  rows="3"
                ></textarea>
              </div>
              <div className="col-12">
                <button className="button px-5" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
