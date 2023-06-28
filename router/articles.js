const express = require("express");
const router = express.Router();

const { getArticles } = require("../controllers/articles.controllers");
// const isAuth = require("../middlewares/isAuth");

// get articles
router.get('/', getArticles)


module.exports = router;