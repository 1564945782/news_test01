const router = express.Router();
router.get('/recommend',(req,res)=>{
	res.render('flc/recommend.html')
})



module.exports = router;