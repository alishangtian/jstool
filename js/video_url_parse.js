    /*用于提取优酷视频的swf地址，并展示出来*/  
		function createPreviewVideo(){
		    var videoUrl = $("#url").val();
            if (!videoUrl){
                message.err("请输入视频网址");
                return false;
            } else {
            	$("#preview")
				.html("<img src=\"images/loadTran.gif\" id=\"realimage\" />获取中......");
            	 glo_url=convert_url(videoUrl);
                 $("#preview").html('<embed type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"' +
                    ' src="' + glo_url + '"' +
                    ' width="' + 155  + '"' +
                    ' height="' + 132  + '"' +
                    ' wmode="transparent" play="true" loop="false" menu="false" allowscriptaccess="never" allowfullscreen="true" ></embed>');
            }
        }

    function convert_url(url){
		if ( !url )return;
		var matches = url.match(/youtu.be\/(\w+)$/) || url.match(/youtube\.com\/watch\?v=(\w+)/) || url.match(/youtube.com\/v\/(\w+)/);
		// 增加国内主流视频网站的预览功能
		var youku = url.match(/youku\.com\/v_show\/id_(\w+)/);
		var tudou = url.match(/tudou\.com\/programs\/view\/(.*)\//);
		var ku6 = url.match(/ku6\.com\/show\/(.*)\.html/);
		var _56 = url.match(/56\.com\/.*\/v_(.*)\.html/);
		var _163 = url.match(/163\.com\/(.*)\/(.*)\/(.*)\.html/);
		if (matches){
			url = "https://www.youtube.com/v/" + matches[1] + "?version=3&feature=player_embedded";
		}else if(youku){
		     url = "http://player.youku.com/player.php/sid/"+youku[1]+"/v.swf";
		}else if(tudou){
			url = "http://www.tudou.com/v/"+tudou[1]+"/v.swf";
		}else if(ku6){
			url= "http://player.ku6.com/refer/"+ku6[1]+"/v.swf";
		}else if(_56){
			url = "http://player.56.com/v_"+_56[1]+".swf";
		}else if(_163){
			// return;
			switch(_163[1]){
				case 'zongyi': 
					pltype = 4;
					break;
				case 'jishi':
					pltype = 5;
					break;
				case 'zixun':
					pltype = 6;
					break;
				case 'yule':
					pltype = 8;
					break;
				case 'mv':
					pltype = 9;
					break;
				case 'paike':
					pltype = 10;
					break;
			}
			url = "http://swf.ws.126.net/v/ljk/shareplayer/ShareFlvPlayer.swf?pltype="+pltype+"&topicid=0085&vid="+_163[3]+"&sid="+_163[2];
		}else if(!endWith(url,[".swf",".flv",".wmv"])){
		     $("#preview").innerHTML = "地址错误";
		         return;
		     }
		     return url;
    }
    