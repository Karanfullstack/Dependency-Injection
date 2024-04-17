import { Request, Response } from "express";
export interface IFileUploader {
	upload(file: string): void;
}

export class FileUplaoder {
	constructor(private uplaoder: IFileUploader) {}
	upload(req: Request, res: Response) {
		this.uplaoder.upload("file");
		res.send("file is uploaded");
	}
}
