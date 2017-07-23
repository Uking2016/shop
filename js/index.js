

var n=1;//显示第几张广告
function setAd(i){
	var ad=document.getElementById("ad");
	if(i>4){
	n=1;
	i=1;
	}
	var str='<ul style="list-style:none">';
	for(var j=1;j<=4;j++){
	if(j!=i){
	  str+='<li>'+j+'</li>';
	}else{
	  str+='<li style="background-color:#c82828">'+j+'</li>';	
	}
	}
	str+="</ul>";
	str+="<img src='../images/ads/ad"+i+".jpg'>"; 
	
   	ad.innerHTML=str;
}
setInterval("setAd(n);n++",2000);//每2秒换一个广告图片

