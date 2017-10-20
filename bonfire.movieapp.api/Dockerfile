FROM ficusio/node-alpine:latest

RUN npm install pm2 -g

ADD . /home/bonfire/movieapp/api

ADD start.sh /start.sh

RUN chmod 755 /start.sh

EXPOSE 3000

CMD ["/start.sh"]