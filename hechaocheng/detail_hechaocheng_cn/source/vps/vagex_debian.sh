#!/bin/bash
#功能：
#	基于debian的vagex挂机一键包
#版本历史：
#	2012/4/4 v0.1 发布
#	2012/4/21 v0.2 修正细节
#	2012/6/21 v0.3 更改FF版本为3.6.26以及插件版本1.4.1
#	2012/8/5 v0.4 修改细节
#	2012/8/14 v0.5 优化细节
#	2012/8/29 v0.6 修复一处BUG
#作者：
#	主机控
#备注：
#	尽量在screen下运行以防中途断线

PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
export PATH

ff_addr="ftp://ftp.mozilla.org/pub/firefox/releases/3.6.26/source/firefox-3.6.26.source.tar.bz2"
vncreboot_addr="http://vagex-debian.googlecode.com/svn/trunk/vncreboot"
vncserverd_addr="http://vagex-debian.googlecode.com/svn/trunk/vncserverd"
xstartup_addr="http://vagex-debian.googlecode.com/svn/trunk/xstartup"
flash_addr="http://vagex-debian.googlecode.com/files/libflashplayer.so"
vagex_addr="http://vagex-debian.googlecode.com/files/vagex_firefox_add_on-1.1.8-fx.xpi"
yvqm_addr="http://vagex-debian.googlecode.com/files/youtube_video_quality_manager-1.2-fx.xpi"

func_check() {
	if [ $? != 0 ]; then
		echo "-----------"
		echo "ERROR! -> $1"
		echo "-----------"
		exit 1
	else
		echo "-----------"
		echo "DONE! -> $1"
		echo "-----------"
	fi	
}

func_vncpwd() {
	echo "-----------"
	echo "Plese input the VNC password below!"
	echo "-----------"
}

func_alldone() {
	echo "-----------"
	echo "Now you can VNC to complete the rest of the installation manually!"
	echo "-----------"
}

func_in_flash() {
	wget $flash_addr &&
	mkdir -p /usr/local/lib/firefox-3.6.26/plugins &&
	mv libflashplayer.so /usr/local/lib/firefox-3.6.26/plugins
	func_check flash-installation	
}

func_in_ff() {
	aptitude -y install mercurial libasound2-dev libcurl4-openssl-dev libnotify-dev libxt-dev libiw-dev mesa-common-dev autoconf2.13 yasm bzip2 zip libidl-dev &&
	wget $ff_addr -O - | tar xjf - && cd mozilla-1.9.2 &&
	./configure --enable-application=browser && make && make install
	func_check firefox-installation	
}

func_in_vnc() {
	aptitude -y install vnc4server &&
	func_vncpwd
	vncserver && vncserver -kill :1 &&
	wget $xstartup_addr &&
	mv ~/.vnc/xstartup ~/.vnc/xstartupbak &&
	mv xstartup ~/.vnc/ && chmod a+x ~/.vnc/xstartup &&
	wget $vncserverd_addr &&
	mv vncserverd /etc/init.d && chmod a+x /etc/init.d/vncserverd &&
	if [ -f /etc/rc.local ]; then
		sed -i '/exit\ 0/d' /etc/rc.local
		cat <<- EOF >> /etc/rc.local
			/etc/init.d/vncserverd start
			exit 0
		EOF
	else
		update-rc.d vncserverd defaults
	fi
	wget $vncreboot_addr &&
	mv vncreboot /etc/cron.daily && chmod a+x /etc/cron.daily/vncreboot
	func_check vnc-installation	
}

apt-get update &&

apt-get -y --force-yes install aptitude wget &&

mkdir -p /tmp/vagex_debian_cache && cd /tmp/vagex_debian_cache &&
func_in_vnc

func_in_ff

func_in_flash

cd /tmp &&
wget $vagex_addr &&
wget $yvqm_addr &&

rm -rf /tmp/vagex_debian_cache &&

/etc/init.d/vncserverd start &&

func_alldone
