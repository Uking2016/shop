// JavaScript Document
var sortLi=document.getElementById("sortLi");
eventUtil.addHandler(sortLi,"click",function(){
	var manager=document.getElementById("manager");	
	if(sortLi.children[0].src.match("xia.png")){
	manager.style.display="none";
	}else{
	 manager.style.display="block";	
	}
});
var sizes=document.getElementsByClassName("size");
for(var i=0;i<sizes.length;i++){
  sizes[i].onclick=function(event){
	  var tar=event.target||event.srcElement;
	   var len=tar.children.length;
	
	   if(len==0){
	  var img=document.createElement("img");
      img.src="../images/icons/iconfont-kaobianxuanzegou.png";
	  tar.appendChild(img);  	  
	   }else{
	   tar.removeChild(tar.children[0]);  
	  }
  }
}