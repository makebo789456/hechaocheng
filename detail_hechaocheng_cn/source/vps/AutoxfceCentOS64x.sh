#!/bin/bash
yum -y install vnc-server

vncserver
pkill -9 vnc
rm -rf /tmp/.X1*

yum -y groupinstall xfce-4.4

yum -y install curl firefox

wget http://fpdownload.macromedia.com/get/flashplayer/pdc/11.2.202.236/install_flash_player_11_linux.x86_64.tar.gz

tar zxvf install_flash_player_11_linux.x86_64.tar.gz
mkdir -p ~/.mozilla/plugins/
cp libflashplayer.so ~/.mozilla/plugins/

echo 'VNCSERVERS="1:root"' >> /etc/sysconfig/vncservers
echo 'VNCSERVERARGS[1]="-geometry 1024x768"' >> /etc/sysconfig/vncservers
/etc/init.d/vncserver restart
cat >/root/.vnc/xstartup <<EOF
#!/bin/sh
/usr/bin/startxfce4
EOF

/etc/init.d/vncserver restart

chmod +x ~/.vnc/xstartup
chkconfig vncserver on

wget https://addons.mozilla.org/firefox/downloads/file/151606/vagex_firefox_add_on-1.4.1-fx+fn+sm+an.xpi