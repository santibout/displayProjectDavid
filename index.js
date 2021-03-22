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

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

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

// app.post("/create-pdf", (req, res) => {
//   console.log("in server this code ran");
//   pdf
//     .create(template(req.body), { format: "Letter", orientation: "landscape" })
//     .toFile("result.pdf", (err) => {
//       if (err) {
//         res.send(Promise.reject());
//       }
//       res.send(Promise.resolve());
//     });
// });

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
  let file = { content: template(req.body) };
  let options = {};
  HTMLToPDF.generatePdf(file, {})
    .then((buffer) => {
      console.log("buffer: ", buffer);
      fs.writeFileSync("attachment.pdf", buffer);
      console.log(fs.readFileSync("attachment.pdf", "utf-8"));

      const msg = {
        // from: "samuel.santibout@gmail.com",
        to: ["santibout@yahoo.com", "david@kayoventures.com"],
        subject: "CCCAA Form Data",
        text: "Attached is the pdf",
        attachments: [
          {
            content: "./attachment.pdf",
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
