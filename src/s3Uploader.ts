import { UploaderI } from "./FileUploadService";
export class S3 implements UploaderI {
    async upload(file: string) {
        console.log("File is uploading using s3 uploader" + file);
        return true;
    }
}
