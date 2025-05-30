const router = require("express").Router();
const { Aboutme } = require("./controller/About/Aboutme");
const { getAbout } = require("./controller/About/getAbout");
const { createCategory, getAllCategory } = require("./controller/categories/category");
const { portfolio } = require("./controller/portfolio/addPortfolio");
const { getPortfolio, getPortfolioById } = require("./controller/portfolio/getPortfolio");

//About
router.get('/about', getAbout)
router.post('/add/about', Aboutme)
//Portfolio
router.get('/get/portfolio', getPortfolio);
router.get('/get/portfolio/:id', getPortfolioById);
router.post('/add/portfolio', portfolio);
router.post('/create/category', createCategory);
router.get('/get/category', getAllCategory);
module.exports = router