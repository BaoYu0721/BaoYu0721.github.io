(function()
{
	var list = document.getElementsByClassName('clearfix list');
	var t = list[0].lastChild.previousSibling;
	var pre = list[0].firstChild.nextSibling.nextSibling;
	list[0].removeChild(t);
	list[0].insertBefore(t, pre);
	var tar = document.getElementsByClassName('coursename');
	tar[0].innerText = 'Web前端技术实训（软件学院）';
	var g = document.getElementsByClassName("name");
	g[0].innerText = '刘强';
})();