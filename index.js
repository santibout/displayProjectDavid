const express = require("express");
const sgMail = require("@sendgrid/mail");
const FormData = require("./models/form");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const pdfDoc = require("pdfkit");
const pdf = require("html-pdf");
const doc = new pdfDoc();
const template = require("./documents");
const fs = require("fs");

require("dotenv").config();

const app = express();
const uri = process.env.MONGODB_URI;

require("dotenv").config();
sgMail.setApiKey(process.env.SENDGRID_ZERO_API_KEY);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.post("/api/post", async (req, res) => {
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  try {
    pdf
      .create(template(req.body.fullName), {})
      .toFile("attachment.pdf", async (err, result) => {
        if (err) {
          result.send(Promise.reject());
        }
        const attachment = fs.readFileSync(result.filename).toString("base64");

        const msg = {
          from: "samuel.santibout@gmail.com",
          to: ["santibout@yahoo.com", "david@kayoventures.com"],
          subject: "CCCAA Form Data",
          text: req.body.toString(),
          // html: `<h1>See Attachments For Details</h1>`,
          attachments: [
            {
              content: attachment,
              filename: "attachment.pdf",
              type: "application/pdf",
              disposition: "attachment",
            },
          ],
        };
        //   sgMail
        //     .send(msg)
        //     .then(() => {
        //       console.log("Email sent");
        //     })
        //     .catch((error) => {
        //       console.log("error error error");
        //       console.error(error);
        //     });
        // });

        // await client.connect();
        // const database = client.db("cccaa");
        // const collection = database.collection("form-data");
        // let newData = new FormData({ ...req.body });
        // const results = await collection.insertOne(newData);
        // console.log(results);
        console.log(attachment)
        res.status(200).send(attachment);
      });
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
