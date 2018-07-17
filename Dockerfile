FROM node:10

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install system dependencies
RUN apt-get update && apt-get -y install ruby ruby-dev
RUN echo "y" | gem install sass

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Build app for production environment
RUN npm run build

EXPOSE 4000

# Run app binding to port 4000
CMD ["npm", "run", "start"]
