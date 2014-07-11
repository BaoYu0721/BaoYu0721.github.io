window.nPicture = 0;
window.nowTime = Date.now();
window.flag = true;
window.i = setInterval(NextImg, 6000);
window.commentPage = 1;
window.totalCommentPage = 4;
//window.localStorage.lastPicture = 1;	//上次关闭时所停留的图片页数
//window.localStorage.lastCommentPage = 1;	//上次关闭时所停留的评论页数
window.pictureNum = 6;

function loadFromJson(url, cfunc)
{
  	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = cfunc;
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

function loadImg(n)
{
	var temp;
	var node;
	loadFromJson("imgInfo.json?t="+Math.random(), function()
  	{
  		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
    	{
			temp = JSON.parse(xmlhttp.responseText);
			node = '<img id="showImg" src="' + temp.url[n] + '" title="' + temp.info[n] + '" />';
			window.pictureNum = temp.pictureNum;
			$("#ShowImg").fadeOut(1000);
			$("#ShowImg").queue(function(){
				document.getElementById("ShowImg").innerHTML = node;
				$(this).dequeue();
			});
			$("#ShowImg").fadeIn(1000);
			document.getElementById("imgInfo").innerHTML = temp.info[n];
			window.localStorage.lastPicture = n;
    	}
  	});
}

function clickToImgN(n)
{
	window.nPicture = n;
	window.nowTime = Date.now();
	window.flag = true;
	clearInterval(window.i);
	loadImg(n);
	window.i = setInterval(NextImg, 6000);
	updateKongJianCSS();
}


function NextImg()
{
	if (window.nPicture >= window.pictureNum - 1)
		window.nPicture = 0;
	else
		window.nPicture++;
	loadImg(window.nPicture);
	updateKongJianCSS();
}


function PreImg()
{
	if (window.nPicture <= 0)
		window.nPicture = window.pictureNum - 1;
	else
		window.nPicture--;
	loadImg(window.nPicture);
	updateKongJianCSS();
}

function clickToNext(i)
{
	window.nowTime = Date.now();
	window.flag = true;
	clearInterval(i);
	NextImg();
	window.i = setInterval(NextImg, 6000);
}

function clickToPre(i)
{
	window.nowTime = Date.now();
	window.flag = true;
	clearInterval(i);
	PreImg();
	window.i = setInterval(NextImg, 6000);
}

function turnToCommentPage(n)
{
	var url;
	var temp;
	var NCommentThisPage;
	var html = '';
	var str1, str2, str3, str4, str5;
	url = "comment/commentInfo" + n + ".json?t=" + Math.random();
	str1 = '<div class="comment"><div class="storey"><div class="userPhoto"><img src="';
	str2 = '"/></div><div class="userName" align="left">';
	str3 = '</div><div class="content"><div class="commentContent" align="left"><p>';
	str4 = '</p></div><div class="otherInfo" align="right">';
	str5 = '</div></div></div></div>';
	loadFromJson(url, function()
  	{
  		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
    	{
			temp = JSON.parse(xmlhttp.responseText);
			if (temp.count % 10 !== 0)
				window.totalCommentPage = Math.floor(temp.count/10) + 1;
			else
				window.totalCommentPage = temp.count/10;
			$("#commentNum").text("(" + temp.count + ")");
			$("#rangeStart").text("" + 10*n-9);
			if (temp.count - 10*n < 0)
				$("#rangeEnd").text("" + temp.count);
			else
				$("#rangeEnd").text("" + 10*n);
			NCommentThisPage = temp.comment.length;
			for (var i = 0; i < NCommentThisPage; i++)
			{
				var comment =  temp.comment[i];
				html = html + str1 +comment.logo + str2 +comment.user + str3 + comment.content + str4 + comment.time + str5;
			}
			document.getElementById("CommentBox").innerHTML = html;
			window.localStorage.lastCommentPage = n;
    	}
  	});
}

function GoToPage()//与select控件绑定的函数
{
	var obj = document.getElementById("goToPage");
	var v = obj.options[obj.selectedIndex].value;
	var t = parseInt(v, 10);
	window.commentPage = t;
	obj.selectedIndex = t - 1;
	turnToCommentPage(t);
	updateKongJianCSS();
}

function updateKongJianCSS()
{
	var obj = document.getElementById("goToPage");
	obj.selectedIndex = window.commentPage - 1;
	if (window.commentPage == 1)
	{
		if ($('#bnPre').hasClass("ulPre"))
		{
			$('#bnPre').removeClass("ulPre");
			$('#bnPre').addClass("ulPreUnable");
		}
		if ($('#bnNext').hasClass("ulNextUnable"))
		{
			$('#bnNext').removeClass("ulNextUnable");
			$('#bnNext').addClass("ulNext");
		}
	}
	else if (window.commentPage == window.totalCommentPage)
	{
		if ($('#bnNext').hasClass("ulNext"))
		{
			$('#bnNext').removeClass("ulNext");
			$('#bnNext').addClass("ulNextUnable");
		}
		if ($('#bnPre').hasClass("ulPreUnable"))
		{
			$('#bnPre').removeClass("ulPreUnable");
			$('#bnPre').addClass("ulPre");
		}
	}
	else
	{
		if ($('#bnPre').hasClass("ulPreUnable"))
		{
			$('#bnPre').removeClass("ulPreUnable");
			$('#bnPre').addClass("ulPre");
		}
		if ($('#bnNext').hasClass("ulNextUnable"))
		{
			$('#bnNext').removeClass("ulNextUnable");
			$('#bnNext').addClass("ulNext");
		}
	}
	var temp1;
	for (j = 0; j < 6; j++)
	{
		temp1 = "#pictureID" + j;
		if (j != window.nPicture)
		{
			if ($(temp1).hasClass("pictureChangeSelected"))
			{
				$(temp1).removeClass("pictureChangeSelected");
				$(temp1).addClass("pictureChange");
			}
		}
		else
		{
			if ($(temp1).hasClass("pictureChange"))
			{
				$(temp1).removeClass("pictureChange");
				$(temp1).addClass("pictureChangeSelected");
			}
		}
	}
}

function NextCommentPage()
{
	if (window.commentPage < window.totalCommentPage)
	{
		window.commentPage++;
		turnToCommentPage(window.commentPage);
		updateKongJianCSS();
	}
}

function PreCommentPage()
{
	if (window.commentPage > 1)
	{
		window.commentPage--;
		turnToCommentPage(window.commentPage);
		updateKongJianCSS();
	}
}


$(document).ready(function(e) {
    updateKongJianCSS();
	$("#nextImg").fadeTo("fast", 0.15);
	$("#preImg").fadeTo("fast", 0.15);
	
	$("#nextImg").hover(function(){
		$("#nextImg").fadeTo("fast", 1);
	}, function(){
		$("#nextImg").fadeTo("fast", 0.15);
	});
	$("#preImg").hover(function(){
		$("#preImg").fadeTo("fast", 1);
	}, function(){
		$("#preImg").fadeTo("fast", 0.15);
	});
	
	$("#ShowImg").hover(function(){
		$("#imgInfo").slideDown("fast");
	}, function(){
		$("#imgInfo").slideUp("fast");
	});
	
	$("#bnNext").hover(function(){
		if ($("#bnNext").hasClass("ulNext"))
		{
			$("#bnNext").removeClass("ulNext");
			$("#bnNext").addClass("ulNextHover");
		}
	}, function(){
		if ($("#bnNext").hasClass("ulNextHover"))
		{
			$("#bnNext").removeClass("ulNextHover");
			$("#bnNext").addClass("ulNext");
			updateKongJianCSS();
		}
	});
	
	$("#bnPre").hover(function(){
		if ($("#bnPre").hasClass("ulPre"))
		{
			$("#bnPre").removeClass("ulPre");
			$("#bnPre").addClass("ulPreHover");
		}
	}, function(){
		if ($("#bnPre").hasClass("ulPreHover"))
		{
			$("#bnPre").removeClass("ulPreHover");
			$("#bnPre").addClass("ulPre");
			updateKongJianCSS();
		}
	});
	
	if (typeof window.localStorage.lastPicture != 'undefined')
	{
		window.nPicture = window.localStorage.lastPicture;
		loadImg(window.nPicture);
	}
});


document.onkeydown = function()
{
	if (window.event.keyCode == 37)
		clickToPre(window.i);
	else if (window.event.keyCode == 39)
		clickToNext(window.i);
}