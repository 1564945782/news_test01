const cookieParser = require('cookie-parser');
const session = require('express-session');
const svgCaptcha = require('svg-captcha');
//二级子路由操作
const router = express.Router();

//开启cookie
let secret = 'moc.01815h.www';
router.use(cookieParser(secret));
// 开启session
router.use(session({
    secret: secret,
    name:'sessid1810',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge:24*3600000}
}))


router.get('/recommend',(req,res)=>{
	let sql=`select * from news_flc where classify=1 limit 0,1;
			select * from news_flc where classify=2 limit 0,1;
			select * from news_flc where classify=3 limit 0,2;`;
	mydb.query(sql,(err,result)=>{
		if(err){console.log("在数据库查找数据时发生了错误："+err)}
		else{
			res.render('flc/recommend.html',{
				text:result[0],
				video:result[1],
				imgs:result[2],
			})
		}
	})
	
})
router.get('/publish',(req,res)=>{
	res.render('flc/publish.html')
})
router.get('/detail',(req,res)=>{
	var type=req.query.type;
	var num=req.query.num;
	console.log(type+" "+num)
	console.log('flc/'+type+'/'+num+'.html')
	res.render('flc/'+type+'/'+num+'.html',{title:"习近平"})
})

let captcha;
router.get('/code',(req,res)=>{
	captcha=svgCaptcha.create({
		background:"#999",
		color:false,
		width:78,
		noise:3,
		height:32,
		fontSize:30,
		ignoreChars:'0o1i'
	});
	// console.log(captcha.text);
	// 把图片上的文字信息存储在session里面
	req.session.coder = captcha.text;
	res.type('svg');
	res.status(200).send(captcha.data);
})
router.post('/login',(req,res)=>{
	let body=req.body;
	let sql="select * from user_info where number=?";
	mydb.query(sql,[body.number],(err,result)=>{
		if(err){
			console.log('在添加数据到数据库时发生了错误：'+err);
			return;
		}
		else{
			if(result.length!=1){
				res.send('number_not_exist');
			}else if(result[0].pwd!=body.pwd){
				res.send('pwd_err');
			}else if(body.code.toLowerCase()!=captcha.text.toLowerCase()){
				res.send('code_err');
			}else{
				res.send('ok');
			}
		}
	})
})
router.post('/regist',(req,res)=>{
	let body=req.body;
	console.log(body);
	let sql="insert into user_info(nickname,pwd,tel,time) values (?,?,?,NOW())";
	mydb.query(sql,[body.nickname,body.pwd,body.tel],(err,result)=>{
		if(err){
			console.log('在添加数据到数据库时发生了错误：'+err);
			return;
		}
		else{
			res.send('ok');
		}
	})
})
module.exports = router;
