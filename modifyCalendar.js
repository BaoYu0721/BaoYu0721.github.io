//日历页面的修改
function judgeChongFu(toBeJudged, target)/*在日历上追加任务时，防止追加上重复项*/
{
	var i = 1, j = 1;
	var n = toBeJudged.length;
	var temp;
	for (i = 1; i < n; i++)
	{
		if (toBeJudged[i] == ";")/*任务之间的分隔符是分号*/
		{
			temp = toBeJudged.slice(j, i);
			if (temp === target)
				return true;
			j = i+1;
		}
	}
	return false;
}


$(document).ready(function() {/*为日历添加日程*/
    var i = 0;
	var j, k;
	var n = $("table.fc-border-separate").find("tr").length;
	var month, day;
	var str1, str2, temp;
	var currentMonthText = $("span.fc-header-title").text();
	var temp2 = currentMonthText.slice(5, 7);
	var currentMonth = parseInt(temp2, 10);/*获得当前日历头部显示的月份*/
	var currentDay;
	var strquer, strquer2;
	for (i = 0; i < localStorage.nhw; i++)
	{
		str1 = "homework"+i;
		str2 = "deadline"+i;
		temp = localStorage[str2].slice(5, 7);
		month = parseInt(temp, 10);/*获得作业截止日期的月份*/
		temp = localStorage[str2].slice(8, 10);
		day = parseInt(temp, 10);
		if (month === currentMonth)/*只显示月份相同的其余的月份的任务请到相应的月份进行查询*/
		{
			for (j = 1; j < n; j++)
			{
				for (k = 0; k < 7; k++)
				{
					strquer = "table.fc-border-separate tr:eq(" + j + ") td:eq(" + k + ") div div.fc-day-number";
					temp = $(strquer).text();
					temp2 = temp.slice(0, 2);
					currentDay = parseInt(temp2, 10);
					if (j === 1 && currentDay > 20)
						continue;
					else if (currentDay === day)
					{
						strquer2 = "table.fc-border-separate tr:eq(" + j + ") td:eq(" + k + ") div div.fc-day-content";
						temp = $(strquer2).text();
						if (judgeChongFu(temp, localStorage[str1]) == false)
							$(strquer2).text(temp + localStorage[str1] + ";");
						$(strquer2).css("text-align", "center");
						j = n;
						k = 7;
					}
				}
			}
		}
	}
});

