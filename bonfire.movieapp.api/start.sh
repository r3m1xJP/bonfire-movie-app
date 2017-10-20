#!/bin/ash
cd /home/bonfire/movieapp/api
npm install
pm2 start --no-daemon server/server.js