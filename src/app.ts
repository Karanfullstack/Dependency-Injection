import { Request, Response } from "express";
import express from "express";
import { FileUplaoder } from "./FileUploadService";
import { S3Upolader } from "./s3Uploader";
import { CloudinaryUploader } from "./cloudinaryUploader";

const app = express();

app.get("/file", (req: Request, res: Response) => {
	new FileUplaoder(new CloudinaryUploader()).upload(req, res);
});

export default app;
