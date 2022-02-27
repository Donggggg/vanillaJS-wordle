import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile("index.html");
});

app.listen(port);
