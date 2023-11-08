# Description
A containerized echo server written in nodejs.

## Related Blog Post
https://dev.to/ngfizzy/containers-the-what-why-and-how-391n
## Requirements
1. Docker desktop
2. Single node kubernetes either by enabling it through docker desktop or installing minikube
## How to start the server
Assuming you're in the same directory as this Readme filee
1. ```bash
    docker build -f Dockerfile . -f  node-echo
   ```
2. ```bash
    kubectl apply -f node-echo-deployment.yaml && kubectl apply -f node-echo-service.yaml
    ```
 
Or you could run ./start.sh script

## How to test

```bash
    curl -d "hello kubernetes" localhost:5001
```
    
