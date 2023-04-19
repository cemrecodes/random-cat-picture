# base image
FROM node:14.17.6-alpine

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install --silent

# copy all files
COPY . /app

# start app
CMD ["npm", "start"]
