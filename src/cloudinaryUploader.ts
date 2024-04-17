import { IFileUploader } from "./FileUploadService";

export class CloudinaryUploader implements IFileUploader {
	upload(file: string) {
		console.log("File is uploaded to Cloudinary" + file);
	}
}
