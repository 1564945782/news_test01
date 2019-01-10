const router = express.Router();
router.get('/add',(req,res)=>{
	res.send('艾杰明：添加自己想要添加的信息！')
})


module.exports = router;