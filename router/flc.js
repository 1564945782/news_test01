//二级子路由操作
const router = express.Router();
router.get('/recommend',(req,res)=>{
	res.render('flc/recommend.html')
})


router.post('/login',(req,res)=>{
	let body=req.body;
	console.log(body);
	let sql="select * from user_info where number=? and pwd=?";
	mydb.query(sql,[body.number,body.pwd],(err,result)=>{
		if(err){
			console.log('在添加数据到数据库时发生了错误：'+err);
			return;
		}
		else{
			if(result.length>0){
				res.send('ok');
			}else{
				res.send('fail');
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
