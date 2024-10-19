import { UploaderI } from "./FileUploadService";
export class Cloudinary implements UploaderI {
    async upload(file: string) {
        console.log("file uploading using cloudinary");
        return true;
    }
}
