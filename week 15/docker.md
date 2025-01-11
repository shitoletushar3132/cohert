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
