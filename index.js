// 通过 node 启动这个文件，作为入口文件

const express = require('express')

const glob = require('glob')

const bodyParser = require('body-parser')

const app = express()

// 配置模版引擎
app.set('view engine','xtpl')
app.set('views','./views')

// 静态资源目录
app.use(express.static('./www'))

// 解析请求体
app.use(bodyParser.urlencoded())



// 配置 controller
glob('./controllers/*.js',(err, files) => {
	// 遍历每一个路径
	files.forEach(file => {
		const controller = require(file)
		if(controller && controller.prefix && controller.get){
			app.use(controller.prefix,controller)
		}
	})
	// console.log(files)
})



// 载入控制器模块，并进行路由

// app.use('/login',require('./controllers/login'))
// app.use('/song',require('./controllers/song'))
// app.use('/user',require('./controllers/user'))

// // 默认请求处理一定要放在最后面
// app.use('/',require('./controllers/home'))



// 监听端口
app.listen(8080,() => {
    console.log('server is ready')
})