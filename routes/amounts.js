const express = require('express')
const router = express.Router()
const amountsController = require('../controllers/amounts')

router.get('/:id',amountsController.getAmount)
router.post('/createAmount/:id', amountsController.createAmount)
// router.get('/remove/:id', amountsController.deleteAmount)
// router.post('/update/:id', amountsController.updateAmount)


module.exports = router