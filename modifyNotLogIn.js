//对登陆页面的改造
$("input#i_user").hover(function(){/*对用户名输入框效果改进*/
	$("input#i_user").css({"width":"175px",
	"padding-left":"5px",
	"font-size":"14px",
	"height":"34px",
	"background":"#fff",
	"border-radius":"4px",
	"border": "2px solid #f00",
	"line-height":"34px"});
},function(){
	$("input#i_user").css({"width":"175px",
	"padding-left":"5px",
	"font-size":"14px",
	"height":"34px",
	"background":"#fff",
	"border-radius":"4px",
	"border": "1px solid #fff",
	"line-height":"34px"});
});


$("input#passwd").hover(function(){/*对密码输入框效果改进*/
	$("input#passwd").css({"width":"175px",
	"padding-left":"5px",
	"font-size":"14px",
	"height":"34px",
	"background":"#fff",
	"border-radius":"4px",
	"border": "2px solid #f00",
	"line-height":"34px"});
}, function(){
	$("input#passwd").css({"width":"175px",
	"padding-left":"5px",
	"font-size":"14px",
	"height":"34px",
	"background":"#fff",
	"border-radius":"4px",
	"border": "1px solid #fff",
	"line-height":"34px"});
});


$("a#login").hover(function(){/*对登陆按钮效果改进*/
	$("a#login").css({"width":"110px",
	"background":"#fff",
	"background-position":"68px -94px",
	"border":"1px solid #fff",
	"outline":"none",
	"font-family":"\5FAE\8F6F\96C5\9ED1",
	"font-size":"16px",
	"text-align":"left",
	"text-indent":"27px",
	"color":"#953cac",
	"cursor":"pointer",
	"overflow":"hidden",
	"line-height":"34px",
	"height":"34px",
	"display":"block",
	"border-radius":"4px"});
}, function(){
	$("a#login").css({"width":"110px",
	"background":"#953cac url(/res/fzjx/images/index/bg.png) no-repeat",
	"background-position":"68px -94px",
	"border":"1px solid #953cac",
	"outline":"none",
	"font-family":"\5FAE\8F6F\96C5\9ED1",
	"font-size":"16px",
	"text-align":"left",
	"text-indent":"27px",
	"color":"#fff",
	"cursor":"pointer",
	"overflow":"hidden",
	"line-height":"34px",
	"height":"34px",
	"display":"block",
	"border-radius":"4px"});
});

$("ul.clearfix.list li img").mouseenter(function(){
	$(this).fadeOut(200);
	$(this).fadeIn(200);
});
