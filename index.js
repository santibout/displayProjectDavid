const express = require("express");
const postmark = require("postmark");
const sgMail = require("@sendgrid/mail");

const app = express();

require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_ZERO_API_KEY);

const msg = {
  to: "santibout@yahoo.com", // Change to your recipient
  from: "samuel.santibout@gmail.com", // Change to your verified sender
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/", (req, res) => {
  res.send("hi");
});

app.post("/api/post", (req, res) => {
  console.clear();
  // console.log("-----------------------------------------");
  // console.log(req.body);
  // console.log("-----------------------------------------");
  let str = "";
  for (let x in req.body) {
    if (x !== "currentStep" && x !== "lastStep") {
      console.log(`${x}: ${req.body[x]}`)
      str += `<p>${x}: ${req.body[x]}</p>`;
    }
  }
  const msg = {
    to: "santibout@yahoo.com", // Change to your recipient
    from: "samuel.santibout@gmail.com", // Change to your verified sender
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
});

app.listen(3201, () => console.log("server running on port 3201"));
