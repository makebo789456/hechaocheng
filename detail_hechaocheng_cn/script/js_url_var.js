<!--
function hechaocheng_search(name)
{
    // 如果链接没有参数，或者链接中不存在我们要获取的参数，直接返回空
    if(location.href.indexOf("?")==-1 || location.href.indexOf(name+'=')==-1)
    {
		self.location="http://"+location.hostname+"?errot=404";
    }
    // 获取链接中参数部分
    var queryString = location.href.substring(location.href.indexOf("?")+1);
    // 分离参数对 ?key=value&key2=value2
    var parameters = queryString.split("&");
    var pos, paraName, paraValue;
    for(var i=0; i<parameters.length; i++)
    {
        // 获取等号位置
        pos = parameters[i].indexOf('=');
        if(pos == -1) { continue; }
 
        // 获取name 和 value
        paraName = parameters[i].substring(0, pos);
        paraValue = parameters[i].substring(pos + 1);
 
        // 如果查询的name等于当前name，就返回当前值，同时，将链接中的+号还原成空格
        if(paraName == name)
        {
            return unescape(paraValue.replace(/\+/g, " "));
        }
    }
    return '';
};
//http://detail.hechaocheng.cn/s.htm?q=test
document.write("<title>");
document.write(hechaocheng_search('q'));
document.write(" | 阿城守候</title>");
//-->