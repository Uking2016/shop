
function getElementsByClassName(str){
	
	   var result=[];
	   var tags=document.getElementsByTagName("*");
	   for(var i=0;i<tags.length;i++){
		   if(tags[i].className==str){
			   result.push(tags[i]);
		   }   
	   }
	   return result;
	   
}

if(!document.getElementsByClassName){document.getElementsByClassName=getElementsByClassName;}
var denglu=document.getElementById("denglu");
var zhuce=document.getElementById("zhuce");
var dengluSpans=document.getElementsByClassName("dengluSpan");
var zhuceSpans=document.getElementsByClassName("zhuceSpan");

for(var i=0;i<zhuceSpans.length;i++){
	eventUtil.addHandler(zhuceSpans[i],"click",function(){
		zhuce.style.display="block";		
		denglu.style.display="none";
	});	
}
for(var i=0;i<dengluSpans.length;i++){
	eventUtil.addHandler(dengluSpans[i],"click",function(){
		denglu.style.display="block";		
		zhuce.style.display="none";
	});
}
function setDengluForm(){
	var denglu=document.getElementById("denglu");
	var inputs=denglu.getElementsByTagName("input");	
	for(var i=0;i<inputs.length;i++){
		if(inputs[i].type==="text"){
			inputs[i].value="请输入您的手机号或用户名";
			inputs[i].style.color="gray";
			eventUtil.addHandler(inputs[i],"focus",function(event){
				
				var tar=event.target||event.srcElement;
				if(tar.value==="请输入您的手机号或用户名"){
					tar.value="";
				}
				tar.style.color="black";
			});
			eventUtil.addHandler(inputs[i],"blur",function(event){
				var tar=event.target||event.srcElement;
				if(tar.value==="" ){
					tar.value="请输入您的手机号或用户名" ;
					tar.style.color="gray";
				}												 											
			});
			
		}else if(inputs[i].type==="password"){
			inputs[i].type="text";
			inputs[i].value="请输入您的密码";
			inputs[i].style.color="gray";
			eventUtil.addHandler(inputs[i],"focus",function(event){
				var tar=event.target||event.srcElement;											 
				if(tar.value==="请输入您的密码"){
					tar.value="";
				}
				tar.type="password";
				tar.style.color="black";										 
			});
			eventUtil.addHandler(inputs[i],"blur",function(event){
				var tar=event.target||event.srcElement;
				if(tar.value==="" ){
					tar.value="请输入您的密码" ;
					tar.type="text";
					tar.style.color="gray";
				}											
				
			});
		}
	}
}


function setZhuceForm(){
	var zhuce=document.getElementById("zhuce");
	var inputs=zhuce.getElementsByTagName("input");	
	for(var i=0;i<inputs.length-1;i++){
		inputs[i].style.color="gray";
		switch(i){
		case 0:inputs[0].value="请输入您的用户名";break;
		case 1:inputs[1].type="text";inputs[1].value="请输入您的密码";break;
		case 2:inputs[2].type="text";inputs[2].value="请再一次输入您的密码";break;
		case 3:inputs[3].value="请输入您的手机号";break;	  
		}   
	}
	eventUtil.addHandler(inputs[0],"focus",function(event){
		var tar=event.target||event.srcElement;
		if(tar.value==="请输入您的用户名"){
			tar.value="";  
			tar.style.color="black";
		}
	});
	eventUtil.addHandler(inputs[1],"focus",function(event){
		var tar=event.target||event.srcElement;
		if(tar.value==="请输入您的密码"){
			tar.value="";  
			tar.style.color="black";
		}
	});
	eventUtil.addHandler(inputs[2],"focus",function(event){
		var tar=event.target||event.srcElement;
		if(tar.value==="请再一次输入您的密码"){
			tar.value="";  
			tar.style.color="black";
		}
	});
	eventUtil.addHandler(inputs[3],"focus",function(event){
		var tar=event.target||event.srcElement;
		if(tar.value==="请输入您的手机号"){
			tar.value="";  
			tar.style.color="black";
		}
	});
	
	eventUtil.addHandler(inputs[0],"blur",function(event){
		var tar=event.target||event.srcElement;
		if(tar.value===""){
			tar.value="请输入您的用户名";  
			tar.style.color="gray";
		}
	});
	eventUtil.addHandler(inputs[1],"blur",function(event){
		var tar=event.target||event.srcElement;
		if(tar.value===""){
			tar.value="请输入您的密码";  
			tar.style.color="gray";
		}
	});
	eventUtil.addHandler(inputs[2],"blur",function(event){
		var tar=event.target||event.srcElement;
		if(tar.value===""){
			tar.value="请再一次输入您的密码";  
			tar.style.color="gray";
		}
	});
	eventUtil.addHandler(inputs[3],"blur",function(event){
		var tar=event.target||event.srcElement;
		if(tar.value===""){
			tar.value="请输入您的手机号";  
			tar.style.color="gray";
		}
	});
}
setDengluForm();
setZhuceForm();
