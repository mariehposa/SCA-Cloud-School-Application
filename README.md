# She Code Africa Cloud School - Technical Assesment

My solution to She Code Africa Cloud School - Technical Assesment(Exercise 1).
* link to your docker hub repository - https://hub.docker.com/r/mariehposa/sca_cloud_school_application
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purpose.

### Instructions

* I created a `docker` folder.

* Inside the `docker` folder, I created a `package.json` file and added the following code.
```
{
    "name": "sca_app",
    "version": "1.0.0",
    "description": "create a dockerfile on Nodejs project",
    "author": "Mariam Adedeji",
    "main": "server.js",
    "scripts": {
      "start": "node server.js"
    },
    "dependencies": {
      "express": "^4.16.1"
    }
  }
```

* I created a node.js app in the `server.js` file using express. This contains the following code.

```
'use strict';
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to SCA Cloud School Application , this is my first assessment');
});

app.listen(3000, () => console.log('Server ready'))
```

* After that, I run `npm install` to install the packages listed in the `package.json` file..

* Then I created a `Dockerfile` with the following content.

```
FROM node:8
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]
```

* I downloaded and installed Docker Desktop Installer and wsl_update.

* I run the following code on shell to build the image.

```
docker build -t sca_cloud_school_application .
```

* After that, I run the following to run a container from the image.

```
docker run -d -p 3000:3000 --name sca-app sca_cloud_school_application
```

The image is running in the Docker Desktop
![image](https://user-images.githubusercontent.com/33374159/104650574-ad82d000-56b6-11eb-9f5b-927774742c00.png)

The app is running on port 3000
![image](https://user-images.githubusercontent.com/33374159/104652317-37cc3380-56b9-11eb-99e3-f2e9cb18186d.png)

* I used the `docker tag` to give the `sca_cloud_school_application` image a new name.

```
docker tag sca_cloud_school_application mariehposa/sca_cloud_school_application
```

* I used the `docker hub` to push it to Docker Hub.

```
docker push mariehposa/sca_cloud_school_application
```

## Tutorials

* https://flaviocopes.com/docker-dockerfiles/
* https://flaviocopes.com/docker-node-container-example/
* https://flaviocopes.com/docker-hub/

## Acknowledgments

* She Code Africa