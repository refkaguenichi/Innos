const axios = require('axios');
const { getParams } = require("../services/articles.services");

exports.getArticles=async (req, res) => {
    let {url, params} = getParams(req.query)
    try {
      const response = await axios.get(url, {params:params});
      // const articles = response.data.response.docs;
      res.status(200).json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  }