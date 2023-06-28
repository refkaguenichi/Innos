import React from 'react'

import { useDispatch } from 'react-redux';
import { fetchArticles } from '../JS/articlesSlice';

const Filter = () => {
    const dispatch = useDispatch();
    const getArticles=()=>{
      dispatch(fetchArticles({type:'nytimes'}));
    }
  return (
<div className='row'>
    <select onChange={getArticles} className='col-sm-2 m-2'>
    <option value='nytimes'>Newyork times</option>
    <option value='newsapi.org'>News.org</option>
    <option value='newsapi'>News</option>
    <option value='gnews'>Gnews</option>
    </select>
    <select className='col-sm-2 m-2'>
    <option value='popularity'>Popularity</option>
    <option value='date'>Date</option>
    </select>
    <input type="date" placeholder='From' className='col-sm-2 m-2'/>
    <input type="date" placeholder='To' className='col-sm-2 m-2'/>
    <input type="text" placeholder='Write keyword for search' className='col-sm-2 m-2'/>
    </div>
  )
}

export default Filter