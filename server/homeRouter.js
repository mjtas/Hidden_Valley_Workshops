import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";
import dotenv from "dotenv";
dotenv.config();

const homeRouter = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const environment = process.env.NODE_ENV;
console.log('Environment:', environment);

const parseManifest = async () => {
  if (environment !== "production") return {};

  const manifestPath = path.join(
    __dirname,
    "../client",
    "dist",
    "manifest.json"
  );
  const manifestFile = await fs.readFile(manifestPath);

  return JSON.parse(manifestFile);
};

homeRouter.get("/*", async (_req, res) => {
  const data = {
    environment,
    manifest: await parseManifest(),
  };

  res.render(
    path.join(__dirname, "../client/views", "index.html.ejs"),
    data
  );
});

export default homeRouter;