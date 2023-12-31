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
                q: query,
                'api-key': apiKey,
               },
               resultType:(response)=> {return response?.data?.response?.docs}
            }
       case 'newsapi.org':
            apiKey = 'f73d27a1aa8746a4ad7fdbcad0c2e9ee'
            query = q.filter || 'apple' || 'tesla'
            return {
            url : 'https://newsapi.org/v2/everything',
            params : {
                'q': query,
                'apiKey': apiKey,
              },
              resultType:(response)=> {return response?.data?.articles}
            }
       case 'newsapi':
        apiKey = 'b3f68329-19c2-48e5-95c4-e9ce2e248e75'
        query = q.filter || 'Bitcoin'
        return {
            url: 'https://eventregistry.org/api/v1/article/getArticles?resultType=articles',
            params: {
                'keyword': query,
                'apiKey': apiKey,
              },
              resultType:(response)=> {return response?.data?.articles?.results}
            }
       case 'gnews':
            apiKey = '3e7a29b893db55c18274fdc02f4229e6'
            return {
                url : 'https://gnews.io/api/v4/search?q=example',
            params :  {
                'apiKey': apiKey,
                },
                resultType:(response)=> {return response?.data?.articles}
            }
       default:
        apiKey = 'Y6NDArm13Chd2pGikeLoCI4ZWjVZCrh7'
        return{
            url : 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
            params : {
                'api-key': apiKey,
               },
               resultType:(response)=> {return response?.data?.response?.docs}
            } 
    }  
}