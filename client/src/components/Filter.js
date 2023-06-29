import React, { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { fetchArticles, updateQuery } from '../JS/articlesSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({
    type: 'nytimes',
    sortedBy: 'date',
    from: '',
    to: '',
    keyword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
    dispatch(updateQuery({ [name]: value }));
  };
  const resetFilter=()=>{
    setFilter(() => ({
      type: 'nytimes',
      sortedBy: 'date',
      from: '',
      to: '',
      keyword: '',
    }));
    dispatch(updateQuery({
      type: 'nytimes'
    }));
  }
  return (
    <form className='row'>
      <select name='type' value={filter.type} onChange={handleInputChange} className='col-sm-2 m-2'>
        <option value='nytimes'>New York Times</option>
        <option value='newsapi.org'>News.org</option>
        <option value='newsapi'>News</option>
        {/* <option value='gnews'>Gnews</option> */}
      </select>
      <select name='sortedBy' value={filter.sortedBy} onChange={handleInputChange} className='col-sm-2 m-2'>
      <option value='date'>Date</option>
      <option value='popularity'>Popularity</option>
      </select>
      <input type='date' name='from' value={filter.from || ''} onChange={handleInputChange} placeholder='From' className='col-sm-2 m-2' />
      <input type='date' name='to' value={filter.to || ''} onChange={handleInputChange} placeholder='To' className='col-sm-2 m-2' />
      <input type='text' name='keyword' value={filter.keyword || ''} onChange={handleInputChange} placeholder='Write keyword for search' className='col-sm-2 m-2' />
      <button className='btn btn-primary col-sm-1 m-2' onClick={resetFilter}>Reset</button>
    </form>
  );
}

export default Filter;
