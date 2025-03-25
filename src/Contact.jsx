
import React, { useEffect, useState } from 'react';
import './Help.css';
import Fotter from './Fotter';
import Navy from './Navy';

export default function Help() {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [contact, setContact] = useState('');
  let [message, setMessage] = useState('');

  function done(e){
    e.preventDefault();
    const hide = document.getElementById('help')
    if(hide){
      hide.style.display='none'
    }
    const show = document.getElementById('dil')
    if(show){
    show.style.display='block'
    }
  }

  useEffect(() => {    
  }, []);

  return (
    <div>
      <Navy />
      <h1 className='text-center text-dark fs-2 mt-4 mx-5 rounded-4 bg-success' style={{ animation: 'flipInX', animationDuration: '2s', animationDelay: '0.1s', boxShadow: '-5px 14px 18px 2px #006494' }}> Contact US</h1>
      <form>
        <div id='help' className='text-start mt-5 bg-dark text-success h5 p-5 d-lg-flex justify-content-evenly mx-5'>
          <div className='help-main'>
            <label htmlFor="Name">Enter Your Name</label><br />
            <input className='mt-3' type="text" name="Name" id="Name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' required/><br />
            <label htmlFor="Email">Email</label><br />
            <input className='mt-3' type="email" name="Email" id="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email' required /><br />
            <label htmlFor="Contact">Contact</label><br />
            <input className='mt-3' type="number" name="Contact" id="Contact" value={contact} onChange={(e) => setContact(e.target.value)} placeholder='Enter Your Number'  required/><br />
            <label htmlFor="Message">Message</label><br />
            <textarea className='mt-3' name="Message" id="Message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Enter your Message' required></textarea><br />
            <button type="button" onClick={done} className='mt-3 btn btn-outline-secondary text-center text-uppercase'>Submit</button>
          </div>
          <img id='sec-img' src="src/assets/Help.png" alt="" style={{ height: '55vh' }} />
        </div>
      </form>
      <br />
      <h2 id='dil' className='text-danger' style={{ display: 'none' }}>Your Response has been Submitted</h2>
      <br />
      <Fotter />
    </div>
  );
}

