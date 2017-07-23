function byClass(str){
	var eles=document.getElementsByTagName("*");
	var res=[];
    for(var i=0;i<eles.length;i++){
    	if(eles[i].className===str){
           res.push(eles[i]);
    	}
    }
    return res;
}
if(!document.getElementsByClassName){
	document.getElementsByClassName=byClass;
}
document.getElementById("main").style.left=left;
var content=document.getElementById("content");
var addBox=document.getElementById("addBox");
var main=document.getElementById("main");
var design=document.getElementById("design");
var mubanDiv=document.getElementById("mubanDiv");
var sure=document.getElementById("sure");
var bl1=document.getElementById("bl1");		
var bl2=document.getElementById("bl2");	
var boxNum=document.getElementById("boxNum");	
var mw=design.offsetWidth;//Design的长度
var mh=design.offsetHeight;//Design的高度
var w=mw,h;//w默认值是Design的长度,h默认值是Design最大长度乘以比例
var totalBox=0;//管理员总共添加了多少个盒子
var divSelected=document.getElementById("divSelected");

var drags=document.getElementsByClassName("drag");
var boxs=document.getElementsByClassName("box");
var Ls=document.getElementsByClassName("L");
var Rs=document.getElementsByClassName("R");
var Ts=document.getElementsByClassName("T");
var Bs=document.getElementsByClassName("B");
var LTs=document.getElementsByClassName("LT");
var RTs=document.getElementsByClassName("RT");
var LBs=document.getElementsByClassName("LB");
var RBs=document.getElementsByClassName("RB");
var rotateOperations=document.getElementsByClassName("rotateOperation");
var addBackground=document.getElementById("addBackground");
var addBg=document.getElementById("addBg");

var eventUtil={
target:this.srcElement||this.target,
addHandler:function(ele,type,func){
   if(ele.addEventListener){
	  ele.addEventListener(type,func,false);   
	}else{
	  ele.attachEvent("on"+type,func);	
	}
}	
};
eventUtil.addHandler(addBox,"click",function(event){
     var str="<div class=\"drag\" id=\"drag"+totalBox+"\"><div class=\"L\"><\/div><div class=\"R\"><\/div><div class=\"T\"><\/div><div class=\"B\"><\/div><div class=\"LT\"><\/div><div class=\"RT\"><\/div> <div class=\"LB\"><\/div> <div class=\"RB\"><\/div><div class=\"rotateOperation\"><\/div><div class=\"box\"><\/div>  <\/div>";
     mubanDiv.innerHTML= mubanDiv.innerHTML+str;
     var option=document.createElement("option");
     option.appendChild(document.createTextNode("第"+(totalBox+1)+"个盒子"));
     option.setAttribute("value","drag"+totalBox);
     divSelected.appendChild(option);
	 boxNum.innerHTML=(++totalBox);
	
  
  resize(box,false,false,false,false);
	resize(L,true,false,false,true);
	resize(R,false,false,false,true);
	resize(T,false,true,true,false);
  resize(B,false,false,true,false);
	resize(LT,true,true,false,false);
	resize(RT,false,true,false,false);
	resize(LB,true,false,false,false);
	resize(RB,false,false,false,false);

});
eventUtil.addHandler(mubanDiv,"mousedown",function(event){
    var tar=event.target||event.srcElement;
    var className=tar.className;
    switch(className){
      case "box":resize(tar,false,false,false,false);
    }
});
function resize(ele,isLeft,isTop,lockX,lockY){//eles是触发事件的元素，drags是被拖动或被改变的目标，isLeft是判断是不是左边的改变元素
	if(ele.className=="box"){//点击drag  Div里面的内容box,可以实现拖拽功能	    
	  ele.onmousedown=function(event){
		 var tar=event.target||event.srcElement;
	   var drag=tar.parentNode;
		 var tarTodragBoxX=event.clientX-drag.offsetLeft;
		 var tarToDragBoxY=event.clientY-drag.offsetTop;
     document.onmousemove=function(event){		
		     var maxL=mubanDiv.offsetWidth-drag.offsetWidth-5;
		     var maxT=mubanDiv.offsetHeight-drag.offsetHeight-5;
         	  var e=event||window.event;
              var _tar=e.target||e.srcElement;
              var left=e.clientX-tarToDragBoxX;
              var top=e.clientY-tarToDragBoxY;
              if(left<0){
				  left=0;
			  }else{
          if(left>maxL){
				  left=maxL;
				  }
        }
				
				  if(top<0){
					 top=0;
				}else if(top>maxT){
					top=maxT;
					}
              drag.style.left=left+"px";
              drag.style.top=top+"px";
        document.onmouseup=function(){
         	  document.onmousemove=null;
   	        document.onmouseup=null;          
             }
	       
         } 
		
	}else{
	if(ele.className!=="rotateOperation"){
     ele.onmousedown=function(event){

         var tar=event.target||event.srcElement;
         var drag=tar.parentNode;
         var box=drag.children[9];
         var disL=event.clientX-tar.offsetLeft;//相当于是drag这个Div离浏览器窗口最左边的距离
         var disT=event.clientY-tar.offsetTop;
         var left=drag.offsetLeft;
         var top=drag.offsetTop;
         var width=drag.offsetWidth;
         var height=drag.offsetHeight;
         document.onmousemove=function(event){
         	var iW,iH;
            var iL=event.clientX-disL;//拖动的X的相对距离（拖动左边的元素，就是拖动的距离，拖动右边的元素，就是拖动的距离加上原来drag中的宽度），往右拽是正，往左拽是负
            var iT=event.clientY-disT;//拖动的Y的相对距离，往下是正，往上是负	
            if(!isLeft){//如果拖动的不是drag中左边的元素，即是右边的元素
                 iW=tar.offsetWidth+iL; 
             }else{//左边的元素
			           iW=width-iL;//拖动左边的元素改变drag的大小时，其宽度是原来长度减去被拖动的距离 			
                 drag.style.left=left+iL+'px';             
			       }
            if(!isTop){
            	iH=tar.offsetHeight+iT;
            }else{				
            	iH=height-iT;//拖动上边的元素改变drag的大小时，其高度是原来高度减去（往下是正，往上是负）被拖动的距离
            	drag.style.top=top+iT+"px";	            		
            }
		if(drag.offsetLeft>0){ 
		var maxW=mubanDiv.offsetWidth-drag.offsetLeft-5;
			}else{
				document.onmousemove=null;
				}
				if(drag.offsetTop>0){
		  var maxH=mubanDiv.offsetHeight-drag.offsetTop-5; 
				}else{
			document.onmousemove=null;	
					}
           if(iW>=maxW){iW=maxW;}
           if(iH>=maxH){iH=maxH;}
            if(!lockX){		
            	drag.style.width=iW+"px";
                box.style.width=iW-10+"px";
            }
            if(!lockY){
			
            	drag.style.height=iH+"px";
            	box.style.height=iH-10+"px";
            }
          document.onmouseup=function(){
      

         	document.onmousemove=null;
         	document.onmouseuo=null;    

  for(var j=0;j<drags.length;j++){//每移动一个元素，其他元素的位置也跟着改变，比如往右拖动了Rs[0]的，那么drag的宽度被改变(下面的w变了)，那么RTs[0]的left值也要跟着改变
      var l=drags[j].offsetLeft;
      var t=drags[j].offsetTop;
      var w=drags[j].offsetWidth;
      var h=drags[j].offsetHeight;
       Rs[j].style.left=w+"px";    
       Bs[j].style.top=h+"px";
       RTs[j].style.left=w+"px";
       LBs[j].style.top=h+"px";
       RBs[j].style.left=w+"px";
       RBs[j].style.top=h+"px";
       rotateOperations[j].style.left=w/2-rotateOperations[j].offsetWidth/2+"px";
       }
 	
}
}else{
 
         var drag=ele.parentNode;
         ele.onmousedown=function(event){
            event.stopPropagation();            
            var centerX=event.clientX;
            var centerY=event.clientY+drag.offsetHeight/2;
              var x=event.clientX-centerX;
              var y=event.clientY-centerY;
              var tar=event.target||event.srcElement;      
             drag.onmousemove=function(event){
                var nowX=event.clientX-centerX;
                var nowY=event.clientY-centerY;        
                var a=Math.sqrt(x*x+y*y);//结合旋转中心（这里是rotate的中心），用户移动到的点，用户刚开始onmousedown的点
                var b=Math.sqrt(nowX*nowX+nowY*nowY);
                var c=Math.sqrt((x-nowX)*(x-nowX)+(y-nowY)*(y-nowY));           
                var reg=Math.acos((a*a+b*b-c*c)/(2*a*b));
                reg=(180/Math.PI)*reg;//弧度转化为度数
                if(event.clientX<centerX){//结合实际情况，判断用户往左边还是右边旋转
                  reg=(-1)*reg;
                }

                drag.style.transform="rotate("+reg+"deg)";                       
                drag.onmouseup=function(event){
                  drag.onmousemove=null;
                }


              }
       
           }
}

  }


var operationS=document.getElementById("operationS")
var operationSure=document.getElementById("operationSure");

var addBgContent=document.getElementById("addBgContent");
var addBgInputs=addBgContent.getElementsByTagName("input");

var bgUpload=document.getElementById("bgUpload");
var myPic=document.getElementById("myPic");
var bgUploadSure=document.getElementById("bgUploadSure");
eventUtil.addHandler(addBg,"click",function(event){
	//var tar=event.target||event.srcElement;
	var bili1=document.getElementById("bl1");
	var bili2=document.getElementById("bl2");
	if(bili1.value==""||bili2.value==""){	
		alert("请先填写您要设计的比例！");
    }else{
	var screenWidth=window.screen.width;
	var screenHeight=window.screen.height;
	addBackground.style.width=screenWidth+"px";
	addBackground.style.height=screenHeight+"px";
	addBackground.style.display="block";
	addBgContent.style.left=(screenWidth-addBgContent.offsetWidth)/2+"px";
	addBgContent.style.top=(screenHeight-addBgContent.offsetHeight)/2+"px";
	
	bgUpload.style.left=(addBgContent.offsetWidth-bgUpload.offsetWidth)/2-30+"px";
	bgUpload.style.top=(addBgContent.offsetHeight-bgUpload.offsetHeight)/4+"px";
	}
});
eventUtil.addHandler(addBgInputs[0],"click",function(event){
  	bgUpload.style.display="block";		
	myPic.style.display="none";
});
eventUtil.addHandler(addBgInputs[1],"click",function(event){
  	bgUpload.style.display="none";		
	myPic.style.display="block";
});

eventUtil.addHandler(bgUpload.children[0],"click",function(event){
  var fileInput=document.getElementById("fileInput");
  fileInput.click();	
  fileInput.onchange=function(){
  var src=fileInput.value;
  var img=document.createElement("img");
  img.src="../images/ads/"+src;
  bgUpload.appendChild(img); 
  mubanDiv.appendChild(img);
  }
});
eventUtil.addHandler(bgUploadSure,"click",function(){
  addBackground.style.display="none";										   
});