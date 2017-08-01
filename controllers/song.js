
const express = require('express')

const controller = express.Router()

controller.prefix = '/song'

controller.get('/',(req,res) => {
	// TODO:
	res.send('song')

	// res.render('song')
})


module.exports = controller