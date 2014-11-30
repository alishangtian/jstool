//将长整型的时间转化为距离现在的时间，刚刚，几分钟前，几小时前，几时几分，昨天几时几分，前天几时几分，
// 几月几日几时几分，年月日时分的形式
//参数 utcDate为想要转化的时间，为number类型，后台对应相应的长整型
function smartDateFormat(utcDate){ 

    var crdate = new Date(utcDate);
  var cryear = crdate.getFullYear();
	var crmonth = crdate.getMonth()+1;
	var crday = crdate.getDate();
	var crhour = crdate.getHours();
	var crminute = crdate.getMinutes();

	var currdate=new Date();
	var curryear = currdate.getFullYear();
	var currmonth = currdate.getMonth()+1;
	var currday = currdate.getDate();
	var currhour = currdate.getHours();
	var currminute = currdate.getMinutes();
	
	if(crhour < 10) {
	    crhour = "0" + crhour;
	}
	if(crminute < 10) {
	    crminute = "0" + crminute;
	}
	if(currhour < 10) {
	    currhour = "0" + currhour;
	}
	if(currminute < 10) {
	    currminute = "0" + currminute;
	}

	if(cryear != curryear){
    /* 年不同 */
		if(crmonth == 12 && currmonth == 1){
	    /* 月相邻 */
			var daydis = 31-crday+currday;
		    if(daydis == 1){
			/* 相邻日 */
			    var hourdis = 24-crhour+currhour;//时差
				if(hourdis == 1) {
				/* 时相连 */
					var mindis = 60-crminute+currminute;
					if(mindis > 60){
						 return hourdis+"小时前";
					} else {
						 return mindis+"分钟前";
					}
				} else if(hourdis == 2) {
					  return hourdis +"小时前";
				} else {
					  return "昨天" + " " + crhour+":"+crminute;
				}
			} else if(daydis == 2) {
			    return "前天" +" "+ crhour+":"+crminute;;
			} else {
			    return cryear +"年"+ crmonth +"月"+ crday +"日"+" "+crhour+":"+crminute;
			}
	    } else {
		/* 月不相邻 */
		    return cryear +"年"+ crmonth +"月"+ crday +"日"+" "+crhour+":"+crminute;
		}
	} else {
    /* 年相同 */
		if(crmonth != currmonth){
        /* 月不同 */
			if(crmonth - currmonth == 1){
            /* 月相邻 */
				var currdaycount = getDayOfMonth(cryear,crmonth);
			    var daydis = currdaycount-crday+currday;
				if(daydis == 1){
				/* 相邻日 */
				    var hourdis = 24-crhour+currhour;//时差
					if(hourdis == 1) {
					/* 时相连 */
					    var mindis = 60-crminute+currminute;
						if(mindis > 60){
						    return hourdis+"小时前";
						} else {
						    return mindis+"分钟前";
						}
					} else if(hourdis == 2) {
					    return hourdis +"小时前";
					} else {
					    return "昨天" + " " + crhour+":"+crminute;
					}
				} else if(daydis == 2){
				    return "前天" + " "+ crhour+":"+crminute;;
				} else {
				    return crmonth + "月" + crday +"日" + " " +crhour+":"+crminute;
				}
			} else {
            /* 月不相邻 */
				return crmonth + "月" + crday +"日" + " " +crhour+":"+crminute;
			}
		} else {
        /* 月相同 */
			if(crday != currday){
			/* 日不同 */
				var daydis = currday - crday;//日差
				if(daydis == 1){
			    /* 相邻日 */
					var hourdis = 24-crhour+currhour;//时差
					if(hourdis == 1) {
					/* 时相连 */
					    var mindis = 60-crminute+currminute;
						if(mindis > 60){
						    return hourdis+"小时前";
						} else {
						    return mindis+"分钟前";
						}
					} else if(hourdis == 2) {
					    return hourdis +"小时前";
					} else {
					    return "昨天" + " " + crhour+":"+crminute;
					}
			    } else if(daydis == 2) {
				    return "前天" + " "+ crhour+":"+crminute;
				} else {
				    return crmonth + "月" + crday +"日" + " " +crhour+":"+crminute;
				}
		    } else {
			/* 日相同 */
				var hourdis = currhour - crhour;//时差
			    if(hourdis == 0){
				/* 时相同 */
					var minutedis = currminute - crminute;//分差
				    if(minutedis == 0){
                    /* 分相同 */
						return "刚刚";
					} else{
					/* 分不同 */
						return minutedis +"分钟前";
					}
				} else if(hourdis == 1){
                /* 小时相邻 */
				     var mindis = 60-crminute+currminute;//分差
                     if(mindis > 60){
					     return hourdis+"小时前";
					 } else {
					     return mindis + "分钟前";
					 }

				} else if(hourdis < 12){
				/* 十二小时内 */
					return hourdis+"小时前";
				} else {
				/* 十二小时外 */
					return crhour+":"+crminute;
				}
			}
		}
	}
}

/* 返回某一年的某一月有几天 */
function getDayOfMonth(year,month){
	if(month == 2){
	    if(year%4 == 0){
			return 28;
		} else {
		    return 29;	
		} 
	} else if(month == 4 || month == 6 || month == 9 || month == 11 ) {
		return 30;
	} else {
	    return 31;
	}
} 