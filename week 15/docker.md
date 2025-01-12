# 🚀 Learning Docker / Container

---

## 🛠 Install Docker

- Install Docker on your system by following the official guidelines for your operating system:
  - **Windows**: Install Docker Desktop.
  - **macOS**: Install Docker Desktop.
  - **Linux**: Use your package manager (e.g., `apt`, `yum`).

---

# 🐳 Inside Docker

## Docker Engine

- **What is it?**  
  Docker Engine allows developers to package applications into containers.
- **How does it work?**
  - A container includes:
    - Source code
    - OS libraries
    - Dependencies
  - It enables running code consistently in any environment.

---

## Docker Registry

- **What is it?**  
  A place where you can find and store multiple Docker images.
- **Examples:**
  - [Docker Hub](https://hub.docker.com/)
  - Private registries

---

## 🖼️ Images vs. Containers

### 🖼️ Images

- **Definition:**  
  A Docker image is a lightweight, standalone, executable package that includes everything needed to run a piece of software:
  - Code
  - Runtime
  - Libraries
  - Environment settings
- **Analogy:**  
  Think of an image as your codebase stored on GitHub—ready to execute but not yet running.

### 📦 Containers

- **Definition:**  
  A container is a **running instance** of an image.
- **Purpose:**  
  It encapsulates:
  - The application or service
  - All its dependencies
  - Runs in an isolated environment
- **Analogy:**  
  Running a container is like executing `node index.js`—it's your code in action.

---

## 🔌 PORT Mapping

- Use the `-p` flag for port mapping when running a container:
  ```bash
  docker run -p <host_port>:<container_port> <image_name>
  ```
- this can help to make a communtication between the host port and the container port which can talk to external entity

## 🧑‍💻 Common Docker commands

1. docker images
   - show all present images
2. docker ps
   - show all running containers
3. docker run
   - run the image
4. docker build
   - j
5. docker ps -a
   - show all past or stopped container
6. docker start
   - used to start the stopped container
7. docker stop
   - stop the running container
8. docker kill
   - delete the docker container
9. docker image rm
   - to delete the image
10. docker run -d

    - run the container in background in detach mode. terminals become free.

11. docker rmi --image name

    - to delete image

12. docker build -t

    - to build theimage from the docker file -t give name

13. docker exec -it --docker id-- /bin/bash
    - get the access to the ssh in the container to interaction in container

---

## 🗎 Docker file

- If you want to create an image from your own code, that you can push to _dockerhub_ you need to create a *docker*file for your application.

- It contains a all commands to create an image

  ### how to write that

  - Base Image
  - working Directory
  - copy over files
  - Run commands
  - Expose Ports
  - final command to run container

### Passing in env variables

- `-e` argument used to send the enviroment variables to your node.js app

```
docker run -p 3000:3000 -e DATABASE_URL="postgres://localhost:"
```

---

## ♺ Cached in Docker (layers)

- optimising the Dockerfile

```bash
FROM node:20

WORKDIR /app

COPY package* .
COPY ./prisma .

RUN npm install
RUN npx prisma generate

COPY  . .
RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]
```

this says the layer of npm install will run only when the package.json will change until that layer will be cached . this will save the time and make a fast build

---

## 🖧 Networks and Volumes

**Volumes** : Need to persist data across docker restarts

- even the container crashesh the data still persists in volume.

- create a volume

```bash
docker volume create Volume_database
```

- show all volumes

```
docker volume ls
```

- Mount the volume to mongo which store data in the volume which persists

```
docker run -v volume_database:/data/db -p 27017:27017 mongo

// /data/db which can be the data store by mongo in that dir
```

**Network** : Need to allow containers to talk to each other and the outside world

- localhost in docker means its own localhost network

- how to make containers talk to each other

- create a network

```
docker network create vs_newtork
```

- see all network present

```
docker network ls
```

- start the containers on the same network

```
docker run -d -v volume_name:/data/db --name mongo --network net_name
```

- MongoDB Url is pass is

```
mongodb://mongo_container_name:27017/myDatabase
```

---

# Docker Compose

- it is a yml file . it looks like the json file which contains the key value pair

- docker compose is used to run multi-container docker application

- by using that file we can configure application's services, networks, and volumes using single command.

- it is combination of the multiple commands

- how to run compose file

```
docker-compose up
```
