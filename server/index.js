import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";
import assetsRouter from "./assetsRouter.js";

const app = express();
dotenv.config();
const port = 3000;

app.use(cors()); // to allow cross origin requests
app.use(bodyParser.json()); // to convert the request into JSON
app.use(bodyParser.urlencoded({ extended: true })); // for parsing applica

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
  dbName: process.env.DB_NAME,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

const workshopSchema = new mongoose.Schema({
  _id: String,
  name: String,
  date: Date,
  clicks: Number,
  text: String,
  image: String,
  show: Boolean,
  premium: Boolean,
  link: String,
}, { collection: 'workshops' });

const Workshop = mongoose.model('Workshop', workshopSchema);

app.get('/getData', async (req, res) => {
  try {
    const data = await Workshop.find({});
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching workshop data');
  }
});

const priceSchema = new mongoose.Schema({
  _id: String,
  type: String,
  doublePrice: String,
  singlePrice: String,
}, { collection: 'prices' });

const Price = mongoose.model('Price', priceSchema);

app.get('/getPriceData', async (req, res) => {
  try {
    const priceData = await Price.find({});
    res.send(priceData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching price data');
  }
});

app.listen(port, () => {
  console.log(`CORS-enabled web server listening on port ${port}`);
});

app.get('/', (req, res) => {
  const environment = process.env.NODE_ENV || 'development';
  res.render("../../client/views/index.html.ejs", { environment });
});

const publicPath = path.join(path.resolve(), "../client/public");
app.use("/", express.static(publicPath));
app.use("/src", assetsRouter);

const environment = process.env.NODE_ENV;

const parseManifest = async () => {
  if (environment !== "production") return {};

  const manifestPath = path.join(
    __dirname,
    "../../client",
    "dist",
    "manifest.json"
  );
  const manifestFile = await fs.readFile(manifestPath);

  return JSON.parse(manifestFile);
};

const distPath = path.join(path.resolve(), "../client/dist"); // production assets file path
const router = express.Router();
router.get("/*", async (_req, res) => {
  const data = {
    environment,
    manifest: await parseManifest(),
  };

  res.render(
    path.join(__dirname, "../../client/views", "index.html.ejs"),
    data
  );
});

// Create route
// Assets path based on the environment running
if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(distPath));
} else {
  app.use("/", express.static(publicPath));
}