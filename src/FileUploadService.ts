import { Request, Response } from "express";

export interface IFileUploadService {
	upload: (filename: string) => Promise<boolean>;
}

export class FileUploadService {
	constructor(private uploader: IFileUploadService) {}
	upload(req: Request, res: Response) {
		this.uploader.upload("song.mp3");
		res.json({ message: "data is uploading" });
	}
}
