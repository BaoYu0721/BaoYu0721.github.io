//作业页面的修改
function extractInfo()/*从作业页面中抽取信息*/
{
	var i = 0;
	var str1 = "#homeworklist ";
	var str2;
	var str3 = " td:eq(1)";
	var str4 = " td:eq(5)";
	var str7 = " td:eq(2)"
	var n = $("#homeworklist").find("tr").length;
	var str5, str6;
	localStorage.nhw = n;
	for (i = 0; i < n; i++)
	{
		str2 = "tr:eq("+i+")";
		str5 = "homework"+i;
		str6 = "deadline"+i;
		if ($(str1+str2+str7).text() == "尚未提交")	/*对还没有交的作业进行标注*/
			localStorage[str5] = $(str1+str2+str3).text() + "（尚未提交）";
		else
			localStorage[str5] = $(str1+str2+str3).text();
		localStorage[str6] = $(str1+str2+str4).text();
	}
}


(function()
{
	var a = $('<a id = "addToCalendar" class = "gray-button f14"><div class = "icon-collect"></div>全部加入日程</a>');
	$("div.topbar").append(a);
	$("#addToCalendar").click(function(e){
		extractInfo();
	});
})();