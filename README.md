# She Code Africa Cloud School - Technical Assesment

My solution to She Code Africa Cloud School - Technical Assesment(Exercise 1).
* link to my docker hub repository - https://hub.docker.com/r/mariehposa/sca_cloud_school_application
## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Instructions

* Checkout to `stable` branch.

* Inside the `docker` folder, Create a `package.json` file and add the following code.
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

* Create a node.js app in the `server.js` file using express. This file should contain the following code.

```
'use strict';
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to SCA Cloud School Application');
});

app.listen(3000, () => console.log('Server ready'))
```

* Run `npm install` to install the packages listed in the `package.json` file.

* Create a `Dockerfile` with the following content.

```
FROM node:8
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]
```

* Download and installed Docker Desktop Installer and wsl_update.

* Run the following code on shell to build the image.

```
docker build -t image .
```
For example:
```
docker build -t sca_cloud_school_application .
```

* Run the following to run a container from the image.

```
docker run -d -p 3000:3000 --name username image
```

For example:
```
docker run -d -p 3000:3000 --name sca-app sca_cloud_school_application
```

* Make your changes and checkout to `feature` branch.

* Update the `line 6` of `server.js` with the following:

```
res.send('Welcome to SCA Cloud School Application , this is my first assessment');
```

* Run the following code on shell to build the image.

```
docker build -t image .
```

* Run the following to run a container from the image.

```
docker run -d -p 3000:3000 --name username image
```

The image is running in the Docker Desktop
![image](https://user-images.githubusercontent.com/33374159/104650574-ad82d000-56b6-11eb-9f5b-927774742c00.png)

The app is running on port 3000
![b](https://user-images.githubusercontent.com/33374159/104657842-00ae5000-56c2-11eb-80c8-e4da09cfabc1.png)

* Use the `docker tag` to give the image a new name.

```
docker tag image username/tag-name
```

For example
```
docker tag sca_cloud_school_application mariehposa/sca_cloud_school_application
```

* Use the `docker hub` to push it to Docker Hub.

```
docker push YOUR-USER-NAME/tag-name
```

For example
```
docker push mariehposa/sca_cloud_school_application
```

## Tutorials

* https://flaviocopes.com/docker-dockerfiles/
* https://flaviocopes.com/docker-node-container-example/
* https://flaviocopes.com/docker-hub/

## Acknowledgments

* She Code Africa