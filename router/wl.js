const router = express.Router();
const axios = require('axios')
const cheerio = require('cheerio')
// ##############

// ######################

// 搞笑界面
router.get('/funny',(req,res)=>{
	res.render('wl/funny');
})

// 娱乐界面
router.get('/entertainment',(req,res)=>{
	//返回数据   成都
	console.log(req.query.ajax_a);
	console.log(req.query.c_url);
	let city_url=req.query.c_url;
	if(!city_url){
		city_url='http://www.weather.com.cn/weather/101270101.shtml';
	}
	console.log(city_url);

	var weatherData = {};
	// ##########
	// 天气数据
	let data;
	axios.get(city_url)
	.then(function (response) {
		const $ = cheerio.load(response.data)
		data=[];
		$('#7d li').each(function(){
			var $this = $(this);

          // 使用trim去掉数据两端的空格
          data.push({
          	title : trim($this.find('.sky h1').text()),
          	wea: trim($this.find('.sky .wea').text()),
          	leg: trim($this.find('.sky .tem').text())
          });
      })
		function trim(str){
			return str.replace(/(^\s*)|(\s*$)/g, "");
		}
		weatherData.data=data;
		console.log(weatherData);
		if(req.query.ajax_a==1){
			res.json(weatherData);
		}else{
			
			res.render('wl/entertainment',weatherData);
		}
		
	})
	.catch(function (error) {
		console.log(error);
	});
})




module.exports = router;