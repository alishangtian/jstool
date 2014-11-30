//�������͵�ʱ��ת��Ϊ�������ڵ�ʱ�䣬�ոգ�������ǰ����Сʱǰ����ʱ���֣����켸ʱ���֣�ǰ�켸ʱ���֣�
// ���¼��ռ�ʱ���֣�������ʱ�ֵ���ʽ
//���� utcDateΪ��Ҫת����ʱ�䣬Ϊnumber���ͣ���̨��Ӧ��Ӧ�ĳ�����
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
    /* �겻ͬ */
		if(crmonth == 12 && currmonth == 1){
	    /* ������ */
			var daydis = 31-crday+currday;
		    if(daydis == 1){
			/* ������ */
			    var hourdis = 24-crhour+currhour;//ʱ��
				if(hourdis == 1) {
				/* ʱ���� */
					var mindis = 60-crminute+currminute;
					if(mindis > 60){
						 return hourdis+"Сʱǰ";
					} else {
						 return mindis+"����ǰ";
					}
				} else if(hourdis == 2) {
					  return hourdis +"Сʱǰ";
				} else {
					  return "����" + " " + crhour+":"+crminute;
				}
			} else if(daydis == 2) {
			    return "ǰ��" +" "+ crhour+":"+crminute;;
			} else {
			    return cryear +"��"+ crmonth +"��"+ crday +"��"+" "+crhour+":"+crminute;
			}
	    } else {
		/* �²����� */
		    return cryear +"��"+ crmonth +"��"+ crday +"��"+" "+crhour+":"+crminute;
		}
	} else {
    /* ����ͬ */
		if(crmonth != currmonth){
        /* �²�ͬ */
			if(crmonth - currmonth == 1){
            /* ������ */
				var currdaycount = getDayOfMonth(cryear,crmonth);
			    var daydis = currdaycount-crday+currday;
				if(daydis == 1){
				/* ������ */
				    var hourdis = 24-crhour+currhour;//ʱ��
					if(hourdis == 1) {
					/* ʱ���� */
					    var mindis = 60-crminute+currminute;
						if(mindis > 60){
						    return hourdis+"Сʱǰ";
						} else {
						    return mindis+"����ǰ";
						}
					} else if(hourdis == 2) {
					    return hourdis +"Сʱǰ";
					} else {
					    return "����" + " " + crhour+":"+crminute;
					}
				} else if(daydis == 2){
				    return "ǰ��" + " "+ crhour+":"+crminute;;
				} else {
				    return crmonth + "��" + crday +"��" + " " +crhour+":"+crminute;
				}
			} else {
            /* �²����� */
				return crmonth + "��" + crday +"��" + " " +crhour+":"+crminute;
			}
		} else {
        /* ����ͬ */
			if(crday != currday){
			/* �ղ�ͬ */
				var daydis = currday - crday;//�ղ�
				if(daydis == 1){
			    /* ������ */
					var hourdis = 24-crhour+currhour;//ʱ��
					if(hourdis == 1) {
					/* ʱ���� */
					    var mindis = 60-crminute+currminute;
						if(mindis > 60){
						    return hourdis+"Сʱǰ";
						} else {
						    return mindis+"����ǰ";
						}
					} else if(hourdis == 2) {
					    return hourdis +"Сʱǰ";
					} else {
					    return "����" + " " + crhour+":"+crminute;
					}
			    } else if(daydis == 2) {
				    return "ǰ��" + " "+ crhour+":"+crminute;
				} else {
				    return crmonth + "��" + crday +"��" + " " +crhour+":"+crminute;
				}
		    } else {
			/* ����ͬ */
				var hourdis = currhour - crhour;//ʱ��
			    if(hourdis == 0){
				/* ʱ��ͬ */
					var minutedis = currminute - crminute;//�ֲ�
				    if(minutedis == 0){
                    /* ����ͬ */
						return "�ո�";
					} else{
					/* �ֲ�ͬ */
						return minutedis +"����ǰ";
					}
				} else if(hourdis == 1){
                /* Сʱ���� */
				     var mindis = 60-crminute+currminute;//�ֲ�
                     if(mindis > 60){
					     return hourdis+"Сʱǰ";
					 } else {
					     return mindis + "����ǰ";
					 }

				} else if(hourdis < 12){
				/* ʮ��Сʱ�� */
					return hourdis+"Сʱǰ";
				} else {
				/* ʮ��Сʱ�� */
					return crhour+":"+crminute;
				}
			}
		}
	}
}

/* ����ĳһ���ĳһ���м��� */
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