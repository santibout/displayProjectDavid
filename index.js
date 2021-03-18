const express = require("express");
const sgMail = require("@sendgrid/mail");
const FormData = require("./models/form");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const pdf = require("html-pdf");
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

app.get("/fetch-pdf", async (req, res) => {
  console.log("sending file");
  await openFile("attachment.pdf", { wait: true });
  res.send("file sent");
});

app.post("/api/post", async (req, res) => {
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  try {
    pdf
      .create(template(req.body), {
        format: "Letter",
        orientation: "landscape",
      })
      .toFile("attachment.pdf", async (err, result) => {
        if (err) {
          result.send(Promise.reject());
        }
        const attachment = fs.readFileSync(result.filename).toString("base64");

        const msg = {
          from: "samuel.santibout@gmail.com",
          to: ["santibout@yahoo.com", "david@kayoventures.com"],
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
            console.log("error error error");
            console.error(error);
          });
      });

    await client.connect();
    const database = client.db("cccaa");
    const collection = database.collection("form-data");
    let newData = new FormData({ ...req.body });
    const results = await collection.insertOne(newData);
    res.status(200).send("Email Sent");
  } catch (err) {
    console.log("Error Error Error");
    console.log(err);
    res.status(400).send("Error... Error... Error...", err);
  } finally {
    await client.close();
  }
});

app.listen(process.env.PORT || 3201, () =>
  console.log("Project David Is Live")
);
