window.onload = function() {
	timeRound();
	
	document.getElementById("banner1").onclick = function() {
		window.open('http://www.baidu.com');
		window.history.back(-1);
	}
	document.getElementById("banner2").onclick = function() {
		window.open('http://www.baidu.com');
		window.history.back(-1);
	}
	document.getElementById("banner3").onclick = function() {
		window.open('http://www.baidu.com');
		window.history.back(-1);
	}

}

var i = 0;
var timeID;

function timeRound() {
	if (timeID) clearInterval(timeID);
	timeID = setInterval('rotate()', 2000);
}

function rotate() {
	document.getElementById("onbutNum" + (i + 1)).id = "usubutNum" + (i + 1);
	if (i >= 2) {
		document.getElementById("banner1").style.animation = "BR990get0 2s";
		document.getElementById("banner3").style.animation = "B1980get2970 2s";
		i = 0;
	} else {
		var g = i * 990;
		document.getElementById("banner" + (i + 1)).style.animation = "B" + g + "get" + (g + 990) + " 2s";
		document.getElementById("banner" + (i + 2)).style.animation = "B" + g + "get" + (g + 990) + " 2s";
		i++;
	}
	document.getElementById("usubutNum" + (i + 1)).id = "onbutNum" + (i + 1);
}

function changeImg1() {
	if (i == 1) {
		document.getElementById("banner1").style.animation = "B990get0 2s";
		document.getElementById("banner2").style.animation = "B990get0 2s";
	} else if (i == 2) {
		document.getElementById("banner1").style.animation = "BR990get0 2s";
		document.getElementById("banner3").style.animation = "B1980get2970 2s";
	}
	document.getElementById("onbutNum" + (i + 1)).id = "usubutNum" + (i + 1);
	document.getElementById("usubutNum1").id = "onbutNum1";
	i = 0;
	timeRound();
}

function changeImg2() {
	if (i == 0) {
		document.getElementById("banner1").style.animation = "B0get990 2s";
		document.getElementById("banner2").style.animation = "B0get990 2s";
	} else if (i == 2) {
		document.getElementById("banner2").style.animation = "B1980get990 2s";
		document.getElementById("banner3").style.animation = "B1980get990 2s";
	}
	document.getElementById("onbutNum" + (i + 1)).id = "usubutNum" + (i + 1);
	document.getElementById("usubutNum2").id = "onbutNum2";
	i = 1;
	timeRound();
}

function changeImg3() {
	if (i == 0) {
		document.getElementById("banner1").style.animation = "BR0get990 2s";
		document.getElementById("banner3").style.animation = "B2970get1980 2s";
	} else if (i == 1) {
		document.getElementById("banner2").style.animation = "B990get1980 2s";
		document.getElementById("banner3").style.animation = "B990get1980 2s";
	}
	document.getElementById("onbutNum" + (i + 1)).id = "usubutNum" + (i + 1);
	document.getElementById("usubutNum3").id = "onbutNum3";
	i = 2;
	timeRound();
}

function navBgimChange(x) {
	var obj = document.getElementsByClassName('nav1')[x];
	obj.style.backgroundImage = "url(img/main_2.gif)";
	var a = document.getElementsByClassName('navHref')[x];
	a.style.color = "black";
}

function navBgimBack(x) {
	var obj = document.getElementsByClassName('nav1')[x];
	obj.style.backgroundImage = "url()";
	var a = document.getElementsByClassName('navHref')[x];
	a.style.color = "white";
}