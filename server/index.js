import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import Workshop from "./workshopModel.js";
import Price from "./priceModel.js";
import Blog from "./blogModel.js";
import Guide from "./guideModel.js";
import Subscriber from "./subscriberModel.js";
import assetsRouter from "./assetsRouter.js";
import homeRouter from "./homeRouter.js";
import helmet from "helmet";
import postmark from "postmark";

const app = express();
const publicPath = path.join(path.resolve(), "../client/public");
const distPath = path.join(path.resolve(), "../client/dist"); // production assets file path

app.use(cors({
  origin: [
    'https://www.hiddenvalleyworkshops.com.au',
    'https://www.hiddenvalleysustainablelivingworkshops.com.au'
  ],
}));

dotenv.config();

const port = process.env.PORT;

app.use(bodyParser.json()); // to convert the request into JSON
app.use(bodyParser.urlencoded({ extended: true }));

const uri = process.env.MONGODB_URI;

// Connect to database
mongoose.connect(uri, {
  dbName: process.env.DB_NAME,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB database connected..."))
  .catch((err) => console.log(err));

// APIs
app.get('/getData', async (req, res) => {
  try {
    const data = await Workshop.find({});
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching workshop data');
  }
});

app.get('/getPriceData', async (req, res) => {
  try {
    const priceData = await Price.find({});
    res.send(priceData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching price data');
  }
});

app.get('/getBlogData', async (req, res) => {
  try {
    const blogData = await Blog.find({});
    res.send(blogData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching blog posts');
  }
});

app.get('/getGuides', async (req, res) => {
  try {
    const guides = await Guide.find({});
    res.send(blogData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching blog posts');
  }
});

// Route to handle subscription form submission
app.post('/subscribe', async (req, res) => {
  try {
    const { name, email } = req.body;

    // Save subscriber details to MongoDB
    const subscriber = new Subscriber({ name, email });
    await subscriber.save();

    res.status(200).json({ message: 'Subscription successful!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Route to handle contact form
app.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Send email
    const client = new postmark.ServerClient(process.env.POSTMARK_API);
    await client.sendEmail({
      "From": "bonnie@hiddenvalleyworkshops.com.au",
      "To": "bonnie@hiddenvalleyworkshops.com.au",
      "Subject": "Message from " + name + " (" + email + ")",
      "TextBody": message,
    });

    res.status(200).json({ message: 'Message sent!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' })
  };
});

// Assets path based on the environment running
if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(distPath));
} else {
  app.use("/", express.static(publicPath));
  app.use("/src", assetsRouter);
};
app.use(homeRouter);
app.use(helmet);
app.listen(port, () => {
  console.log(`Web server listening on port ${port}`);
});
