import { IFileUploader } from "./FileUploadService";

export class S3Upolader implements IFileUploader {
	upload(file: string) {
		console.log("File is uploaded to S3" +	file);
	}
}
