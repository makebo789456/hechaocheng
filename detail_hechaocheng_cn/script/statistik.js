var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3Fff38717a9a526c8cf203a96bd6a28130' type='text/javascript'%3E%3C/script%3E"));
document.write ('<a href="http://hechaocheng.cn/?js_img" target="_blank" title="ACity_Waiting Statistik">�����غ�</a>&nbsp;<a href="http://connect.qq.com/widget/wpa/chat.html?tuin=14872638&sigT=dabfd7daaa71e629e43c1fc38dbd4d1e6fff9e82521fa38e999688ca575b577f24c935538eccbfb63bdfdabe62fda7c1"target="_blank"><img src="http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/img/Connect_logo_1.png" border="0" align="middle" /></a>\n');
var a9970tf="51la";var a9970pu="";var a9970pf="51la";var a9970su=window.location;var a9970sf=document.referrer;var a9970of="";var a9970op="";var a9970ops=1;var a9970ot=1;var a9970d=new Date();var a9970color="";if (navigator.appName=="Netscape"){a9970color=screen.pixelDepth;} else {a9970color=screen.colorDepth;}
try{a9970tf=top.document.referrer;}catch(e){}
try{a9970pu =window.parent.location;}catch(e){}
try{a9970pf=window.parent.document.referrer;}catch(e){}
try{a9970ops=document.cookie.match(new RegExp("(^| )AJSTAT_ok_pages=([^;]*)(;|$)"));a9970ops=(a9970ops==null)?1: (parseInt(unescape((a9970ops)[2]))+1);var a9970oe =new Date();a9970oe.setTime(a9970oe.getTime()+60*60*1000);document.cookie="AJSTAT_ok_pages="+a9970ops+ ";path=/;expires="+a9970oe.toGMTString();a9970ot=document.cookie.match(new RegExp("(^| )AJSTAT_ok_times=([^;]*)(;|$)"));if(a9970ot==null){a9970ot=1;}else{a9970ot=parseInt(unescape((a9970ot)[2])); a9970ot=(a9970ops==1)?(a9970ot+1):(a9970ot);}a9970oe.setTime(a9970oe.getTime()+365*24*60*60*1000);document.cookie="AJSTAT_ok_times="+a9970ot+";path=/;expires="+a9970oe.toGMTString();}catch(e){}
try{if(document.cookie==""){a9970ops=-1;a9970ot=-1;}}catch(e){}
a9970of=a9970sf;if(a9970pf!=="51la"){a9970of=a9970pf;}if(a9970tf!=="51la"){a9970of=a9970tf;}a9970op=a9970pu;try{lainframe}catch(e){a9970op=a9970su;}document.write('<img style="width:0px;height:0px" src="http://web1.51.la:82/go.asp?svid=8&id=5229970&tpages='+a9970ops+'&ttimes='+a9970ot+'&tzone='+(0-a9970d.getTimezoneOffset()/60)+'&tcolor='+a9970color+'&sSize='+screen.width+','+screen.height+'&referrer='+escape(a9970of)+'&vpage='+escape(a9970op)+'" />');
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-38994756-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
function lz_encode(str)
{
	var e = "", i = 0;

	for(i=0;i<str.length;i++) {
		if(str.charCodeAt(i)>=0&&str.charCodeAt(i)<=255) {
			e = e + escape(str.charAt(i));
		}
		else {
			e = e + str.charAt(i);
		}
	}

	return e;
}

function lz_get_screen()
{
	var c = "";

	if (self.screen) {
		c = screen.width+"x"+screen.height;
	}

	return c;
}

function lz_get_color()
{
	var c = ""; 

	if (self.screen) {
		c = screen.colorDepth+"-bit";
	}

	return c;
}

function lz_get_language()
{
	var l = "";
	var n = navigator;

	if (n.language) {
		l = n.language.toLowerCase();
	}
	else
	if (n.browserLanguage) {
		l = n.browserLanguage.toLowerCase();
	}

	return l;
}
 
function lz_get_agent()
{
	var a = "";
	var n = navigator;

	if (n.userAgent) {
		a = n.userAgent;
	}

	return a;
}

function lz_get_jvm_enabled()
{
	var j = "";
	var n = navigator;

	j = n.javaEnabled() ? 1 : 0;

	return j;
}

function lz_get_cookie_enabled()
{
	var c = "";
	var n = navigator;
	c = n.cookieEnabled ? 1 : 0;

	return c;
}

function lz_get_flash_ver()
{
	var f="",n=navigator;

	if (n.plugins && n.plugins.length) {
		for (var ii=0;ii<n.plugins.length;ii++) {
			if (n.plugins[ii].name.indexOf('Shockwave Flash')!=-1) {
				f=n.plugins[ii].description.split('Shockwave Flash ')[1];
				break;
			}
		}
	}
	else
	if (window.ActiveXObject) {
		for (var ii=10;ii>=2;ii--) {
			try {
				var fl=eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash."+ii+"');");
				if (fl) {
					f=ii + '.0';
					break;
				}
			}
			 catch(e) {}
		}
	}
	return f;
} 

function lz_get_app()
{
	var a = "";
	var n = navigator;

	if (n.appName) {
		a = n.appName;
	}
	return a; 
}
 
function lz_c_ctry_top_domain(str)
{
	var pattern = "/^aero$|^cat$|^coop$|^int$|^museum$|^pro$|^travel$|^xxx$|^com$|^net$|^gov$|^org$|^mil$|^edu$|^biz$|^info$|^name$|^ac$|^mil$|^co$|^ed$|^gv$|^nt$|^bj$|^hz$|^sh$|^tj$|^cq$|^he$|^nm$|^ln$|^jl$|^hl$|^js$|^zj$|^ah$|^hb$|^hn$|^gd$|^gx$|^hi$|^sc$|^gz$|^yn$|^xz$|^sn$|^gs$|^qh$|^nx$|^xj$|^tw$|^hk$|^mo$|^fj$|^ha$|^jx$|^sd$|^sx$/i";

	if(str.match(pattern)){ return 1; }

	return 0;
}

function lz_c_ctry_domain(str)
{
	var pattern = "/^ac$|^ad$|^ae$|^af$|^ag$|^ai$|^al$|^am$|^an$|^ao$|^aq$|^ar$|^as$|^at$|^au$|^aw$|^az$|^ba$|^bb$|^bd$|^be$|^bf$|^bg$|^bh$|^bi$|^bj$|^bm$|^bo$|^br$|^bs$|^bt$|^bv$|^bw$|^by$|^bz$|^ca$|^cc$|^cd$|^cf$|^cg$|^ch$|^ci$|^ck$|^cl$|^cm$|^cn$|^co$|^cr$|^cs$|^cu$|^cv$|^cx$|^cy$|^cz$|^de$|^dj$|^dk$|^dm$|^do$|^dz$|^ec$|^ee$|^eg$|^eh$|^er$|^es$|^et$|^eu$|^fi$|^fj$|^fk$|^fm$|^fo$|^fr$|^ly$|^hk$|^hm$|^hn$|^hr$|^ht$|^hu$|^id$|^ie$|^il$|^im$|^in$|^io$|^ir$|^is$|^it$|^je$|^jm$|^jo$|^jp$|^ke$|^kg$|^kh$|^ki$|^km$|^kn$|^kp$|^kr$|^kw$|^ky$|^kz$|^la$|^lb$|^lc$|^li$|^lk$|^lr$|^ls$|^lt$|^lu$|^lv$|^ly$|^ga$|^gb$|^gd$|^ge$|^gf$|^gg$|^gh$|^gi$|^gl$|^gm$|^gn$|^gp$|^gq$|^gr$|^gs$|^gt$|^gu$|^gw$|^gy$|^ma$|^mc$|^md$|^mg$|^mh$|^mk$|^ml$|^mm$|^mn$|^mo$|^mp$|^mq$|^mr$|^ms$|^mt$|^mu$|^mv$|^mw$|^mx$|^my$|^mz$|^na$|^nc$|^ne$|^nf$|^ng$|^ni$|^nl$|^no$|^np$|^nr$|^nu$|^nz$|^om$|^re$|^ro$|^ru$|^rw$|^pa$|^pe$|^pf$|^pg$|^ph$|^pk$|^pl$|^pm$|^pr$|^ps$|^pt$|^pw$|^py$|^qa$|^wf$|^ws$|^sa$|^sb$|^sc$|^sd$|^se$|^sg$|^sh$|^si$|^sj$|^sk$|^sl$|^sm$|^sn$|^so$|^sr$|^st$|^su$|^sv$|^sy$|^sz$|^tc$|^td$|^tf$|^th$|^tg$|^tj$|^tk$|^tm$|^tn$|^to$|^tp$|^tr$|^tt$|^tv$|^tw$|^tz$|^ua$|^ug$|^uk$|^um$|^us$|^uy$|^uz$|^va$|^vc$|^ve$|^vg$|^vi$|^vn$|^vu$|^ye$|^yt$|^yu$|^za$|^zm$|^zr$|^zw$/i";

	if(str.match(pattern)){ return 1; }

	return 0;
}

function lz_get_domain(host)
{
	var d=host.replace(/^www\./, "");

	var ss=d.split(".");
	var l=ss.length;

	if(l == 3){
		if(lz_c_ctry_top_domain(ss[1]) && lz_c_ctry_domain(ss[2])){
		}
		else{
			d = ss[1]+"."+ss[2];
		}
	}
	else if(l >= 3){

		var ip_pat = "^[0-9]*\.[0-9]*\.[0-9]*\.[0-9]*$";

		if(host.match(ip_pat)){
			return d;
		}

		if(lz_c_ctry_top_domain(ss[l-2]) && lz_c_ctry_domain(ss[l-1])) {
			d = ss[l-3]+"."+ss[l-2]+"."+ss[l-1];
		}
		else{
			d = ss[l-2]+"."+ss[l-1];
		}
	}
		
	return d;
}

function lz_get_cookie(name)
{
	var mn=name+"=";
	var b,e;
	var co=document.cookie;

	if (mn=="=") {
		return co;
	}

	b=co.indexOf(mn);

	if (b < 0) {
		return "";
	}

	e=co.indexOf(";", b+name.length);

	if (e < 0) {
		return co.substring(b+name.length + 1);
	}
	else {
		return co.substring(b+name.length + 1, e);
	}
}
 
function lz_set_cookie(name, val, cotp) 
{ 
	var date=new Date; 
	var year=date.getFullYear(); 
	var hour=date.getHours(); 

	var cookie="";

	if (cotp == 0) { 
		cookie=name+"="+val+";"; 
	} 
	else if (cotp == 1) { 
		year=year+10; 
		date.setYear(year); 
		cookie=name+"="+val+";expires="+date.toGMTString()+";"; 
	} 
	else if (cotp == 2) { 
		hour=hour+1; 
		date.setHours(hour); 
		cookie=name+"="+val+";expires="+date.toGMTString()+";"; 
	} 

	var d=lz_get_domain(document.domain);
	if(d != ""){
		cookie +="domain="+d+";";
	}
	cookie +="path="+"/;";

	document.cookie=cookie;
}

function str_reverse(str) {
	var ln = str.length;
	var i=0;
	var temp="";
	for(i=ln-1; i>-1; i--) {
		if(str.charAt(i)==".")
			temp += "#";
		else
			temp += str.charAt(i);
	}

	return temp;
}

function lz_get_ss_id(str)
{
	len=str.indexOf("_");
	str=str.substring(len+1);
	len=str.indexOf("_");
	str=str.substring(len+1);
	return str;
}

function lz_get_ss_no(str) {
	len=str.indexOf("_");
	str=str.substring(0,len);
	return parseInt(str);
}

function lz_get_stm() 
{ 
	var date = new Date(); 
	var yy=date.getFullYear(); 
	var mm=date.getMonth(); 
	var dd=date.getDate(); 
	var hh=date.getHours(); 
	var ii=date.getMinutes(); 
	var ss=date.getSeconds(); 
	var i; 
	var tm=0; 
	for(i = 1970; i < yy; i++) { 
		if ((i % 4 == 0 && i % 100 != 0) || (i % 100 == 0 && i % 400 == 0)) { 
			tm=tm+31622400; 
		} 
		else { 
			tm=tm+31536000; 
		} 
	}
	mm=mm+1;
	
	for(i = 1; i < mm; i++) { 
		if (i == 1 || i == 3 || i == 5 || i == 7 || i == 8 || i == 10 || i == 12) { 
			tm=tm+2678400; 
		} 
		else { 
			if (i == 2) { 
				if ((yy % 4 == 0 && yy % 100 != 0) || (yy % 100 == 0 && yy % 400 == 0)) { 
					tm=tm+2505600; 
				} 
				else { 
					tm=tm+2419200; 
				} 
			} 
		 	else { 
				tm=tm+2592000; 
			} 
		} 
	}
	
	tm = tm +  (dd-1) * 86400; tm = tm +  hh * 3600; 
	tm = tm +  ii * 60; 
	tm = tm +  ss; 
	return tm; 
} 

function lz_get_ctm(str) {
	len=str.indexOf("_");
	str=str.substring(len+1);
	len=str.indexOf("_");
	str=str.substring(0,len);
	return parseInt(str, 10); 
}

/* main function */
function lz_main()
{
	var unit_id     = "2780015";
	var client_ip   = "183.60.137.162";
	var server_time = "1330114307";
	var verify_code = "24d8ce9c";
	var type        = "0";
	var dest_path   = "http://dt.tongji.linezing.com/tongji.do?unit_id="+unit_id; 
	var expire_time = 1800; 
	var i;

	var host=document.location.host;
	var domain = lz_get_domain(host.toLocaleLowerCase());
	var hashval = 0;
	for (i=0; i< domain.length; i++){
		hashval += domain.charCodeAt(i);
	}

	var uv_str = lz_get_cookie("lzstat_uv");
	var uv_id = "";
	var uv_new = 0;
	if (uv_str == ""){
		uv_new = 1;

		var rand1 = parseInt( Math.random() * 4000000000 );
		var rand2 = parseInt( Math.random() * 4000000000 );
		uv_id = String(rand1) + String(rand2);

		var value = uv_id+"|"+unit_id;
		
		lz_set_cookie("lzstat_uv", value, 1);
	}
	else{
		var arr = uv_str.split("|");
		uv_id  = arr[0];
		var uids_str = arr[1];
		var uids = uids_str.split("@");
		var uid_num = uids.length;

		var bingo = 0;
		for(var pos=0,max=uids.length;pos<max;pos++) {
			var uid = uids[pos];
			if (uid == unit_id){
				bingo = 1;
				break;
			}
		}

		if (bingo == 0){
			uv_new = 1;

			if (uid_num >= 100){
				var value = uv_id+"|"+unit_id;
			}
			else{
				var value = uv_str+"@"+unit_id;
			}	
			
			lz_set_cookie("lzstat_uv", value, 1);
		}
	}

	var ss_str = lz_get_cookie("lzstat_ss"); 
	var ss_id = ""; 
	var ss_no = 0;
	if (ss_str == ""){
		ss_no = 0;
		var rand = parseInt(Math.random() * 4000000000);
		ss_id = String(rand);
		value = ss_id+"_"+"0_"+lz_get_stm()+"_"+unit_id;
		lz_set_cookie("lzstat_ss", value, 0); 
	} 
	else { 
		var arr = ss_str.split("|");
		var ss_num = arr.length;

		var bingo = 0;
		for(var pos=0,max=arr.length;pos<max;pos++) {
			var ss_info = arr[pos];
			var items = ss_info.split("_");

			var cookie_ss_id  = items[0];
			var cookie_ss_no  = parseInt(items[1]);
			var cookie_ss_stm = items[2];
			var cookie_ss_uid = items[3];

			if (cookie_ss_uid == unit_id){
				bingo = 1;

				if (lz_get_stm() - cookie_ss_stm > expire_time) { 
					ss_no = 0;
					var rand = parseInt(Math.random() * 4000000000);
					ss_id = String(rand);
				} 
				else{
					ss_no = cookie_ss_no + 1;
					ss_id = cookie_ss_id;
				}

				value = ss_id+"_"+ss_no+"_"+lz_get_stm()+"_"+unit_id;

				arr[pos] = value;
				ss_str = arr.join("|");
				lz_set_cookie("lzstat_ss", ss_str, 0); 

				break;
			}
		}

		if (bingo == 0)
		{
			ss_no = 0;
			var rand = parseInt(Math.random() * 4000000000);
			ss_id = String(rand);
			value = ss_id+"_"+"0_"+lz_get_stm()+"_"+unit_id;

			if (ss_num >= 20){
				pos = parseInt(Math.random() * ss_num);
			}
			else{
				pos = ss_num;
			}

			arr[pos] = value;
			ss_str = arr.join("|");
			lz_set_cookie("lzstat_ss", ss_str, 0); 
		}
	}

	var ref = document.referrer; 
	ref = lz_encode(String(ref)); 

	var url = document.URL; 
	url = lz_encode(String(url)); 

	var title = document.title;
	title = escape(String(title)); 

	var charset = document.charset;
	charset = lz_encode(String(charset)); 

	var screen = lz_get_screen(); 
	screen = lz_encode(String(screen)); 

	var color =lz_get_color(); 
	color =lz_encode(String(color)); 

	var language = lz_get_language(); 
	language = lz_encode(String(language));
 
	var agent =lz_get_agent(); 
	agent =lz_encode(String(agent));

	var jvm_enabled =lz_get_jvm_enabled(); 
	jvm_enabled =lz_encode(String(jvm_enabled)); 

	var cookie_enabled =lz_get_cookie_enabled(); 
	cookie_enabled =lz_encode(String(cookie_enabled)); 

	var flash_ver = lz_get_flash_ver();
	flash_ver = lz_encode(String(flash_ver)); 

	var app = lz_get_app(); 
	app = lz_encode(String(app)); 

	var filtered = 0;
	var domain_filters = new Array();
	var ip_filters = new Array();

		domain_filters[0] = "gro#tra763";
		domain_filters[1] = "moc#olzd";
		domain_filters[2] = "moc#tra763";
		domain_filters[3] = "moc#df571";
		domain_filters[4] = "ten#oog1";
		domain_filters[5] = "nc#ppk1";
		domain_filters[6] = "nc#osnaknak";
		domain_filters[7] = "nc#emocwww";
		domain_filters[8] = "nc#psalla";
		domain_filters[9] = "moc#oesii";
		domain_filters[10] = "moc#kh0083";
		domain_filters[11] = "nc#kpwww";
		domain_filters[12] = "nc#moc#zw001";
		domain_filters[13] = "nc#kpemoc";
		domain_filters[14] = "moc#eyiq063";
		domain_filters[15] = "moc#qqa4";
		domain_filters[16] = "ten#aboakoak";
		domain_filters[17] = "moc#ecilliw";
		domain_filters[18] = "nc#moc#ibeea";
		domain_filters[19] = "moc#ibeea";
		domain_filters[20] = "nc#tra763";
		domain_filters[21] = "moc#025sns";
		domain_filters[22] = "moc#og321oah";
		domain_filters[23] = "moc#9zznc";
		domain_filters[24] = "nc#9zznc";
		domain_filters[25] = "moc#d135";
		domain_filters[26] = "moc#ridzoog";
		domain_filters[27] = "ten#rqrq";
		domain_filters[28] = "moc#195nak";
		domain_filters[29] = "moc#uynijtn";
		domain_filters[30] = "moc#falwen";
		domain_filters[31] = "nc#moc#njyhxj";
	var escape_domain = str_reverse(domain);
	for (i in domain_filters){
		if(domain_filters[i] == escape_domain)
			filtered = 1;	
	}
	for (i in ip_filters){
		if(ip_filters[i] == client_ip){
			filtered = 1;
			break;
		}}
	var url_id = 0;
	var cur_url = location.href;
	dest=dest_path+"&uv_id="+uv_id+"&uv_new="+uv_new+"&cna="+""+"&cg="+""+"&mid="+""+"&mmland="+""+"&ade="+""+"&adtm="+""+"&sttm="+""+"&cpa="+""+"&ss_id="+ss_id+"&ss_no="+ss_no+"&ec="+cookie_enabled+"&ref="+ref+"&url="+url+"&title="+title+"&charset="+charset+"&domain="+domain+"&hashval="+hashval+"&filtered="+filtered+"&app="+app+"&agent="+agent+"&color="+color+"&screen="+screen+"&lg="+language+"&je="+jvm_enabled+"&fv="+flash_ver+"&st="+server_time+""+"&vc="+verify_code+""+"&ut=0"+"&url_id="+url_id+"&cnu="+String(Math.random());
document.write("<img src=\""+dest+"\" border=\"0\" width=\"1\" height=\"1\" />");
	var icon_link_host="tongji.linezing.com";
        if(cur_url.indexOf('#lzclickmap=')>-1) {
                var token = cur_url.substr(cur_url.indexOf('#lzclickmap='), 44);
                token = token.replace(/([\/'])/g, '\\$1');
                document.write('<scr'+'ipt src=\'http://tongji.linezing.com/clickmap/load_clickmap.html?r='+Math.random()+token+'\'></scr'+'ipt>');
                return false;}
        if(url_id>0)
                document.write('<scr'+'ipt src=\'http://js.tongji.linezing.com/2780015/'+url_id+'/clickcollect.js\'></scr'+'ipt>');}
lz_main();
var _tac = _tac||{}; _tac['_taud'] = 7485431; _tac['_taLogo'] = 11;
(function(){var _d,_l,_b,_n="-",_params,_curDomain,_curUrl,_domainToSet,_refDomain,_refUrl,_image;var _v=0;var _c={};function tcss(){this.url=[];this.init()}tcss.prototype={init:function(){_c?_params=_c:_params={};_d=document;_l=_d.location;_b=_d.body},run:function(){if(_cookie.get("pgv_pvi=",true)==_n){_v=1}_cookie.init();this.url.push(this.getDomainInfo());this.url.unshift("http://pingtcss.qq.com/pingd?");this.url.push(this.getRefInfo(_params));try{if(navigator.cookieEnabled){this.url.push("&pvi="+_cookie.setCookie("pgv_pvi",true))}else{this.url.push("&pvi=NoCookie")}}catch(e){this.url.push("&pvi=NoCookie")}this.url.push("&si="+_cookie.setCookie("ssi"));this.url.push(this.getMainEnvInfo());this.url.push(this.getExtendEnvInfo());_cookie.save();typeof(_tac._taud)=="undefined"?this.url.push("&r2=-1"):this.url.push("&r2="+_tac._taud);typeof(_tac._taLogo)=="undefined"?"":this.ctrlLogo(_tac._taLogo);typeof(_speedMark)=="undefined"?this.url.push("&r3=-1"):this.url.push("&r3="+(new Date()-_speedMark));this.url.push("&r4=1");this.url.push("&ty="+_v);this.sendInfo(this.url.join(""))},ctrlLogo:function(c_params){var src="",style="",swi=c_params?c_params:1;switch(swi){case 255:break;case 9:src="��Ѷ����";style="word";break;case 10:src="��վͳ��";style="word";break;style="pic";break}this.creatLogo(style,src)},creatLogo:function(style,src){if(""!=style&&""!=src){var child,sonChild;child='<a href="http://stats.discuz.qq.com?ADTAG=FROUM.FOOTER.CLICK.ICON " title="��Ѷ����" target="target">';switch(style){case"word":child+=src;break;case"pic":child+='<img src="'+src+'" border="0" />';break;default:break}child+="</a>";_d.write(child)}},getDomainInfo:function(){var dm,url;_curDomain=dm=_l.host;dm=_curDomain.toLowerCase();if(!_domainToSet){_domainToSet=this.getCookieSetDomain()}url=this.getCurrentUrl();return("dm="+dm+"&url="+url)},getCurrentUrl:function(){var url="";var arg=_n;url=_curUrl=escape(_l.pathname);if(_l.search!=""){arg=escape(_l.search.substr(1))}return url+"&arg="+arg},getRefInfo:function(params){var refdm=_n,refurl=_n,refarg=_n,refStr=_d.referrer,tagParamName,adtag,pos;var ADTAG=_n;tagParamName=params.tagParamName||"ADTAG";adtag=this.getParameter(tagParamName,_d.URL);if(adtag){ADTAG=adtag}pos=refStr.indexOf("://");if(pos>-1){var re=/(\w+):\/\/([^\:|\/]+)(\:\d*)?(.*\/)([^#|\?|\n]+)?(#.*)?(\?.*)?/i;var arr=refStr.match(re);if(arr){refdm=arr[2];refurl=arr[4]+arr[5]}}if(refStr.indexOf("?")!=-1){var pos=refStr.indexOf("?")+1;refarg=refStr.substr(pos)}if(typeof(_refDomain)!="undefined"&&""!=_refDomain){refdm=_refDomain}if(typeof(_refUrl)!="undefined"&&""!=_refUrl){refurl=_refUrl}_refDomain=refdm;_refUrl=escape(refurl);return("&rdm="+_refDomain+"&rurl="+_refUrl+"&adt="+ADTAG+"&rarg="+escape(refarg))},getMainEnvInfo:function(){var ret="";try{var scr=_n,scl=_n,lang=_n,cpuc=_n,pf=_n,tz=_n,java=0,n=navigator;if(self.screen){scr=screen.width+"x"+screen.height;scl=screen.colorDepth+"-bit"}if(n.language){lang=n.language.toLowerCase()}else{if(n.browserLanguage){lang=n.browserLanguage.toLowerCase()}}java=n.javaEnabled()?1:0;pf=n.platform;tz=new Date().getTimezoneOffset()/60;ret="&scr="+scr+"&scl="+scl+"&lg="+lang+"&jv="+java+"&pf="+pf+"&tz="+tz}catch(e){}finally{return ret}},getExtendEnvInfo:function(){var ret="";try{var flash,currentUrl=_l.href,connectType=_n;ret+="&fl="+this.getFlashInfo();if(_b.addBehavior){_b.addBehavior("#default#homePage");if(_b.isHomePage(currentUrl)){ret+="&hp=Y"}}if(_b.addBehavior){_b.addBehavior("#default#clientCaps");connectType=_b.connectionType}ret+="&ct="+connectType}catch(e){}finally{return ret}},getFlashInfo:function(){var f=_n,n=navigator;try{if(n.plugins&&n.plugins.length){for(var i=0;i<n.plugins.length;i++){if(n.plugins[i].name.indexOf("Shockwave Flash")>-1){f=n.plugins[i].description.split("Shockwave Flash ")[1];break}}}else{if(window.ActiveXObject){for(var i=12;i>=5;i--){try{var fl=eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash."+i+"');");if(fl){f=i+".0";break}}catch(e){}}}}}catch(e){}return f},getParameter:function(name,src){if(name&&src){var r=new RegExp("(\\?|#|&)"+name+"=([^&^#]*)(#|&|$)");var m=src.match(r);return m?m[2]:""}return""},getCookieSetDomain:function(){var dotlen,pos,domainToSet,dot=[],j=0;for(var i=0;i<_curDomain.length;i++){if(_curDomain.charAt(i)=="."){dot[j]=i;j++}}dotlen=dot.length;if(dotlen==1){domainToSet=_curDomain}else{pos=_curDomain.indexOf(".cn")!=-1?1:0;domainToSet=_curDomain.substring(dot[dotlen-2-pos]+1)}return domainToSet},sendInfo:function(url){_image=new Image(1,1);_image.src=url}};var _cookie={sck:[],sco:{},init:function(){var value=this.get("pgv_info=",true);if(value!=_n){var arr=value.split("&");for(var i=0;i<arr.length;i++){var arr2=arr[i].split("=");this.set(arr2[0],unescape(arr2[1]))}}},get:function(name,isend){var cookies=isend?_d.cookie:this.get("pgv_info=",true);var value=_n;var offset,end;offset=cookies.indexOf(name);if(offset>-1){offset+=name.length;end=cookies.indexOf(";",offset);if(end==-1){end=cookies.length}if(!isend){var end2=cookies.indexOf("&",offset);if(end2>-1){end=Math.min(end,end2)}}value=unescape(cookies.substring(offset,end))}return value},set:function(key,value){this.sco[key]=value;var isExist=false;var sckLen=this.sck.length;for(var i=0;i<sckLen;i++){if(key==this.sck[i]){isExist=true;break}}if(!isExist){this.sck.push(key)}},setCookie:function(name,isend){var id=_cookie.get(name+"=",isend);if(id==_n){isend?id="":id="s";var curDate=new Date();var curMs=curDate.getUTCMilliseconds();id+=(Math.round(Math.abs(Math.random()-1)*2147483647)*curMs)%10000000000}if(isend){this.saveCookie(name+"="+id,"expires=Sun, 18 Jan 2038 00:00:00 GMT;")}else{this.set(name,id)}return id},save:function(){if(_params.sessionSpan){var expires=new Date();expires.setTime(expires.getTime()+(_params.sessionSpan*60*1000))}var cookies="";var sckLen=this.sck.length;for(var i=0;i<sckLen;i++){cookies+=this.sck[i]+"="+this.sco[this.sck[i]]+"&"}cookies="pgv_info="+cookies.substr(0,cookies.length-1);var expire="";if(expires){expire="expires="+expires.toGMTString()}this.saveCookie(cookies,expire)},saveCookie:function(cookie,expires){_d.cookie=cookie+";path=/;domain="+_domainToSet+";"+expires}};new tcss().run();window.pgvMain=function(){try{new tcss().run()}catch(e){}}})();
