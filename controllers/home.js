
const express = require('express')

const controller = express.Router()

controller.prefix = '/'

controller.get('/',(req,res) => {
	// TODO:
	res.send('home')

	// res.render('home')
})


module.exports = controller