import { type IFileUploadService } from "./FileUploadService";

export class S3Uploader implements IFileUploadService {
	async upload(filename: string) {
		console.log(`Uploading ${filename} to S3...`);
		return true;
	}
}
