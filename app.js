/********引入模块*******/
global.express = require('express');
global.ejs = require('ejs');
global.bodyParser = require('body-parser');
global.mysql = require('mysql');
global.multer=require('multer');        //子路由
global.app = express();
global.session = require('express-session');        //session模块
global.svgCaptcha = require('svg-captcha'); //验证码的中间键
//接受post过来的数据
app.use(bodyParser.urlencoded({ extended: true }));   //接收form-data
app.use(bodyParser.json());  //接收json格式的数据
//建立数据库连接
global.mydb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    port: 3306,
    database: 'nodeserver',
    multipleStatements: true
});
mydb.connect();

//自定义ejs模板
app.engine('html',ejs.renderFile);    //定义模板引擎，自定后缀是html
app.set("views",'views');        //指定模板文件所在的文件夹
app.set('view engine','html');        //注册模板引擎到express
    
// 开启session
let secret = 'moc.01815h.www';
app.use(session({
    secret: secret,
    name:'sessid1810',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge:24*3600000}
  }))

//各种路由
app.get('/',(req,res)=>{
	res.render("example.html");
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

app.use(express.static(__dirname+'/uploads'));
//设置监听端口
app.listen(81, () => {
    console.log('服务器在端口号81监听中...');
})