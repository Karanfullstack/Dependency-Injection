import { type IFileUploadService } from "./FileUploadService";

export class CloudinaryUploader implements IFileUploadService {
	async upload(filename: string) {
		console.log(`Uploading ${filename} to cloudinary... `);
		return true;
	}
}
