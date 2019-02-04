localStorage.clear();
if(localStorage.cjcs==undefined){
	localStorage.cjcs=0;
}
$(".Sdiv").html(localStorage.jp);

var index = 0;
var btnIndex = [0,0,0,0,0,0,0,0];
var jp = [
			"8.88红包",
			"YSL #12 一支",
			"未抽中，请再接再厉",
			"阿玛尼 #405 一支",
			"50元超市零食一包",
			"未抽中，请再接再厉",
			"88.8红包",
			"18.8红包",
		];

function cj(thiss,param){
	
	if(localStorage.cjcs==3){
		alert("本次抽奖结束，春节快乐！！\n哦嗨呦！！");
		return false;
	}
	if(btnIndex[param]!=0){
		alert("该字已不可选！");
	}else{
		var num = localStorage.cjcs;
		console.log(num);
		localStorage.cjcs = ++num;
		console.log(localStorage.cjcs);
		
		var randomNum = Math.random()*jp.length;
		
		btnIndex[param] = 1;
		alert(jp[Math.floor(randomNum)]);
		$(thiss).find("p").html("已选");
//		$(thiss).css("background","#ddd");
//		$(thiss).css("color","#000");
//		$(thiss).find(p).css("text-shadow","none");
		if(jp[Math.floor(randomNum)]!="未抽中，请再接再厉"){
			var str = localStorage.jp;
			$(".Sdiv").append("<p>"+jp[Math.floor(randomNum)]+"</p>");
			str += "<p>"+jp[Math.floor(randomNum)]+"</p>";
			localStorage.jp = str;
		}
		jp.splice(Math.floor(randomNum),1);
		if(num==3){
			alert("本次抽奖结束，春节快乐！！\n哦嗨呦！！");
		}
	}
}
