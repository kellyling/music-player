
const express = require('express')

const controller = express.Router()

controller.prefix = '/login'

controller.get('/',(req,res) => {
	// TODO
	// res.send('login')

	res.render('login')
})

controller.post('/',(req,res) => {
	// res.send(req.body)
	const {email,password} = req.body
})


module.exports = controller