window.onload=function(){
	
}
function $$(a){
	return document.querySelector(a);
}
/*********recommend.js*************/
//轮播图
var turnUlTop=0;
function turnPlayImgs(){
	$$('#f-turns-txt').onmouseover=function(e){
		var num=parseInt(e.target.dataset.num);
		turnUlTop=-num*300;
		$$("#f-turns-img").style.top=turnUlTop+"px";
	}
	turnUlTop=$$("#f-turns-img").offsetTop;
	if(turnUlTop<-1499){
		turnUlTop=300;
	}
	$$("#f-turns-img").style.top=turnUlTop-300+"px";
}
setInterval('turnPlayImgs()',3000);



//登录、注册相互切换
$$("#f-login-btn").onclick=function(){
	$$("#login-cover").style.display="block";
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

$$("#regist-form #regist-btn").onclick=function(){
	var nickname=$$("#regist-form [name='nickname']");
	var pwd=$$("#regist-form [name='pwd']");
	var tel=$$("#regist-form [name='tel']");
	var nickname_v=nickname.value;
	var pwd_v=pwd.value;
	var tel_v=tel.value;
	console.log(tel_v)
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
}
$$("#login-form #login-btn").onclick=function(){
	var number=$$("#login-form [name='number']");
	var pwd=$$("#login-form [name='pwd']");
	var code=$$("#login-form [name='code']");
	var number_v=number.value;
	var pwd_v=pwd.value;
	var code_v=code.value;
	console.log(code_v)
	axios.post('/flc/login', {
		number:number_v,
		pwd:pwd_v,
		code:code_v
	})
	.then(function (response) {
		if (response.data == 'ok') {
			$$("#login-cover").style.display="none";
			$$("#has-login").style.display="block";
			$$("#not-login").style.display="none";
			$$("#out-login-btn").onclick=function(){
				$$("#has-login").style.display="none";
				$$("#not-login").style.display="block";
			}
		}else{
			hintMsg("账号或密码不正确！")
		}
	})
	.catch(function (error) {})
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
}



