FROM hub.paas.kjtyun.com/library/centos6.8:nginx-php
RUN mkdir -p /data/www/devel/plm && mkdir /data/apps/scg-plm/upload -p
ADD . /data/www/devel/plm
ENTRYPOINT ["supervisord","-c","/etc/supervisord.conf"]