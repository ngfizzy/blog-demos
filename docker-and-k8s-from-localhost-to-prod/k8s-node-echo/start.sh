#!/bin/bash

# make sure you have docker and kubernetes installed on your machine
docker build -f Dockerfile . -t node-echo
kubectl apply -f node-echo-deployment.yaml
kubectl apply -f node-echo-service.yaml

