#!/bin/bash

if [ "$TRAVIS_BRANCH" == "master" ]; then
  printf "Pushing to Docker %s:%s" "$REPO" "$COMMIT"
  TAG="latest"
  docker login -u $DOCKER_USER -p $DOCKER_PASS
  docker build -f Dockerfile -t $REPO:$COMMIT .
  docker tag $REPO:$COMMIT $REPO:$TAG
  docker tag $REPO:$COMMIT $REPO:travis-$TRAVIS_BUILD_NUMBER
  docker push $REPO
else
  printf "Not pushing to Docker on branch %s" "$TRAVIS_BRANCH"
fi
