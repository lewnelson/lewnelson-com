#!/bin/bash

if [ "$TRAVIS_BRANCH" == "master" ]; then
  printf "Pushing to Docker %s:%s\n" "$REPO" "$COMMIT"
  TAG="latest"
  printf "Logging into docker\n"
  docker login -u $DOCKER_USER -p $DOCKER_PASS
  printf "Building docker image from Dockerfile\n"
  docker build -f Dockerfile -t $REPO:$COMMIT .
  printf "Tagging the image\n"
  docker tag $REPO:$COMMIT $REPO:$TAG
  docker tag $REPO:$COMMIT $REPO:travis-$TRAVIS_BUILD_NUMBER
  printf "Pushing to dockerhub"
  docker push $REPO
  printf "Pushed to dockerhub"
else
  printf "Not pushing to Docker on branch %s" "$TRAVIS_BRANCH"
fi
