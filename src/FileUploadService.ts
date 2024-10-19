import { Request, Response } from "express";

export interface UploaderI {
    upload(file: string): Promise<boolean>;
}

export class FileUploader {
    constructor(private uploader: UploaderI) {}
    upload(req: Request, res: Response) {
        this.uploader.upload("file");
        res.json({ message: "File uploaded successfully" });
    }
}
