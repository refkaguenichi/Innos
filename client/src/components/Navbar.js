import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser as logout } from '../JS/authSlice';

const Navbar = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const dispatch = useDispatch();
  
    const handleLogout = () => {
      // Dispatch action for logout
      dispatch(logout());
    };
  return (
    <nav className="navbar">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      {!isAuthenticated && (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
      {isAuthenticated && (
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      )}
    </ul>
  </nav>
  )
}

export default Navbar