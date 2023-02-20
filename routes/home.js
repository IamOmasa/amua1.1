//handle initial get
//handle post request fot adding new members

const express = require("express")
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/', homeController.getIndex)//read
router.get("/:id", homeController.getMember)
router.post('/new', homeController.createMember)

module.exports = router