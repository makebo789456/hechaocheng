/**
 * @author Mr.Think
 * @author blog http://mrthink.net/
 * @2011.02.15
 * ������ת�ؼ�ʹ��,����ע����Ȩ����
 */
window.onload=function(){
	function nowTime(ev,type){
		/*
		 * ev:��ʾʱ���Ԫ��
		 * type:ʱ����ʾģʽ.������12��Ϊ12Сʱ��,��������Ϊ24Сʱ��
		 */
		//������ʱ����
		var Y,M,D,W,H,I,S;
		//����ʱ����Ϊ��λʱǰ�油��
		function fillZero(v){
			if(v<10){v='0'+v;}
			return v;
		}
		(function(){
			var d=new Date();
			var Week=['������','����һ','���ڶ�','������','������','������','������'];
			Y=d.getFullYear();
			M=fillZero(d.getMonth()+1);
			D=fillZero(d.getDate());
			W=Week[d.getDay()];
			H=fillZero(d.getHours());
			I=fillZero(d.getMinutes());
			S=fillZero(d.getSeconds());
			//12Сʱ����ʾģʽ
			if(type && type==12){
				//��Ҫ��ʾ����ʱ���������������賿������������ж�
				if(H<=12){
					H='����&nbsp;'+H;
				}else if(H>12 && H<24){
					H-=12;
					H='����&nbsp;'+fillZero(H);
				}else if(H==24){
					H='����&nbsp;00';
				}
			}
			ev.innerHTML=Y+'��'+M+'��'+D+'�� '+' '+W+'&nbsp;'+H+':'+I+':'+S;
			//ÿ�����ʱ��
			setTimeout(arguments.callee,1000);
		})();
	}
	
	//24Сʱ�Ƶ���
	nowTime(document.getElementById('time24'));
	//12Сʱ�Ƶ���
	nowTime(document.getElementById('time12'),12);

}