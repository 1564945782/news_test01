window.onload=function(){
	
}
function $$(a){
	return document.querySelector(a);
}
/*********recommend.js*************/
//轮播图
var turnUlTop=0;
function turnPlayImgs(){
	turnUlTop=$$("#f-turns-img").offsetTop;
	if(turnUlTop<-1499){
		turnUlTop=300;
	}
	$$("#f-turns-img").style.top=turnUlTop-300+"px";
}
setInterval('turnPlayImgs()',2000);
$$('#f-turns-txt').onmouseover=function(e){
	var num=e.target.dataset.num;
	console.log(e.target)
// 	turnTop=-num*300;
// 	console.log(turnTop)
	// $$("#f-turns-img").style.top=turnUlTop+"px";
}





