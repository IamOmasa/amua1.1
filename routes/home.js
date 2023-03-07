//handle initial get
//handle post request fot adding new members

const express = require("express")
const router = express.Router()
const homeController = require('../controllers/home')
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get('/',ensureAuth, homeController.getIndex)//read
// router.get("/", homeController.getMember)
router.post('/new', homeController.createMember)

module.exports = router