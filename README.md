# GraphQL-queries


<i>Small example of GraphQL server on docker container.</i>


**1. Prepare environment**

a) Create docker image:

```
root@host:/home/test# docker build -t graphql .
```
b) Check if the creation was a success:
```
root@host:/home/test# docker images | grep graphql | awk {'print $3'}
6ae822cf7560
```
c) Start container:

```
root@host:/home/test# docker run -ti `docker images | grep graphql | awk {'print $3'}` /bin/bash
bc34b034dd5d
root@6ae822cf7560:/home/graph# 
root@6ae822cf7560:/home/graph# ls
Dockerfile  data  node_modules  package.json  server.js
root@6ae822cf7560:/home/graph# 
```

d) Make sure file schema.js is under /home/graph/data folder

e) Extract container's IP

```
root@6ae822cf7560:/home/graph# ip a s  eth0 | grep -Po 'inet \K[\d.]+'
172.17.0.4
```

**2)Access GraphQL**

a) Start GraphQL server:

   From working directory, run command ``npm start``

![ScreenShot](https://raw.githubusercontent.com/Alexandru317Mitrica/GraphQL-queries/master/pics/gr_2.png)

b) Open a browser, and as an URL, add the IP of the docker, and port 3000:

![ScreenShot](https://raw.githubusercontent.com/Alexandru317Mitrica/GraphQL-queries/master/pics/gr_3.png)


**3) Authenticate to obtain access to github api repos for angular**

```
curl -u "Alexandru317Mitrica" https://api.github.com
Enter host password for user 'Alexandru317Mitrica':
{
  "current_user_url": "https://api.github.com/user",
  "current_user_authorizations_html_url": "https://github.com/settings/connections/applications{/client_id}",
..............................
```

You should now be able to access the following link: https://api.github.com/orgs/angular/repos 

**4) Test the queries**

![ScreenShot](https://raw.githubusercontent.com/Alexandru317Mitrica/GraphQL-queries/master/pics/gr_4.png)




<i>More details:

- GraphQL server is created using express
- GraphQL queries are handled with Javascript</i>

