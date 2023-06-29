import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../JS/articlesSlice';
import Article from '../components/Article';

const Articles = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.articles.query);
  const articles = useSelector((state) => state.articles.articles);
  const status = useSelector((state) => state.articles.status);
  const error = useSelector((state) => state.articles.error);
  useEffect(() => {
    dispatch(fetchArticles(query));
  }, [dispatch, query]);

  return (
    <>
    {status === 'failed' ? <div>Error: {error}</div>
    :status === 'loading'? <div>Loading...</div>:
    <div className='articles'>
      {articles.length!==0 && <span className='fw-bold'>There is {articles.length} articles</span>}
      {articles.length!==0 ? articles.map((article) => (
        <Article article={article}/>
      )):<div>There is No articles!</div>}
    </div>}

    </>
  );
};

export default Articles;
