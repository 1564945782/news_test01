window.onload = function () {
    tool();
    gotop();
    lefthid();
    righthid();
    searchstyle();
    newstitile();
    navfix();
    lunbotu();
    h_searchnull();
    s_searchnull();
    newsup();
    navlichange()
}


// ˢ��
function tool() {
    let refresh = document.querySelector('.tool li:nth-child(1)');
    refresh && (refresh.onclick = () => {
        window.location.reload();
    })
}


// �ص�����
function gotop() {
    let gotop = document.querySelector('.tool li:nth-child(2)');
    gotop && (gotop.onclick = () => {
        document.getElementById("h-head").scrollIntoView();
    })

}


//header������ؿ�
function lefthid() {
    let hlileft = document.querySelector('.h-hid-left-containerli');
    hlileft && (hlileft.onmouseenter = function () {
        let weather = document.querySelector('.h-hid-left');
        weather.style.display = 'block';
    })
    hlileft && (hlileft.onmouseleave = function () {
        let weather = document.querySelector('.h-hid-left');
        weather.style.display = 'none';
    })
}



//header�ұ����ؿ�
function righthid() {
    let hliright = document.querySelector('.h-hid-right-containerli');
    hliright && (hliright.onmouseenter = function () {
        let litnav = document.querySelector('.h-hid-right');
        litnav.style.display = 'block';
    })
    hliright && (hliright.onmouseleave = function () {
        let litnav = document.querySelector('.h-hid-right');
        litnav.style.display = 'none';
    })
}



//������Ч��
function searchstyle() {
    let searchcontainer = document.querySelector('.searchcontainer');
    let searchinput = document.querySelector('.searchinput');
    searchcontainer && searchinput && (searchinput.onfocus = function () {
        searchcontainer.classList.add('searchcolor')
    })
    searchcontainer && searchinput && (searchinput.onblur = function () {
        searchcontainer.classList.remove('searchcolor')
    })
}


//�����Ա���ʽ�ύ��
// ��������ֵΪ�յ�ʱ��������
function h_searchnull() {
    let searchinput = document.querySelector('.searchinput');
    let hform = document.getElementById('h-form');
    hform && (hform.onsubmit = () => {
        if (!searchinput.value) {
            return false
        }
    })
}

function s_searchnull() {
    let searchinput = document.querySelector('.s-searchinput');
    let sform = document.getElementById('s-form');
    // console.log(666)
    sform && (sform.onsubmit = () => {
        if (!searchinput.value) {
            return false
        }
    })
}


//���ű�������hover��ʽ

function newstitile() {
    let newstitles = document.querySelectorAll('.newstitle');
    let body = document.querySelector('body');
    newstitles && body && (body.onclick = (e) => {
        if (e.target.classList.contains('newstitle')) {
            e.target.style.color = '#999'
        }
    })
}


// body.onmousemove=(e)=>{
//     if(e.target.classList.contains('newstitle')){
//         e.target.style.color='#406599'
//     }
// }

// ��������ߵ������̶������


//����ַ���Ч��
// function leftnavclick() {
//     let leftnav = document.querySelector('.leftnav');
//     let flag = false;
//     leftnav&&(leftnav.onclick = (e) => {
//         if (flag) {
//             let x = document.querySelector('.leftnavclick');
//             x.classList.remove('leftnavclick');
//             e.target.classList.add('leftnavclick');
//         } else {
//             e.target.classList.add('leftnavclick');
//         }

//         flag = true;
//     })
// }




//�����̶�������
function navfix() {
    let leftnav = document.querySelector('.leftnav');
    if (leftnav) {
        const scrollstart = leftnav.offsetTop;    //Ԫ�ؾ��붥�˾���
        document.onscroll = () => {

            let newscontainer = document.querySelector('.newscontainer');
            //    console.log(scrollstart)
            // pageYOffset�������ľ���
            // console.log(scrollstart)
            if (pageYOffset >= scrollstart) {
                // console.log(window.pageYOffset)      
                // ��scrollstartд�����������Ǵ��ڵ�����Ϊ����fixed��scrollstart�����0
                leftnav.classList.add('fixed');

                // �ı��м��margin����Ϊnav��λ�����fixed�����ĵ�����


                let computedStyle = getComputedStyle(leftnav, null);

                //    console.log(computedStyle.marginRight)    nav��margin
                //    leftnav.offsetWidth+computedStyle.marginRight
                newscontainer.classList.add('move')
            } else {
                newscontainer.classList.remove('move');
                leftnav.classList.remove('fixed');

            }
        }
    }
}

//������li���
function navlichange(){
    let leftnav = document.querySelector('.leftnav'); 
    if(leftnav){     
        let xli =  parseInt(document.querySelector('.forcolor').innerHTML);
        (document.querySelectorAll('.leftnav a'))[xli].classList.add('leftnavclick')
    }
}




//�ֲ�ͼ
function lunbotu() {
    let ul = document.querySelector('.h-lunboimg-container');
    if (ul) {
        function lunbo() {
            var settime = setInterval(() => {
                ul.style.left = (parseInt(getComputedStyle(ul).left) - 1) + 'px';
                if (parseInt(getComputedStyle(ul).left) == -242) {
                    ul.style.left = '0px';
                    clearInterval(settime);
                    var first = ul.firstElementChild;
                    first.remove();

                    ul.appendChild(first);
                    setTimeout(() => {
                        lunbo();
                    }, 3000);
                }

            }, 10);
        }
        lunbo();
    }
}



//�����ϴ�
function newsup() {

    let img = document.querySelector('input[id="newsimgfrom"]');

    // console.log(document.querySelector('input[name="sourselogfrom"]').files[0])

    let upform = document.querySelector('.upform');

    //�������ύ������֤
    if(upform){
        upform.onsubmit = function () {
            document.querySelector('.forcheck').value = document.querySelector('input[name="sourselogfrom"]').files[0];
            if (document.querySelector('.forcheck').value == 'undefined'
                || !document.querySelector('input[name="kind"]').value
                || !document.querySelector('input[name="pinglunnum"]').value || !document.querySelector('input[name="sourcefrom"]').value || !document.querySelector('input[name="title"]').value
            ) {
                alert('���ű��⡢��Դlogo��������Դ�̼ҡ������������Ϊ����')
                return false;
            }
        }
    }
   
//ajaxͼƬ�ϴ�
    if (img) {


        document.querySelector('.newsimgbtn').onclick = function () {
            document.querySelector('#newsimgfrom').click();
        }

        img.onchange = function () {
            // console.log(document.querySelectorAll('input[name="newsimgfrom"]'))
            // console.log(this.files[0])

            let myform = new FormData();
            myform.append('imgs123456', this.files[0]);

            axios.post('/ajm/ajup', myform)
                .then(function (response) {
                    // console.log(response.data);
                    document.querySelector('.upnewsimg').src = '/' + response.data.filename;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    let logo = document.querySelector('input[id="sourselogfrom"]');
    if (logo) {

        document.querySelector('.sourselogbtn').onclick = function () {
            document.querySelector('#sourselogfrom').click();
        }
        //ajax ͬ��Ҫ�ϴ���ͼƬ


        logo.onchange = function () {
            // console.log(document.querySelectorAll('input[name="newsimgfrom"]'))
            console.log(this.files[0])

            let myform = new FormData();
            myform.append('imgs123456', this.files[0]);

            axios.post('/ajm/ajup', myform)
                .then(function (response) {
                    // console.log(response.data);
                    document.querySelector('.uplogoimg').src = '/' + response.data.filename;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
}

