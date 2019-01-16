window.onload=function(){
	alterPublishType();
	publishContent();
}
function alterPublishType(){
	var publishTypeLis=$$("#publish-type").querySelectorAll("li");
	for(var i=0;i<publishTypeLis.length;i++){
		(function(i){
			publishTypeLis[i].onclick=function(){
				$$(".publish-top-active").classList.remove("publish-top-active");
				this.classList.add("publish-top-active");
				if(i==0){
					$$("#question-answer").style.display="block";
					$$("#img-text").style.display="none";
					$$("#has-video").style.display="none";
					$$("#add-file").style.display="none";
				}else{
					$$("#add-file").style.display="block";
					$$("#question-answer").style.display="none";
					if(i==1){
						$$("#img-text").style.display="block";
						$$("#has-video").style.display="none";
						$$("#add-file").querySelectorAll("li")[0].style.display="block";
						$$("#add-file").querySelectorAll("li")[1].style.display="block";
						$$("#add-file").querySelectorAll("li")[2].style.display="none";
					}else if(i==2){
						$$("#img-text").style.display="none";
						$$("#has-video").style.display="block";
						$$("#add-file").querySelectorAll("li")[0].style.display="none";
						$$("#add-file").querySelectorAll("li")[1].style.display="none";
						$$("#add-file").querySelectorAll("li")[2].style.display="block";
					}
				}
			}
		})(i)
	}
}

function publishContent(){
	$$("#question-answer").style.display="block";
	$$("#img-text").style.display="none";
	$$("#has-video").style.display="none";
	$$("#publish-btn").onclick=function(){
		var currentPublish;
		if($$("#question-answer").style.display=="block"){
			currentPublish=$$("#question-answer");
		}else if($$("#img-text").style.display=="block"){
			currentPublish=$$("#img-text");
		}else if($$("#has-video").style.display=="block"){
			currentPublish=$$("#has-video");
		}
		switch(currentPublish.id){
			case "question-answer": 
			console.log(currentPublish.id)
			break;
			case "img-text": 
			console.log(currentPublish.id)
			break;
			case "has-video": 
			console.log(currentPublish.id)
			break;
		}
	}
	function upPublish(currentId){
		
	}
}


