import express from "express";
import { Cloudinary } from "./cloudinaryUploader";
import { FileUploader } from "./FileUploadService";
import { S3 } from "./s3Uploader";

const app = express();
app.get("/file", (req, res) => {
    const type = req.query as { bucket: string };
    if (type.bucket === "s3") {
        new FileUploader(new S3()).upload(req, res);
    } else if (type.bucket === "cloudinary") {
        new FileUploader(new Cloudinary()).upload(req, res);
    } else {
        res.json({ message: "Invalid bucket" });
    }
});
export default app;
