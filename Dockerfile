FROM ubuntu:latest

RUN apt-get update -y
RUN apt-get install curl -y 

RUN mkdir -p /home/graph/data

WORKDIR /home/graph

ADD  .  /home/graph

RUN apt-get install nodejs -y
RUN apt-get install npm -y

RUN npm install --save graphql express express-graphql -y

RUN npm install --save babel-cli babel-core babel-loader babel-preset-es2015

RUN ln -s /usr/bin/nodejs /usr/bin/node

RUN npm install axios 

EXPOSE 3000 
