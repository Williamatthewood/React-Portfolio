import React, { useState } from 'react';
import { validateEmail  } from '../utils/helpers';

export default function Contact() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
      handleUnfocus();
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  }

  const handleUnfocus = (e) => {
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    } else {
      setErrorMessage('');
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }

    alert(`Hello ${name}! Thanks so much for your message!`);

    setEmail('');
    setName('');
    setMessage('');
    setErrorMessage('');
  }
  return (
    <div>
      <h2 className="d-flex flex-start mx-5 my-2 section-title">Contact</h2>
      <div className="container row">
        <form className="col-6 mx-5 mt-2 p-3 card w-50 d" id="contactCard">
          <div className="mb-3">
            <label for="name" className="form-label">Name</label>
            <input value={name} name="name" onChange={handleInputChange}
              type="text" className="form-control" 
              placeholder="Name" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email</label>
            <input value={email} name="email" onChange={handleInputChange}
              onBlur={handleUnfocus} type="email" className="form-control" 
              placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea value={message} name='message' onChange={handleInputChange}
              className="form-control" rows="3" placeholder="Your message here..."></textarea>
          </div>
          <div>
            {errorMessage ? (
              <button disabled type="button" onClick={handleFormSubmit} className="btn mb-3">Submit</button>
            ): (
              <button type="button" onClick={handleFormSubmit} className="btn mb-3">Submit</button>
            )
            }
          </div>
        </form>
        {errorMessage && (
          <div>
            <p className="m-2">{errorMessage}</p>
          </div>
        )}
      </div>
      
    </div>
  );
}