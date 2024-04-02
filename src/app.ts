import express from "express";
import { FileUploadService } from "./FileUploadService";
import { S3Uploader } from "./s3Uploader";
import { CloudinaryUploader } from "./cloudinaryUploader";

const app = express();

app.get("/file-upload", (req, res) => {
	const uploadType = req.query.uploader;
	if (uploadType === "s3") {
		const s3Uploader = new S3Uploader();
		new FileUploadService(s3Uploader).upload(req, res);
		return;
	} else if (uploadType === "cloudinary") {
		const cloudinaryUplaoder = new CloudinaryUploader();
		new FileUploadService(cloudinaryUplaoder).upload(req, res);
		return;
	} else {
		res.json({ error: "Invalid Upload Service.." });
		return;
	}
});

export default app;
