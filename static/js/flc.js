window.onload=function(){
	indexTurnPlay();
	registAndLoginPage();
	adminRegist();
	adminLogin();
	coderReload();
	// publishPage();
}
/*********recommend.js*************/
//轮播图
function indexTurnPlay(){
	var top=0;
	var activeLis=document.querySelectorAll("#f-turns-txt li");
	$$('#f-turns-txt').onmouseover=function(e){
		var num=parseInt(e.target.dataset.num);
		top=-num*300;
		$$("#f-turns-img").style.top=top+"px";
		$$(".turns-txt-active-li").classList.remove("turns-txt-active-li");
		activeLis[num].classList.add("turns-txt-active-li");
	}
	function turnPlay(){
		var nth;
		top=$$("#f-turns-img").offsetTop;
		if(top<-1499){
			top=300;
		}
		$$("#f-turns-img").style.top=top-300+"px";
		$$(".turns-txt-active-li").classList.remove("turns-txt-active-li");
		nth=$$("#f-turns-img").offsetTop/(-300);
		activeLis[nth].classList.add("turns-txt-active-li");
	}
	setInterval(turnPlay,3000);
}
//登录、注册相互切换
function registAndLoginPage(){
	$$("#f-login-btn").onclick=function(){
		$$("#login-cover").style.display="block";
		$$("#login-form").style.display="block";
		$$("#regist-form").style.display="none";
	}
	var goLoginBtns=document.querySelectorAll(".go-login-btn");
	for(var i=0;i<goLoginBtns.length;i++){
		goLoginBtns[i].onclick=function(){
			$$("#login-cover").style.display="block";
			$$("#login-form").style.display="block";
			$$("#regist-form").style.display="none";
		}
	}
	var goRegistBtns=document.querySelectorAll(".go-regist-btn");
	for(var i=0;i<goRegistBtns.length;i++){
		goRegistBtns[i].onclick=function(){
			$$("#login-cover").style.display="block";
			$$("#login-form").style.display="none";
			$$("#regist-form").style.display="block";
		}
	}
	var closeCoverBtns=document.querySelectorAll("#login-cover .close-btn");
	for(var i=0;i<closeCoverBtns.length;i++){
		closeCoverBtns[i].onclick=function(){
			$$("#login-cover").style.display="none";
		}
	}
}
function adminRegist(){
	$$("#regist-form #regist-btn").onclick=function(){
		var nickname=$$("#regist-form [name='nickname']");
		var pwd=$$("#regist-form [name='pwd']");
		var tel=$$("#regist-form [name='tel']");
		var nickname_v=nickname.value;
		var pwd_v=pwd.value;
		var tel_v=tel.value;
		if(nickname_v!="" && pwd_v!=""){
			axios.post('/flc/regist', {
				nickname:nickname_v,
				pwd:pwd_v,
				tel:tel_v
			})
			.then(function (response) {
				if (response.data == 'ok') {
					hintMsg("注册成功！")
				}
			})
			.catch(function (error) {})
		}else{
			hintMsg('昵称、密码必填！')
		}
	}
}
//刷新验证码
function coderReload(){
    var codeImg = $$('#code');
    codeImg && (codeImg.onclick = function () {
		console.log("wolaile")
            this.src='/flc/code?_'+new Date();
        }
    );
}
function adminLogin(){
	$$("#login-form #login-btn").onclick=function(){
		var number=$$("#login-form [name='number']");
		var pwd=$$("#login-form [name='pwd']");
		var code=$$("#login-form [name='code']");
		var number_v=number.value;
		var pwd_v=pwd.value;
		var code_v=code.value;
		if(number_v!="" && pwd_v!="" && code_v!=""){
			axios.post('/flc/login', {
				number:number_v,
				pwd:pwd_v,
				code:code_v
			})
			.then(function (response) {
				console.log(response)
				if(response.data == 'ok') {
					$$("#login-cover").style.display="none";
					$$("#has-login").style.display="block";
					$$("#not-login").style.display="none";
					$$("#out-login-btn").onclick=function(){
						$$("#has-login").style.display="none";
						$$("#not-login").style.display="block";
					}
				}
				else if(response.data=='number_not_exist'){
					hintMsg("用户不存在！");
				}else if(response.data=='pwd_err'){
					hintMsg("密码错误！")
				}else if(response.data=='code_err'){
					hintMsg("验证码错误！")
				}
			})
			.catch(function (error) {})
		}else{
			hintMsg("账号、密码和验证码必填！")
		}
	}
}
function hintMsg(str){
	var msgBox=document.createElement("div");
	var closeBtn=document.createElement("button");
	msgBox.classList="hint-msg-box";
	msgBox.innerText=str;
	closeBtn.classList="msg-close-btn";
	closeBtn.innerText="X";
	document.body.appendChild(msgBox);
	msgBox.appendChild(closeBtn);
	closeBtn.onclick=function(){
		msgBox.remove();
	}
	setTimeout(function(){
		msgBox.remove();
	},2000)
}

// var obj={
// 	src_1:"/img/f_single_img_1_1.jpg",
// 	src_2:"/img/f_single_img_1_2.jpg",
// 	src_3:"/img/f_single_img_1_3.jpg"
// 	
// }
// console.log(JSON.stringify(obj))