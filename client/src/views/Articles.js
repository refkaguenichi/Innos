import React from 'react'

const Articles = () => {
  return (
    <div className='articles'>
    {[{id:'1', title:'aaaaaa'}, {id:'2', title:'bbbbbbb'}, {id:'1', title:'ccccccc'}].map((article) => (
      <div key={article.id}>{article.title}</div>
    ))}
  </div>
  )
}

export default Articles