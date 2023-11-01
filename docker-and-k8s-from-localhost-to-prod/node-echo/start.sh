#!/bin/bash

docker build -f Dockerfile . -t node-echo
docker run -it -p 5001:5001 node-echo

