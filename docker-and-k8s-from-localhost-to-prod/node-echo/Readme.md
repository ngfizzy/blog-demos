# Description
A containerized echo server written in nodejs.

## Related Blog Post
https://dev.to/ngfizzy/containers-the-what-why-and-how-391n
## Requirements
1. Docker desktop
## How to start the server
Assuming you're in the same directory as this Readme filee
1. ```bash
    docker build -f Dockerfile .  node-echo
   ```
2. ```bash
    docker run -i -t -p 5001:5001 node-echo
    ```

Or you could run ./start.sh script

## How to test

```bash
    curl -d "hello" localhost:5001
```
    
