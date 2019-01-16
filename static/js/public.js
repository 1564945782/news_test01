function $$(a){
	return document.querySelector(a);
}
//滚动条滚动一定距离,左侧菜单固定不动
var othersBoxHeight=$$(".others-box").offsetHeight;
document.onscroll=function(){
	var scrollTop=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
	var clientHeight=document.documentElement.clientHeight || document.body.clientHeight;
	if(scrollTop>36){
		$$(".menu-box").style.cssText = "position:fixed;left:50%;margin-left:-600px;";
	}else{
		$$(".menu-box").style.cssText = "position:absolute;left:0;top:0;";
	}
	if(scrollTop>othersBoxHeight){
		$$(".others-flow-box") && ($$(".others-flow-box").style.display="none")
		$$(".others-fixed-box") && ($$(".others-fixed-box").style.cssText="display:block;position:fixed;top:0;height:"+clientHeight+"px;overflow:hidden;")
	}else{
		$$(".others-flow-box") && ($$(".others-flow-box").style.display="block")
		$$(".others-fixed-box") && ($$(".others-fixed-box").style.cssText="display:none;")
	}
}
//menu中点击菜单项，相应的菜单背景颜色变为红色
var menuLis=document.querySelectorAll(".menu-box li");
for(var i=0;i<menuLis.length;i++){
	menuLis[i].onclick=function(){
		$$(".menu-active-li").classList.remove("menu-active-li");
		this.classList.add("menu-active-li");
	}
}
