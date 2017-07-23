
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
			inputs[i].value="�����������ֻ��Ż��û���";
			inputs[i].style.color="gray";
			eventUtil.addHandler(inputs[i],"focus",function(event){
				
				var tar=event.target||event.srcElement;
				if(tar.value==="�����������ֻ��Ż��û���"){
					tar.value="";
				}
				tar.style.color="black";
			});
			eventUtil.addHandler(inputs[i],"blur",function(event){
				var tar=event.target||event.srcElement;
				if(tar.value==="" ){
					tar.value="�����������ֻ��Ż��û���" ;
					tar.style.color="gray";
				}												 											
			});
			
		}else if(inputs[i].type==="password"){
			inputs[i].type="text";
			inputs[i].value="��������������";
			inputs[i].style.color="gray";
			eventUtil.addHandler(inputs[i],"focus",function(event){
				var tar=event.target||event.srcElement;											 
				if(tar.value==="��������������"){
					tar.value="";
				}
				tar.type="password";
				tar.style.color="black";										 
			});
			eventUtil.addHandler(inputs[i],"blur",function(event){
				var tar=event.target||event.srcElement;
				if(tar.value==="" ){
					tar.value="��������������" ;
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
		case 0:inputs[0].value="�����������û���";break;
		case 1:inputs[1].type="text";inputs[1].value="��������������";break;
		case 2:inputs[2].type="text";inputs[2].value="����һ��������������";break;
		case 3:inputs[3].value="�����������ֻ���";break;	  
		}   
	}
	eventUtil.addHandler(inputs[0],"focus",function(event){
		var tar=event.target||event.srcElement;
		if(tar.value==="�����������û���"){
			tar.value="";  
			tar.style.color="black";
		}
	});
	eventUtil.addHandler(inputs[1],"focus",function(event){
		var tar=event.target||event.srcElement;
		if(tar.value==="��������������"){
			tar.value="";  
			tar.style.color="black";
		}
	});
	eventUtil.addHandler(inputs[2],"focus",function(event){
		var tar=event.target||event.srcElement;
		if(tar.value==="����һ��������������"){
			tar.value="";  
			tar.style.color="black";
		}
	});
	eventUtil.addHandler(inputs[3],"focus",function(event){
		var tar=event.target||event.srcElement;
		if(tar.value==="�����������ֻ���"){
			tar.value="";  
			tar.style.color="black";
		}
	});
	
	eventUtil.addHandler(inputs[0],"blur",function(event){
		var tar=event.target||event.srcElement;
		if(tar.value===""){
			tar.value="�����������û���";  
			tar.style.color="gray";
		}
	});
	eventUtil.addHandler(inputs[1],"blur",function(event){
		var tar=event.target||event.srcElement;
		if(tar.value===""){
			tar.value="��������������";  
			tar.style.color="gray";
		}
	});
	eventUtil.addHandler(inputs[2],"blur",function(event){
		var tar=event.target||event.srcElement;
		if(tar.value===""){
			tar.value="����һ��������������";  
			tar.style.color="gray";
		}
	});
	eventUtil.addHandler(inputs[3],"blur",function(event){
		var tar=event.target||event.srcElement;
		if(tar.value===""){
			tar.value="�����������ֻ���";  
			tar.style.color="gray";
		}
	});
}
setDengluForm();
setZhuceForm();
