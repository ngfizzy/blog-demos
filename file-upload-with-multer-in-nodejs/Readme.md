# Code Demo For "Beginner Topic: File UPload With Multer In Nodejs"

Article: https://dev.to/ngfizzy/beginner-topic-file-upload-with-multer-in-nodejs-99m

## How To Run

* In the root of this project, same level as this Readme, run `npm install`
* Once you're done installing, run `npm run start:dev`
* You should get the follwing
```
[nodemon] 3.0.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: ts,json
[nodemon] starting `ts-node src/index.ts
```

## How to Test

1. Create a file you intend to upload e.g `echo "hello file upload" >> hello.txt`
2. Upload the file using curl `curl -F myupload=@hello.txt localhost:3000/single`
3. Run `ls text-files`, you should have 1 file with random name

 
