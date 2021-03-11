const express = require("express");
const postmark = require("postmark");
const sgMail = require("@sendgrid/mail");
const fs = require("fs");
const readline = require("readline");
const { google } = require("googleapis");
const FormData = require("./models/form");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");

require("dotenv").config();

const app = express();
const uri = process.env.MONGODB_URI;

require("dotenv").config();
sgMail.setApiKey(process.env.SENDGRID_ZERO_API_KEY);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/", async (req, res) => {
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  try {
    await client.connect();

    const database = client.db("cccaa");
    const collection = database.collection("form-data");

    // Query for a movie that has the title 'Back to the Future'
    const query = {};
    const data = await collection.find();

    return res.json(data);
  } catch (err) {
    console.log(err);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
});

app.post("/api/post", async (req, res) => {
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  try {
    await client.connect();
    const database = client.db("cccaa");
    const collection = database.collection("form-data");
    let newData = new FormData({ ...req.body });
    const results = await collection.insertOne(newData);
    console.log("successful baby");
    console.log(results);

    let str = "";
    for (let x in req.body) {
      if (x !== "currentStep" && x !== "lastStep") {
        // console.log(`${x}: ${req.body[x]}`);
        str += `<p>${x}: ${req.body[x]}</p>`;
      }
    }
    const msg = {
      to: "santibout@yahoo.com",
      from: "samuel.santibout@gmail.com",
      subject: "Sending with SendGrid is Fun",
      text: req.body.toString(),
      html: `${str}`,
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
    res.status(200).send("fin");
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
