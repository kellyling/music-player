
const express = require('express')

const controller = express.Router()

controller.prefix = '/user'

controller.get('/',(req,res) => {
	// TODO:
	res.send('user')

	// res.render('user')
})


module.exports = controller