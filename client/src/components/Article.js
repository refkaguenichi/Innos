import React from 'react'

const Article = ({article}) => {
    const formatDate = (dateString) => {
        const options = {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
        };
      
        const date = new Date(dateString);
        return date.toLocaleString('en-GB', options);
      };
      
  return (
    <div key={article._id}>
        {article.title && <h2 className='fw-bolder'><u className='text-primary'>Title:</u>{article.title}</h2>}
        {article.abstract && <p className='text-muted fs-5'><u className='text-primary'>Abstract: </u>{article.abstract}</p>}
        {(article.description || article.body) && <p><u className='text-primary'>Description:</u>{article.description || article.body}</p>}
        {article.author && <span ><u className='text-primary'>Author:</u>{article.author}</span>}
        {article.url && <><br/><span ><u className='text-primary'>Url:</u>{article.url}</span></>}
        {article.content && <p ><u className='text-primary'>Content:</u>{article.content}</p>}
        {(article.publishedAt || article.dateTime) && <small ><u className='text-primary'>Published at :</u>{formatDate(article.publishedAt || article.dateTime)}</small>}
    </div>
  )
}

export default Article