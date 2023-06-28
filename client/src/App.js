import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import { fetchArticles } from './JS/articlesSlice';
  
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './views/Home';
import Register from './views/Register';
import Login from './views/Login';
import Navbar from './components/Navbar';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const articles = useSelector((state) => state.articles.articles);
  const status = useSelector((state) => state.articles.status);
  const error = useSelector((state) => state.articles.error);
  const getArticles=()=>{
    dispatch(fetchArticles({type:'nytimes'}));
  }
  // useEffect(() => {
  //   getArticles()
  // }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }
  return (
    <Router>
      <Navbar/>
      <Routes>
        {isAuthenticated ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Navigate to="/login" />} />
        )}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
