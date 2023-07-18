import React from 'react';

export default function Contact() {
  return (
    <div>
      <h2 className="d-flex flex-start mx-5 my-2 section-title">Contact</h2>
      <div className="container row">
        <div className="col-6 mx-5 mt-2 p-3 card w-50 d" id="contactCard">
          <div className="mb-3">
            <label for="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div>
            <button type="submit" className="btn mb-3">Submit</button>
          </div>
        </div>
      </div>
      
    </div>
  );
}