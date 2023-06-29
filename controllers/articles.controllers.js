const axios = require('axios');
const { getParams, refactResult } = require("../services/articles.services");

exports.getArticles=async (req, res) => {
    let {url, params, resultType} = getParams(req.query)
    console.log('uuuuuuuuuuuuuu', url, params, resultType)
    try {
      const response = await axios.get(url, {params:params});
      console.log('response', response)
      res.status(200).json(resultType(response));
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  }