window.onload=function(){
    tabChange_etm();
    console.log('666');
    createChat();
    weatherQuery();
    queryCity();
}

// entertainment页面tab面板
function tabChange_etm(){
    var flag01=0;
	console.log(666);
	let etm_tab_list=document.querySelector('.etm_tab_list');
	let tabChildrens=document.querySelectorAll('.tabChildrens');
	let tab1=document.querySelectorAll('.tab1');
	console.log(tab1);
	// for(let j=1;j<tab1.length;j++){
		if(tab1.length==0){return;}
     tab1[0].onclick=function(){
        console.log(flag01);
        tabChildrens[flag01].style.display='none';
        tabChildrens[0].style.display='block';
        flag01=0;
    }
    tab1[1].onclick=function(){
        console.log(flag01);

        tabChildrens[flag01].style.display='none';
        tabChildrens[1].style.display='block';
        flag01=1;
    }
    tab1[2].onclick=function(){
        console.log(flag01);

        tabChildrens[flag01].style.display='none';
        tabChildrens[2].style.display='block';
        flag01=2;
    }
    tab1[3].onclick=function(){
        console.log(flag01);

        tabChildrens[flag01].style.display='none';
        tabChildrens[3].style.display='block';
        flag01=3;

    }
    tab1[4].onclick=function(){
        console.log(flag01);

        tabChildrens[flag01].style.display='none';
        tabChildrens[4].style.display='block';
        flag01=4;

    }

}
// 聊天面板
function createChat(){
	let send_p=document.querySelector('.submit_send p');
    let msg_input=document.querySelector('.msg');
    let talk_show=document.querySelector('.talk_show');
    let content=document.querySelector('.content');
    // content.style.height=document.body.clientHeight&&document.documentElement.clientHeight/32-4+'rem';
    let msg_end=document.querySelector('.talk_show div:last-child');
    console.log(document.querySelector('.talk_show div:last-child'));
    msg_end.scrollIntoView();
    send_p.onclick=function(){
      let msg=msg_input.value;
      if(msg==''){
        alert('不能为空');
        }else{
        creatmsg(msg);
        }
    }
    function creatmsg(a){
        let str = '<div class="btalk"><span class="bsay">' + a +'</span><i class="layui-icon layui-icon-triangle-r"></i><img src="/img/wl/etm/wl_server_notx.png" alt=""></div>';
        talk_show.innerHTML +=str; 
        let data={};
        data.send=a;
       msg_input.value='';
       document.querySelector('.talk_show div:last-child span').style.right='24px';
       document.querySelector('.talk_show div:last-child span').style.wordWrap='break-word';
       document.querySelector('.talk_show div:last-child i').style.left='-25px';
       document.querySelector('.talk_show div:last-child').scrollIntoView();
        console.log(data);
    }
}
let dataurl;
let city_url;
let a=0;
function weatherQuery(){
    let ul=document.querySelector('#ct-current-weather ul');
    let temperature=document.querySelector('#txt-temperature');
    let tp_name=document.querySelector('#txt-name');
    // let wea=document.querySelectorAll('.wea');
    let leg=document.querySelectorAll('.leg');
    let data_wea=[];
    let data_leg=[];
    // console.log(city_url);
    if(city_url=='undefined'){dataurl='http://www.weather.com.cn/weather/101270101.shtml';}
    else{dataurl=city_url;}
    // console.log(dataurl);
    console.log(a);
    axios.get('/wl/entertainment', {
        params: {
            c_url: dataurl,
            ajax_a:a
        }
    })
    .then(function (response) {
        if(a==1){
            console.log(response.data.data);
            let mydata=response.data.data;
            for(let i=0;i<leg.length;i++){
                    data_leg.push(mydata[i].leg);
                    data_wea.push(mydata[i].wea); 
                    temperature.innerHTML=data_leg[0];
                    tp_name.innerHTML=data_wea[0];
                }
        }else{
            for(let i=0;i<leg.length;i++){
                data_leg.push(leg[i].value);
                data_wea.push(leg[i].getAttribute("wea_d")); 
            }
        }
    })
    .catch(function (error) {
        console.log(error);
    });
console.log(data_wea);
    console.log(data_leg);
    ul.onclick=function(ev){
        var ev=ev||windows.event;
        var target=ev.target||ev.srcElement;
        if(target.nodeName.toLowerCase()=='span'){
            let num=target.getAttribute("data-num0");
            temperature.innerHTML=data_leg[num];
            tp_name.innerHTML=data_wea[num];
        }
    }
}

// 城市切换
function queryCity(){
    let city_select=document.querySelector('.city_select');
    city_weather.onclick=function(){
        city_select.style.display='block';
    }
    // console.log(666);
    let ul_city=document.querySelector('.city_select ul');
    ul_city.onclick=function(ev){
        var ev=ev||windows.event;
        var target=ev.target||ev.srcElement;
        if(target.nodeName.toLowerCase()=='li'){
            // console.log(666);
            // console.log(target.innerHTML);
            // console.log(this);
            // console.log(target.getAttribute("data_city"));
            city_url=target.getAttribute("data_city");
            city_weather.innerText=target.innerHTML;
            city_select.style.display='none';
            a=1;
            weatherQuery();
        }
    }
}