// src/LoginForm.js
import React, {useState} from 'react';
import './login.css';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [firstname, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [contact , setNumber] = useState('');



  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to API
    console.log('Email:', email);
    console.log('First Name:', email);
    console.log('Last name:', email);
    console.log('Phone no.:', email);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First name</label>
        <input
          type="name"
          value={firstname}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Last name:</label>
        <input
          type="name"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Phone no.:</label>
        <input
          type="number"
          value={contact}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">JOIN US</button>
    </form>
  );
};

export default LoginForm;
