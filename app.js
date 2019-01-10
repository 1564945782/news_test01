/********引入模块*******/
global.express = require('express');
global.ejs = require('ejs');
global.bodyParser = require('body-parser');
global.mysql = require('mysql');

global.app = express();

//接受post过来的数据
app.use(bodyParser.urlencoded({ extended: true }));

//建立数据库连接
global.mydb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    port: 3306,
    database: 'express_practice_3'
});
mydb.connect();

//自定义ejs模板
app.engine('html',ejs.renderFile);    //定义模板引擎，自定后缀是html
app.set("views",'views');        //指定模板文件所在的文件夹
app.set('view engine','html');        //注册模板引擎到express


//各种路由
app.get('/',(req,res)=>{
	// res.send('今日头条首页的测试')
	res.render("index.html");
})
app.get('/flc',(req,res)=>{
	res.render("./flc/flc.html");
})
app.get('/ajm',(req,res)=>{
	res.render("./ajm/ajm.html");
})
app.get('/wl',(req,res)=>{
	res.render("./wl/wl.html");
})


//各种子路由
app.use('/ajm', require('./router/ajm.js'));
app.use('/flc', require('./router/flc.js'));
app.use('/wl', require('./router/wl.js'));



//静态资源托管
app.use(express.static(__dirname+'/static'));

//设置监听端口
app.listen(81, () => {
    console.log('服务器在端口号81监听中...');
})