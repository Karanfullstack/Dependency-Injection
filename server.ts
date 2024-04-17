import app from "./src/app";

const port = 3000;

app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});
