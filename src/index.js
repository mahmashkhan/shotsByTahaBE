const router = require("express").Router();
const { Aboutme } = require("./controller/About/Aboutme");
const { getAbout } = require("./controller/About/getAbout");
const { createCategory, getAllCategory } = require("./controller/categories/category");
const { addHighlight } = require("./controller/Highlights/addHighlights");
const { getHighlight } = require("./controller/Highlights/getHighlights");
const { getLandingImage } = require("./controller/landingVideo/getLandingImage");
const { landing } = require("./controller/landingVideo/landingImage");
const { portfolio } = require("./controller/portfolio/addPortfolio");
const { getPortfolio, getPortfolioById } = require("./controller/portfolio/getPortfolio");
const { editPortfolio } = require('./controller/portfolio/editPortfolio');
const { deletetheportfolio } = require('./controller/portfolio/deletePortfolio');
const { editAbout } = require("./controller/About/editAbout");
const { deleteAbout } = require("./controller/About/deleteAbout");
const { addTeam, upload } = require('./controller/team/addTeam')
const { getTeam } = require('./controller/team/getTeam')
const { editTeam, updatedUpload } = require('./controller/team/editTeam')
const { deleteTeam } = require('./controller/team/deleteTeam');
const { contact } = require('./controller/Contact/contact');

//About
router.get('/about', getAbout)
router.post('/add/about', Aboutme)
router.put('/edit/about/:id', editAbout)
router.delete('/delete/about/:id', deleteAbout)
//Portfolio
router.get('/get/portfolio', getPortfolio);
router.get('/get/portfolio/:id', getPortfolioById);
router.post('/add/portfolio', portfolio);
router.put('/update/portfolio/:id', editPortfolio);
router.delete('/delete/portfolio/:id', deletetheportfolio);
router.post('/create/category', createCategory);
router.get('/get/category', getAllCategory);

//LandingVideo  
router.post('/add/landing', landing);
router.get('/get/landing', getLandingImage);

//highlights
router.post('/add/highlight', addHighlight)
router.get('/get/highlight', getHighlight)

//Team
router.post('/add/team', upload.single('image'), addTeam)
router.get('/get/team', getTeam)
router.put('/edit/team/:id', updatedUpload.single('image'), editTeam)  
router.delete('/delete/team/:id', deleteTeam)

//Contact
router.post('/contact',contact)
module.exports = router