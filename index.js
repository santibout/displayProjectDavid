const express = require("express");
const postmark = require("postmark");
const sgMail = require("@sendgrid/mail");
const fs = require("fs");
const readline = require("readline");
const { google } = require("googleapis");

const app = express();

require("dotenv").config();
console.log("sendgrid api key: ", process.env.SENDGRID_ZERO_API_KEY);
sgMail.setApiKey(process.env.SENDGRID_ZERO_API_KEY);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/", (req, res) => {
  res.send("hi");
});

app.post("/api/post", (req, res) => {
  console.log("-----------------------------------------");
  console.log(req.body);
  console.log("-----------------------------------------");
  try {
    let str = "";
    for (let x in req.body) {
      if (x !== "currentStep" && x !== "lastStep") {
        console.log(`${x}: ${req.body[x]}`);
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
    res.send("fin");
  } catch (err) {
    console.log("Error Error Error");
    res.send("Error... Error... Error...", err);
  }
});

app.listen(3201, () => console.log("Project David Is Live"));
