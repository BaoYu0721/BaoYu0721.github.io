(function()
{
	var addr1 = $('<li><a href="http://info.tsinghua.edu.cn" target=_blank>信息门户</a></li>');
	var addr3 = $('<li><a href="http://lib.tsinghua.edu.cn/dra/" target=_blank>图书馆</a></li>');
	$("ul.nav.clear").append(addr1);
	$("ul.nav.clear").append(addr3);
})();


(function()
{
	var span1 = $('<span class="gaplines"></span>');
	$('div.wraps').append(span1);
	var div1 = $('<div class="rights"><p style="font-size:16px">收藏夹</p><p class="p2s" id="addWeb">添加网站</p></div>');
	$('div.wraps').append(div1);
	var div2 = $('<div id = "lianjie"></div>');
	div2.css({"color":"#fff"});
	var span2 = $('<span></span>');
	span2.css({"border-left":"1px solid #fff", 
		"width":"1px", 
		"overflow":"hidden", 
		"float":"left",
		"display":"inline",
		"height":"110px",
		"margin-left":"20px",
		"margin-right":"20px"});
	$('div.wraps').append(span2);
	$('div.wraps').append(div2);
	
	var titlt, url;
	$("#addWeb").click(function(e){
		url = window.prompt("请输入网站URL:","");
		title = window.prompt("请输入网站名称:","");
		if (title.length !== 0 && url.length !== 0)
		{
			var temp = '<div><a href="'+url + '" class="white" target=_blank>' + title + '</a></div>';
			var addr = $(temp);
			addr.css({"margin-left":"5px", "margin-right":"5px", "display":"inline", "height":"10px"});
			$('#lianjie').append(addr);
		}
	});
})();