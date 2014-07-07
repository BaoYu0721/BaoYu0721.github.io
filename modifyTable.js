(function()
{
	var i = 0;
	var n = $("#listCourseBox").find("tr").length;
	var str1 = "#listCourseBox ";
	var str2 = " td:eq(0)";
	var str3;
	var str4;
	for (i = 0; i < n; i++)
	{
		str3 = "tr:eq("+i+")";
		str4 = '<td><div style = "margin-left:10px"></div></td><td>'+(i+1)+"</td>";
		$(str1+str3+str2).before(str4);
	}
	$("a[class*='red bold']").text("1073741824");
})();