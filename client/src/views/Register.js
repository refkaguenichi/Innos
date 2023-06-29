import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';

import { registerUser } from '../JS/authSlice';

const Register = () => {
  const [credentials, setCredentials] = useState({ username: '', email:'', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.auth.error);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  
  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setCredentials((prevCredentials) => ({ ...prevCredentials, [name]: value }));
    };
  const handleFormSubmit = (e) => {
      e.preventDefault();
    
      // Dispatch the appropriate action based on your form logic
      // For example, to handle the login form submission:
      // dispatch(loginUser(credentials));
    
      // For example, to handle the register form submission:
      dispatch(registerUser(credentials));
    
      // Clear form inputs
      setCredentials({ username: '', email:'', password: '' });
    };
    if (isAuthenticated) {
      navigate('/');
      return null;
    }
    return (
      <div className='authenticate'>
        <h2>Register</h2>
        <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="Email">Email:</label>
          <input
            type="text"
            id="uemail"
            name="email"
            value={credentials.email}
            onChange={handleInputChange}
          />
        </div>
        <div >
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
          />
        </div>
        <span className='text-muted'>
          You already have an account 
          <Link to='/login'> Login</Link>
          </span>
          <br/>
        <button type="submit" className='btn btn-primary mt-3'>Register</button>
        {error && <span className='text-danger'>{error}</span>}
      </form>
      </div>
    );
  };
  export default Register