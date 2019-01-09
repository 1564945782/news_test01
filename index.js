//模块引入
global.express = require('express');
global.ejs = require('ejs');
global.bodyParser = require('body-parser');
global.md5 = require('md5');
global.mysql = require('mysql');
global.async = require('async');
global.session = require('express-session');
global.cookieParser = require('cookie-parser');
global.svgCaptcha = require('svg-captcha');
global.multer = require('multer');

//定义各种参数
global.hostname = 'http:localhost:81/';
global.secret = 'sports.app.myweb.www';
//启用中间件
global.app = express();
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());
app.use(cookieParser(secret));

// 启用session
app.use(session({
    secret: secret,
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 30 * 24 * 3600 * 1000
    }
}));


//ejs模板引擎设置
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', 'views');



//数据库连接
global.conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0801410',
    port: 3306,
    database: 'photoapp'
});
conn.connect();

//文件上传  使用multer中的API：diskStorage    //destination存放路径      //filename文件命名方式   		
global.diskstorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, `./uploads/${new Date().getFullYear()}/${(new Date().getMonth()+1).toString().padStart(2, '0')}`);
    },
    filename: function(req, file, cb) {
        let filename = new Date().valueOf() + '_' + Math.random().toString().substr(2, 8) + '.' + file.originalname.split('.').pop();
        cb(null, filename)
    }
});
// 上传文件夹设置  //存放在uploads里面的年、月文件夹里面
global.upload = multer({ storage: diskstorage });

//验证码图片
app.get('/coders', (req, res) => {
    var captcha = svgCaptcha.create({
        noise: 4,
        ignoreChars: '0oli',
        size: 2,
        inverse: true,
        fontSize:84,
        background: 'rgba(255, 152, 0, 0.43)',
        height: 50,
        width: 150
    });
    console.log(req.session);
    console.log('验证码图片');
    console.log(captcha.text);
    coders = captcha.text;
    req.session.coders = captcha.text;
    res.type('svg');
    res.status(200).send(captcha.data);
});

// 方便测试---后面要删除
app.use(function(req, res, next) {
    req.session.uid = 1;
    req.session.u_name = 'leaf';
    next();
});


//消息的页面
app.get('/', (req, res) => {
    console.log("消息");
    // console.log(req.session);
    // console.log(req.session.uid);
    res.render('head');

});



//子路由   艾杰明
app.use('/ajm', require('./module/ajm/ajm'));
//子路由   范力川
app.use('/flc', require('./module/flc/flc'));
//子路由   王兰
app.use('/wl', require('./module/wl/wl'));

//资源托管
app.use(express.static('static'));

//设置监听端口
app.listen(81, () => {
    console.log('服务器启动成功...');
})