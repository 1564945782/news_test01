router = express.Router();

//newshot路由
router.get('/news_hot', (req, res) => {

    let wholi = req.query.wholi;

    let sql = 'select * from news';
    mydb.query(sql, [], (err, result) => {
        // console.log(wholi)
        res.render('./ajm/news_hot.html', { result: result, wholi: wholi });  //ejs定义在view里面找模板，所以这里用./
    })
})

// 搜索路由 
// axios 模块 在客户端script方式引入，是对ajax的封装，ajax是在客户端发起的
router.get('/search', (req, res) => {
    // console.log(req.query.keywords)
    if (req.query.keywords) {
        let sql = 'select * from news where title like ?';
        mydb.query(sql, ['%' + req.query.keywords + '%'], (err, result) => {
            // console.log(result)
            res.render('ajm/search', { result: result })
        })
    }

})

//上传路由
router.get('/upload', (req, res) => {
    res.render('ajm/release_new')
})

//数据接收：文本和文件的数据流
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');  //上传的文件存在服务器中的地址
    },
    filename: function (req, file, cb) {
        cb(null,
            Date.now() + '_' +
            Math.random().toString().substr(2, 6) + '.' +
            file.originalname.split('.').pop()
        )
    }
})
let upload = multer({ storage: storage });

let fields = [//中间键要处理的数据   对应表单的name属性
    { name: 'title', maxCount: 1 },
    { name: 'newsimgfrom', maxCount: 1 },
    { name: 'sourselogfrom', maxCount: 1 },
    { name: 'sourcefrom', maxCount: 1 },
    { name: 'pinglunnum', maxCount: 1 },
    { name: 'kind', maxCount: 1 },
    {name:'yanzheng',maxCount: 1 }
]

// 开启session

router.post('/releasenews', upload.fields(fields), (req, res, next) => {  //这个中间键处理所有以form方式提交的数据
    //接收上传上来的文件
    // req.file 是 `avatar` 文件的信息
    // req.body 将具有文本域数据，如果存在的话

    // console.log(req.files,req.body.title,req.body.pinglunnum,req.body.kind,req.body.sourcefrom);

    //    console.log(req.files.newsimgfrom[0]. filename)

    // res.render('ajm/release_new',{img:req.files.newsimgfrom[0].filename,logo: req.files.sourselogfrom[0].filename});
    
    if(req.session.coder==req.body.yanzheng){
        let sql = 'select * from news where title=?';
        mydb.query(sql, [req.body.title], (err, result) => {
    
            if (result.length == 0) {
                // 有图片时候的上传数据库
                if (req.files.newsimgfrom) {
                    let sql2 = 'insert into news (title,newsimgfrom,sourselogfrom,sourcefrom,pinglunnum,kind) values(?,?,?,?,?,?)';
                    mydb.query(sql2,
                        [req.body.title, '/' + req.files.newsimgfrom[0].filename, '/' + req.files.sourselogfrom[0].filename, req.body.sourcefrom,
                        req.body.pinglunnum, req.body.kind
    
                        ], (err, result) => {
                            res.send('提交成功！')
                        })
                } else {
                    //    没有图片时候的上传数据库
                    let sql2 = 'insert into news (title,sourselogfrom,sourcefrom,pinglunnum,kind) values(?,?,?,?,?)';
                    mydb.query(sql2,
                        [req.body.title, '/' + req.files.sourselogfrom[0].filename, req.body.sourcefrom,
                        req.body.pinglunnum, req.body.kind
    
                        ], (err, result) => {
                            res.send('提交成功！')
                        })
                }
    
            } else {
                res.send('新闻已存在!')
            }
        })
    }
    else {
        res.send('验证码错误！')
    }
});

// ajax图片
router.post('/ajup', upload.single('imgs123456'), (req, res) => {
    // console.log(req.file)
    res.send(req.file)
})

router.get('/yanzheng',(req,res)=>{
      //输出一张图片：验证码图片
      let captcha = svgCaptcha.create({
        background:'#eeeeee',
        color: false,
        width:100,
        noise: 3,
        height:38,
        fontSize:42,
        ignoreChars: '0o1i'
    });
    // console.log(captcha.text);
    // 把图片上的文字信息存储在session里面
	req.session.coder = captcha.text;
	res.type('svg');
	res.status(200).send(captcha.data);
})

//测试ejs模板的用法
router.get('/test', (req, res) => {
    let sql = 'select * from news'
    mydb.query(sql, [], (err, result) => {

        res.render('./ajm/test', { result: result });
    })
})
module.exports = router;



