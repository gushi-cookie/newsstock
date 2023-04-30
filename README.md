# Newsstock is a vue-3 news app
The project utilizes [GDELT API 2.0](https://blog.gdeltproject.org/gdelt-doc-2-0-api-debuts/) for getting latest news headlines. Written in TypeScript with Vue-Router.

# Prerequisites
`Docker` should be installed on your device, and you have access to `root` user, for running docker.

# Installation
```
# get the repo
git clone https://github.com/gushi-cookie/newsstock.git

# come to the project directory
cd newsstock

# build a docker image
sudo ./build.sh

# run an empty node container that binds to the current working directory
sudo ./start.sh -e

# install project packages in the running container and then exit it
npm install
exit

# run dev server
sudo ./start.sh
```
Result can be seen on `localhost:8080`.

# Preview
![alt text](https://i.imgur.com/OmiXeYm.png)

# Reference
![alt text](https://i.imgur.com/R4aTioV.png)