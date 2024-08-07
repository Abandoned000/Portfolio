import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const EmailForm = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault();
    const serviceId = 'service_9xd9rrj'
    const templateId = 'template_z03h0a2'
    const publicKey = 'xP1ttMosIS4an67vf'

    const templateParams ={
      from_name: name,
      from_email: email,
      to_name: "Jerry",
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log('Email sent successfully!', response);
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
  }

 
  return (
    <form onSubmit={handleSubmit} className='emailForm'>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder='Your Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        cols="30"
        rows="10"
        placeholder='Enter messages'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      >
      </textarea>
      <button type='submit'>Send Email</button>
    </form>
  )

};

export default EmailForm;