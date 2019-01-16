let oUl;
let img_top;
let lunbo_img;
let aLi;
let recommended_content=0;
let setInterval00;
let data=[];
let j=0;
let right_top;
let menu_box;
let main_box;
let others_box;
let flag01=0;
	// let tab1;
	// let tabChildrens;
window.onload=function(){
	recommended_content = document.querySelector(" .recommended_content");
	oUl = document.querySelector(" .right_selects ul");
	console.log(111);
	console.log(oUl);
	// if(oUl=='undefind'){
		aLi = oUl.getElementsByTagName('li');
	// }
	
	img_top = document.querySelector(" .img_top");
	lunbo_img=img_top.querySelector("img");
	right_top=document.querySelector('.taobao_recommended .right');
	menu_box=document.querySelector('.menu-box');
	main_box=document.querySelector('.main-box');
	others_box=document.querySelector('.others-box');
	// tab1=document.querySelectorAll('.tab1');
	// tabChildrens=document.querySelectorAll('.tabChildrens');
	for(let i=0;i<aLi.length;i++){
		data.push(aLi[i].querySelector('img').src);
	}
	recommended_hover();
	recommended_out()
    recommended_lunbo();
    fixedMenu();
console.log('666');
}

// 推荐宝淘移入事件
function recommended_hover(){ 
	recommended_content.onmouseover = function(){
		clearInterval(setInterval00);
	}
    for(let i=0;i<aLi.length;i++){
        aLi[i].onmouseover = function(){
            let _this=this;
            let img=_this.querySelector('img');
            let src=img.src;
            lunbo_img.src=src;
        }
    }
    onclink_lunbo();
}
// 推荐宝淘移出事件
function recommended_out(){ 
	recommended_content.onmouseleave=function(){
		setInterval00=setInterval(set, 1000);
	}
}
// 推荐宝淘图片轮播事件
function recommended_lunbo(){	
	setInterval00=setInterval(set, 1000);
}
//轮播图定时器
function set(){ 	
	if(j>=data.length){j=0;}
	lunbo_img.src=data[j];
	j=j+1;
}
//点击加载图片
function onclink_lunbo(){
	// console.log('999');
	let lunbo_top=right_top.querySelectorAll('.taobao_recommended .right .right_top');
	let lunbo_ul=document.querySelector('.right_selects ul');
	// console.log(lunbo_top.length);

	let flag=data.length;
	// console.log(data);
	// console.log(flag);
	for(let i=0;i<lunbo_top.length;i++){
        lunbo_top[i].onclick = function(){
            let _this=this;
           // console.log(_this);
           // 上键
           if(i==1){
           		console.log('xia键');
           		// if(){}
           		for(let i=0;i<data.length-1;i++){
           			// console.log(i);
           			let temp=data[i];
           			data[i]=data[i+1];
           			data[i+1]=temp;

           		}
           		// console.log(data);
           		
          	}
           // 下键
           else{
           		console.log('shang键');
           		for(let i=data.length-1;i>0;i--){
           			// console.log(i);
           			let temp=data[i];
           			data[i]=data[i-1];
           			data[i-1]=temp;

           		}
           		// console.log(data);
           }  
           // 图片
            for(let i=0;i<aLi.length;i++){
        	aLi[i].querySelector('img').src=data[i];
            
            
        
    }                
        }
    }
}

// 固定导航栏
function fixedMenu(){

}

