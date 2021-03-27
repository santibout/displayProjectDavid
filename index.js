const express = require("express");
const sgMail = require("@sendgrid/mail");
const FormData = require("./models/form");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const HTMLToPDF = require("html-pdf-node");
const template = require("./documents");
const fs = require("fs");
const openFile = require("open");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
const uri = process.env.MONGODB_URI;

require("dotenv").config();
sgMail.setApiKey(process.env.SENDGRID_ZERO_API_KEY);

app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://santibout.github.io");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(
  bodyParser.urlencoded({
    limit: "20mb",
    parameterLimit: 100000,
    extended: true,
  })
);

app.get("/api", async (req, res) => {
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  try {
    console.log("trying to get data");
    await client.connect();

    const database = client.db("cccaa");
    const collection = database.collection("form-data");

    const data = await collection.find().toArray();
    if (data) {
      console.log("data: ......");
      console.log(data);
    }

    res.status(200).send(data);
  } catch (err) {
    console.log("error getting data");
    console.log(err);
  } finally {
    await client.close();
  }
});

app.get("/", (req, res) => {
  res.send("this.is the home page");
});

app.get("/fetch-pdf", async (req, res) => {
  try {
    console.log("sending file");
    await openFile("attachment.pdf", { wait: true });
  } catch (err) {
    res.throw(err);
  }
});

app.post("/api/post", async (req, res) => {
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  await client.connect();
  const database = client.db("cccaa");
  const collection = database.collection("form-data");
  let newData = new FormData({ ...req.body });
  const results = await collection.insertOne(newData);
  await client.connect();
  let file = { content: template(req.body) };
  HTMLToPDF.generatePdf(file, {})
    .then((buffer) => {
      fs.writeFileSync("attachment.pdf", buffer);
      const attachment = fs.readFileSync("attachment.pdf").toString("base64");

      const msg = {
        from: "samuel.santibout@gmail.com",
        to: [
          "santibout@yahoo.com",
          "david@kayoventures.com",
          "chromiumxyz@gmail.com",
        ],
        // to: ["santibout@yahoo.com"],
        subject: "CCCAA Form Data",
        text: "Attached is the pdf",
        attachments: [
          {
            content: attachment,
            filename: "attachment.pdf",
            type: "application/pdf",
            disposition: "attachment",
          },
        ],
      };
      sgMail
        .send(msg)
        .then(() => {
          console.log("Email sent");
        })
        .catch((error) => {
          console.log("error trying to send email");
          console.error(error);
        });
    })
    .catch((err) => {
      console.log("something went wrong here");
      console.log(err);
    });
});
app.listen(process.env.PORT || 3201, () =>
  console.log("Project David Is Live")
);
