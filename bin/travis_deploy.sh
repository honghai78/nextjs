#!/bin/bash -l

if [ "$TRAVIS_BRANCH" == "staging-firebase" ]; then
  travis_wait 20 yarn deploy-staging
elif [ "$TRAVIS_BRANCH" == "production-firebase" ]; then
  travis_wait 20 yarn deploy-production
else
  echo "Branch is $TRAVIS_BRANCH. Not deploying..."
fi