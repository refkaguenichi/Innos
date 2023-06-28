exports.getParams=(q)=>{
    let apiKey = '';
    let query = {};
    switch(q.type){
       case 'nytimes':
        apiKey = 'Y6NDArm13Chd2pGikeLoCI4ZWjVZCrh7'
        query = q.filter || 'technology'
        return{
            url : 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
            params : {
                // q: query,
                'api-key': apiKey,
               }
            }
       case 'newsapi.org':
            apiKey = 'f73d27a1aa8746a4ad7fdbcad0c2e9ee'
            query = q.filter || 'apple'
            return {
            url : 'https://newsapi.org/v2/everything?q=apple&from=2023-06-25&to=2023-06-25&sortBy=popularity',
            params : {
                q: query,
                'apiKey': apiKey,
              }
            }
       case 'newsapi':
        apiKey = 'b3f68329-19c2-48e5-95c4-e9ce2e248e75'
        query = q.filter || 'technology'
        return {
            url: 'https://eventregistry.org/api/v1/article/getArticles?resultType=articles&keyword=Bitcoin&keyword=Ethereum&keyword=Litecoin&keywordOper=or&lang=eng&articlesSortBy=date&includeArticleConcepts=true&includeArticleCategories=true&articleBodyLen=300&articlesCount=10',
            params: {
                q: query,
               
                'apiKey': apiKey,
              }
            }
       case 'gnews':
            apiKey = '3e7a29b893db55c18274fdc02f4229e6'
            query =  q.filter || 'technology'
            return {
                url : 'https://gnews.io/api/v4/search?q=example',
            params :  {
                // q: query,
                'apiKey': apiKey,
                }
            }
       default:
           return 
    }
    
}