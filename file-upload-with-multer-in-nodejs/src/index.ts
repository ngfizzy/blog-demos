import express from "express";
import cors from "cors";
import multer from "multer";
import * as fs from "fs";

// create an express app
const app = express();

// enable cors for all http VERBS and ORIGINS
app.use(cors());

const uploader = multer({ dest: "tmp/" });

// create a default endpoint that returns a file uploads response
app.get("/", (req, res) => {
  return res.json({ message: "welcome to file upload" });
});

// create an endpoint capble of handling a single file upload at a time
app.post("/single", uploader.single("myupload"), (req, res) => {
  console.log(req.file);
  const fileNameParts = req?.file?.originalname?.split?.(".");
  // if the file has an extension, get the extension; else, make the extension an empty string
  const fileExt = fileNameParts?.pop?.() ?? "";

  switch (fileExt.toLowerCase()) {
    case "json":
      // move file to json
      if (!fs.existsSync("./json-files")) {
        fs.mkdirSync("./json-files");
      }

      fs.writeFileSync(
        `./json-files/${req.file?.filename}`,
        fs.readFileSync(`./tmp/${req.file?.filename}`),
      );
      break;
    case "txt":
      // move file to text
      if (!fs.existsSync("./text-files")) {
        fs.mkdirSync("./text-files");
      }
      fs.writeFileSync(
        `./text-files/${req.file?.filename}`,
        fs.readFileSync(`./tmp/${req.file?.filename}`),
      );
      break;
    default:
      // move to others
      if (!fs.existsSync("./other-files")) {
        fs.mkdirSync("./other-files");
      }
      fs.writeFileSync(
        `./other-files/${req.file?.filename}`,
        fs.readFileSync(`./tmp/${req.file?.filename}`),
      );
  }
  return res.status(201).json({ message: "file uploaded successfully" });
});

// create an endpoint capable of handling multiple file upload
app.post("/multi", uploader.array("myuploads"), (req, res) => {
  console.log(req.files);

  for (const file of req.files as any[]) {
    const fileNameParts = file?.originalname?.split?.(".");
    // if the file has an extension, get the extension; else, make the extension an empty string
    const fileExt = fileNameParts?.pop?.() ?? "";

    switch (fileExt.toLowerCase()) {
      case "json":
        // move file to json
        if (!fs.existsSync("./json-files")) {
          fs.mkdirSync("./json-files");
        }

        fs.writeFileSync(
          `./json-files/${file?.filename}`,
          fs.readFileSync(`./tmp/${file.filename}`),
        );
        break;
      case "txt":
        // move file to text
        if (!fs.existsSync("./text-files")) {
          fs.mkdirSync("./text-files");
        }
        fs.writeFileSync(
          `./text-files/${file.filename}`,
          fs.readFileSync(`./tmp/${file.filename}`),
        );
        break;
      default:
        // move to others
        if (!fs.existsSync("./other-files")) {
          fs.mkdirSync("./other-files");
        }
        fs.writeFileSync(
          `./other-files/${file.filename}`,
          fs.readFileSync(`./tmp/${file.filename}`),
        );
    }
  }

  return res.status(201).json({ message: "files  uploaded successfully" });
});

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    if (err instanceof multer.MulterError) {
      console.log("Multer error occurred: ", err.stack);

      return res.status(400).json({ message: "file upload error occurred" });
    }

    console.log("Unexpected error occurred: ", err.stack);

    return res
      .status(500)
      .json({ error: true, message: "Something went wrong" });
  },
);

// a catch-all middleware for unknown endpoints
app.use("*", (req, res) => {
  return res.status(404).json({ message: "resource not found" });
});

app.listen(3000);
