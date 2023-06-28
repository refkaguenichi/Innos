import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../JS/authSlice';


const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
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
      dispatch(loginUser(credentials));
    
      // For example, to handle the register form submission:
      // dispatch(registerUser(credentials));
    
      // Clear form inputs
      setCredentials({ username: '', password: '' });
    };
    if (isAuthenticated) {
      navigate('/');
      return null;
    }
  
    return (
      <div className='authenticate'>
      <h2>Login</h2>
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
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
    );
  };

export default Login